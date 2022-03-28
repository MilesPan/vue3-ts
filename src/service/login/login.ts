import myRequest from '../index'
import { IAccount, IDataType, ILoginResult, UserInfo, UserMenuList } from './types'
enum LoginAPI {
  AccountLogin = '/login', // login
  LoginUserInfo = '/users/', // /user/:id
  UserMenu = '/role/' // role/:id/menu
}
// 登录验证，获取用户id和token
export function accountLoginRequest(account: IAccount) {
  return myRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
    showLoading: false
  })
}
// 通过id请求用户信息
export function requestUserInfoById(id: number) {
  return myRequest.get<IDataType<UserInfo>>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}
// 通过id请求用户的菜单
export function requestUserMenusByRoleId(id: number) {
  return myRequest.get<IDataType<UserMenuList>>({
    url: LoginAPI.UserMenu + id + '/menu'
  })
}
