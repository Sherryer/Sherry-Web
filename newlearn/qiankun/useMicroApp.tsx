/**
 * @file 启用微应用
 */

import _ from 'lodash';
import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start, addGlobalUncaughtErrorHandler, removeGlobalUncaughtErrorHandler } from 'qiankun';
import { Loading } from 'component';
import { useLocation } from 'react-router-dom';

import { REACT_APP_PUBLIC_URL } from '@/constants/Constants';
import { getMicroAppConfig } from '@/api/wuji';

// 格式化激活路径（英文逗号分隔【字符串】 => 单项去除收尾空格、去除无效项【数组】）
const formatValidRules = (rules: string) => {
  try {
    return _.reduce(JSON.parse(rules), (ret: any[], curRule) => {
      const curTrimRule = _.trim(curRule);
      if (curTrimRule.length > 0) {
        ret.push(curTrimRule);
      }
      return ret;
    }, []);
  } catch (error) {
    return [];
  }
};

let loadingStart = false;
// loading行为
const loader = (loading: boolean) => {
  if (loading === true && !loadingStart) {
    // 添加全局错误捕获
    addGlobalUncaughtErrorHandler(errorHandler);

    loadingStart = true;
    const loadingElem = document.querySelector('#microapp-loading');
    ReactDOM.render(<Loading />, loadingElem);
  } else if (loading === false && loadingStart) {
    // 移除全局错误捕获
    removeGlobalUncaughtErrorHandler(errorHandler);

    loadingStart = false;
    const loadingElem = document.querySelector('#microapp-loading');
    ReactDOM.unmountComponentAtNode(loadingElem);
  }
};

// 异常处理
const errorHandler = () => {
  // 重置loading状态
  loader(false);

  // eslint-disable-next-line react/no-render-return-value
  return ReactDOM.render(
    <div className="crm-error-boundary">
      <h1>
        出错了，
        <span className="text-active" onClick={() => history.replaceState(null, '', '/')}>返回首页</span>
      </h1>
    </div>,
    document.querySelector('#microapp-loading'),
  );
};

const originRemoveChild = HTMLBodyElement.prototype.removeChild;
// 微应用声明周期钩子
const microAppLifeCycles = {
  beforeMount: (app: any) => {
    // qiankun劫持方法基础上，再次proxy，为挂载到body的新节点，增加一层div data-qiankun嵌套
    // qiankun会在子应用销毁时重置成原生方法
    HTMLBodyElement.prototype.appendChild = new Proxy(HTMLBodyElement.prototype.appendChild, {
      apply(target, thisArg, node) {
        if (node[0].dataset.qiankun === app.name) {
          // 已有data-qiankun属性，直接使用原生方法
          Reflect.apply(target, thisArg, node);
        } else {
          // 创建新的div节点，作为子应用动态挂载节点的容器
          const newDom = document.createElement('div');
          // eslint-disable-next-line no-param-reassign
          newDom.dataset.qiankun = app.name;
          newDom.appendChild(node[0]);

          Reflect.apply(target, thisArg, [newDom]);
        }
      },
    });

    // qiankun劫持方法基础上，再次proxy，为挂载到body的新节点，增加一层div data-qiankun嵌套
    // qiankun会在子应用销毁时重置成原生方法
    HTMLBodyElement.prototype.removeChild = new Proxy(HTMLBodyElement.prototype.removeChild, {
      apply(target, thisArg, node) {
        const targetNode = node[0].parentNode;
        if (thisArg && thisArg.contains(targetNode)) {
          // 因为append时，真正挂载到body的是node的父节点（我们自己构造的）
          // 所以remove的时候，要移除node的父节点
          Reflect.apply(target, thisArg, [targetNode]);
        }
      },
    });
  },
  afterUnmount: (app: any) => {
    // 清除未移除干净的子应用动态挂载节点
    const microAppName = _.get(app, 'name');
    const curMicroAppDynamicNodes = document.body.querySelectorAll(`div[data-qiankun=${microAppName}]`);
    try {
      _.map(curMicroAppDynamicNodes, (node) => {
        // 只移除body下的子节点
        if (node.parentNode === document.body) {
          originRemoveChild.call(document.body, node);
        }
      });
    } catch (error) {
      console.error(`${microAppName} 子应用动态节点移除异常`, error);
    }
  },
};

export default (props: any) => {
  const { userInfo } = props;
  const { pathname } = useLocation();
  const [fetchStatus, setFetchStatus] = useState<string>('');
  const [fetchResponse, setFetchResponse] = useState<Record<string, any>[]>([]);

  // 请求无极配置
  useEffect(() => {
    try {
      (async () => {
        const { data } = await getMicroAppConfig({});
        if (_.isArray(data)) {
          setFetchResponse(data);
        }
        setFetchStatus('success');
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  // 微应用配置加载完成
  const microAppConfigLoaded = useMemo(() => (fetchStatus === 'success' || fetchStatus === 'error'), [fetchStatus]);
  // 微应用配置
  const microAppConfig = useMemo(() => _.reduce(fetchResponse, (prev: any[], config) => {
    const {
      active,
      name,
      activeRule,
      devEntry,
      testEntry,
      productionEntry,
    } = config;

    if (active) {
      const entry = (() => {
        // 本地开发环境
        if (process.env.NODE_ENV === 'development') {
          return devEntry;
        }
        // 正式环境
        if (process.env.DEPLOY_ENV === 'production') {
          return productionEntry;
        }
        // 测试环境
        return testEntry;
      })();
      prev.push({
        name,
        entry,
        activeRule: formatValidRules(activeRule),
        container: '#microapp-container',
        props: {
          userInfo,
        },
        loader,
      });
    }
    return prev;
  }, []), [fetchResponse, userInfo]);

  useEffect(() => {
    // 微应用配置拉取成功前，不进行初始化
    if (fetchStatus !== 'success') {
      return;
    }

    // 标记qiankun已启动，不再重复调用start
    // @ts-ignore
    if (!window.qiankunStarted) {
      console.log('[init] micro app');
      // @ts-ignore
      window.qiankunStarted = true;
      window.__MAIN_APP__ = 'agency';
      window.__BASE_PATH_NAME__ = '/ams';

      registerMicroApps(microAppConfig, microAppLifeCycles as any);
      start({
        prefetch: false,
        fetch(url, option) {
          return window.fetch(url, {
            ...option,
            cache: 'no-cache',
          });
        },
        sandbox: {
          // 改写微应用所有样式规则增加一个特殊的选择器规则来限定其影响范围
          // 最外层统一添加div[data-qiankun]
          experimentalStyleIsolation: true,
        },
      });
    }
  }, [fetchStatus, microAppConfig]);

  // 当前路径是否为微应用下路径
  const isMicroAppPath = useMemo(() => {
    // 微应用配置未加载完成，直接返回
    if (!microAppConfigLoaded) {
      return null;
    }
    const curPath = `${REACT_APP_PUBLIC_URL}${pathname}`;
    const microAppRules = _.flatten(_.map(microAppConfig, 'activeRule'));

    return _.some(microAppRules, (microAppRule) => _.startsWith(curPath, microAppRule));
  }, [pathname, microAppConfigLoaded, microAppConfig]);

  return {
    microAppConfigLoaded,
    isMicroAppPath,
    microAppRules: _.flatten(_.map(microAppConfig, 'activeRule')),
  };
};
