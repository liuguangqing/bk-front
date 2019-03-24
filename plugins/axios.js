import Vue from 'vue'
import axios from 'axios'
import {
  Message,
  Notification
} from 'element-ui'
import qs from 'qs'

const Api = '/api'

const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  // timeout: 5000 // request timeout
})

service.defaults.timeout = 5000
// service.defaults.baseURL = `http://172.20.47.245:2345/api`
// service.defaults.withCredentials = true
// POST传参序列化
service.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 返回状态判断
service.interceptors.response.use(function (res) {
  // Notification({
  //   message: '返回数据',
  //   type: 'success',
  //   duration: 5 * 1000
  // })
  return res.data
}, function (error) {
  // Notification({
  //   message: '错误',
  //   type: 'error',
  //   duration: 5 * 1000
  // })
  return Promise.reject(error)
})

export function getData(url) {
  return service({
    url: url,
    method: 'get',
  })
}

export function postData(url, params) {
  return service({
    url: url,
    method: 'post',
    params
  })
}
export default {
  // 获取导航信息
  rightData() {
    return postData(Api + '/getpes_post')
  },
  // 获取导航信息
  navData() {
    return postData(Api + '/getnav')
  },
  // 获取导航信息
  userInfoData() {
    return postData(Api + '/getUserInfo')
  },
  // 插入数据 
  // insertData() {
  //   return postData(Api + '/addUserMsg')
  // },
  // 友情链接 
  getfriend() {
    return postData(Api + '/getfriend')
  },
  // 文章列表（所有）
  getessayAll(params) {
    return postData(Api + '/getessayAll', params)
  },
  // 文章列表（分页）
  getessayPage(params) {
    return postData(Api + '/getessayPage', params)
  },
  // 文章详情
  getessayDetial(params) {
    return postData(Api + '/getessayDetial', params)
  },

  // 前端相关
  getFrontAbout(params) {
    return postData(Api + '/getFrontAbout', params)
  },
  // 标签云
  // getTagsList(params) {
  //   return postData(Api + '/getTagsList', params)
  // }
}
