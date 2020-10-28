import Mock from 'mockjs'
import { getQueryParameters } from '../util'

const getUserInfo = (options: any) => {
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

const lessonsList = <T>(options:T)=>{
  let param = getQueryParameters(options)
  let limit = Number(param.limit)
  let currentCategory = Number(param.category)
  let item
  let AllItem = { title: 'ALL类型', url: '/img/js.jpg', price: 2000, category: 0 }
  let VueItem = { title: 'VUE类型', url: '/img/vue3.0.jpg', price:1200, category:1}
  let ReactItem =  { title: 'REACT类型', url: '/img/react.jpg', price:1800, category:2}
  let NodeItem =  { title: 'NODE类型', url: '/img/node.png', price:1660, category:3}
  switch (currentCategory) {
    case 0:
      item = AllItem
      break;
    case 1:
      item = VueItem
      break;
    case 2:
      item = ReactItem
      break;
    case 3:
      item = NodeItem
      break;
    default:
      item = []
      break;
  }
  const data = Mock.mock({
    hasMore:true,
    loading:false,
    limit:10,
    offset:0,
    [`list|${limit}`]: [item]
  })
  const items = data
  return {
    code: 200,
    data: items
  }
}

Mock.mock(/\/api\/user\/info/, 'get', getUserInfo)
Mock.mock(/\/api\/slider\/list/, 'get', sliderList)
Mock.mock(/\/api\/lessons\/list/, 'get', lessonsList)
