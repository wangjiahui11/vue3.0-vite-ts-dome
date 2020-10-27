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
