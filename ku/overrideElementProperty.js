/**
 * Created by Sherry on 2017/9/25.
 */
function overrideElementProperty (prototype,type) {
    var _descriptor= Object.getOwnPropertyDescriptor(prototype,'value');
    var _oldSet = _descriptor.set;
    _descriptor.set = function (value) {
        _oldSet.call(this,value);
        console.log("重写成功")
    };
    Object.defineProperty(prototype,type,_descriptor)

}