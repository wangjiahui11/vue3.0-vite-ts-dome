interface data {
  id: string,
  username: string,
  realName: string,
  roles: any[], // 理论上一个用户只有一个角色
  tel: string, // 手机号
  email: string, // 非必填
  status: number// 用户状态 0 -默认启用1-禁用
}

export interface UserInfo {
  code: number,
  data: data
}
