import Mock from 'mockjs'
import { UserInfo } from "../typings/index";
const getUserInfo = (options: any): UserInfo => {
  return {
    code: 200,
    data: {
      id: '123123123',
      username: '12',
      realName: '真实姓名',
      roles: [{ roleId: 'admin', roleName: '超级管理员' }], // 理论上一个用户只有一个角色
      tel: '13576778888', // 手机号
      email: '235@126.com', // 非必填
      status: 0// 用户状态 0 -默认启用1-禁用
    }
  }
}

const sliderList=()=>{
  const data = Mock.mock({
    'items|4': [{
      id: '@id',
      name: '@name',
      'url|1': ['/img/js.jpg', '/img/node.png', '/img/react.jpg', '/img/vue3.0.jpg']
    }]
  })
  const items = data.items
  return {
    code: 200,
    data: items
  }
}

Mock.mock(/\/api\/user\/info/, 'get', getUserInfo)
Mock.mock(/\/api\/slider\/list/, 'get', sliderList)
