import { IBreadCrumb } from '@/base-ui/breadCrumb'
import { UserMenu, UserMenuList } from '@/service/login/types'
import { RouteRecordRaw } from 'vue-router'
// 获取第一个menu
let firstMenu = {} as UserMenu
// 将菜单映射到一个路由数组，再将这个数组添加到router的children
export function mapMenuesToRoutes(userMenus: UserMenuList): Promise<RouteRecordRaw[]> {
  return new Promise((resolve) => {
    const routes: RouteRecordRaw[] = []
    // 1.先加载默认所有的routes
    const allRoutes: RouteRecordRaw[] = []

    // 获取索引route文件
    const routeFiles = import.meta.glob('../router/main/*/*/*.ts')
    // 将所有的模块push到allRoutes中
    let flag = 0

    for (const path in routeFiles) {
      routeFiles[path]()
        .then((module) => {
          const file = module.default
          allRoutes.push(file)
        })
        // 这里要等到for循环里的异步操作结束，才能得到allRoutes,因此加一个flag判断
        .then(() => {
          ++flag
          if (flag === Object.keys(routeFiles).length) {
            const _recurseGetRoute = (menus: UserMenuList) => {
              for (const key in menus) {
                if (menus[key].type === 2) {
                  // 获取第一个菜单
                  if (Object.keys(firstMenu).length === 0) {
                    firstMenu = menus[key]
                  }
                  // 根据路径找到某个route
                  const route = allRoutes.find((route) => {
                    return route.path === menus[key].url
                  })
                  if (route) {
                    routes.push(route)
                  }
                  // 获取第一个menu
                } else {
                  _recurseGetRoute(menus[key].children)
                }
              }
            }
            _recurseGetRoute(userMenus)
            resolve(routes)
          }
        })
    }
  })

  // 2.根据参数userMenu菜单获取需要添加的routes
  // type===1表示是个折叠菜单，不会添加路由,递归调用判断其children
  // type===2
}
// 通过当前路径找到对应的menu
export function pathMapToMenu(userMenus: UserMenuList, currentPath: string): UserMenu | undefined {
  for (const key in userMenus) {
    const menu = userMenus[key]
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
// 找到面包屑路径
export function pathMapBreadcrumb(userMenus: UserMenuList, currentPath: string) {
  const breadcrumbs: IBreadCrumb[] = []
  for (const key in userMenus) {
    const menu = userMenus[key]
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs.push({ name: menu.name }) //一级菜单不给路径，因为不需要跳转
        breadcrumbs.push({ name: findMenu.name })
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return breadcrumbs
    }
  }
  return breadcrumbs
}
// 通过menu找到用户能操作的按钮(权限)
export function mapMenusToPermission(userMenus: UserMenuList) {
  const permission: string[] = []
  const _recurseGetPermission = (menus: UserMenuList) => {
    for (const key in menus) {
      const menu = menus[key]
      if (menu.type !== 3) {
        _recurseGetPermission(menu.children ?? [])
      } else {
        permission.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permission
}
// 获取树形菜单的叶子节点
export function menuMapLeafKeys(menuList: any[]) {
  const leafKeys: number[] = []
  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)
  return leafKeys
}

// 导出第一个菜单
export { firstMenu }
