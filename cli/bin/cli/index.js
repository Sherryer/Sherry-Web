#!/usr/bin/env node
//第一行其中#!/usr/bin/env node表示用node解析器执行本文件。

const program = require('commander')
const pkg = require('../package')
const chalk = require('chalk')
const download = require('download-git-repo');
const ora = require('ora');
const spinner = ora('Loading undead unicorns');
