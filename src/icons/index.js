import Vue from 'vue'

// 创建全局 svg图标组件
Vue.component('svg-icon', () => import('./SvgIcon'))

// 读取所有svg文件 并解析
/**
 * 第一个参数 指定目录
 * 第二个参数 是否读取子目录 - true遍历一次子目录
 * 第三个参数 正则匹配的文件名
 */
const req = require.context('./svg', false, /.svg$/)
req.keys().map(req)
