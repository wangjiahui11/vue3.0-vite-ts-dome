import request from '../utils/request'

// // --------------- 凭证列表---------
export function getUserInfo() {
  return request({
    url: '/api/user/info',
    method: 'get'
  })
}

export function getsliderList() {
  return request({
    url: '/api/slider/list',
    method: 'get'
  })
}

export function getsLessonsList<T>(params:T) {
  return request({
    url: '/api/lessons/list',
    method: 'get',
    params
  })
}
