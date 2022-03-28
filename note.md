# vite 相关

## 路径别名

1.`npm i @types/node -d` vite 默认是没有 node 的模块的，安装后才能使用 path 2.`vite.config.js`中添加

```js
resolve: {
        alias: {
            "@": resolve(__dirname, 'src'), // 路径别名
        },
        extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己增减
    }

```

3.修改`tsconfig.json`

```json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".", // 用于设置解析非相对模块名称的基本目录，相对模块不会受到baseUrl的影响
    "paths": {
      // 用于设置模块名到基于baseUrl的路径映射
      "@/*": ["src/*"]
    }
    // ...
  }
}
```

## 使用环境变量

vue-cli 中使用`process.env.NODE_ENV`判断当前是什么环境，而 vite 中没有 procee
通过`import.meta.mode`可以判断是什么环境

### 在不同的环境使用不同的环境变量

创建`.env.development`、`.env.production`文件
定义变量必须以`VITE_`开头，例如`VITE_BASE_URL`，这样才能在项目内使用环境变量
使用时`import.meta.env.name`

#### 注意:默认 vite 会自动为环境变量添加类型

但如果想要查看这些环境变量类型的智能提示时，还需要在`env.d.ts`中配置

```ts
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_BASE_NAME: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

## 动态加载路由

### 问题一：vite 没有 require 模块

#### 批量导入文件

webpack 中有自带的 require 对象

```ts
const modulesFiles = require.context('./modules', true, /\.js$/) //webpack
const modulesFiles = import.meta.globEager('./module/*.js') // vite
```

项目中是想要使用 router/main 中所有文件夹里的 ts 文件

```ts
import.meta.globEager('../router/*/*/*.js')
```

### 问题二：如何拿到每个 route 对象,主要解决一个异步问题

```ts
// utils/mapMenus.ts
const routeFiles = import.meta.glob('../router/main/*/*/*.ts')
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
              // 根据路径找到某个route
              const route = allRoutes.find((route) => {
                return route.path === menus[key].url
              })
              if (route) {
                routes.push(route)
              }
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
```

# 提交 githun

```js
git add test.php（随便某个文件）
git commit -m "第一次提交" //注释说明
git remote add origin http:XXX（这里github仓库地址）
git push -u origin master
```

# Element-plus

## 按需导入

`npm install element-plus --save`
`npm install -D unplugin-vue-components unplugin-auto-import`

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
}
```

## 使用 icon

`npm i @element-plus/icons`
使用时需要引入，例如

```js
<template>
<span class="custom-tabs-label">
          <el-icon class="icon"><user /></el-icon>
          <span>用户名登录</span>
</template>
<script>
import {  User } from '@element-plus/icons';
</script>
```

## Menu 菜单组件中使用 for 循环的问题

当我们从接口获取到数据，然后进行循环遍历菜单时。

### template 标签上循环，但是不能绑定 key 值

解决方法 在其子元素上绑定 key 值就行

### 遍历出来的<el-menu-item>或者<el-sub-menu>都需要 index 值

注意这里的 index 必须是字符串类型

```html
<el-menu-item :index="item.id + ''"></el-menu-item>
```

### 使用字体图标

```html
<el-icons>
  <component :is="iconName">
</el-icons>
```

### 1.绑定 key 问题

# script setup 中使用 ref

ref 一般是在父组件内用于获取子组件上的一些属性方法的
但在 script setup 中，父组件设置了 ref 是无法获取到子组件的方法的，需要将方法暴露出去

```vue
// 子组件 // pageContent.vue
<script setup lang="ts">
const loginAction = () => {
  console.log('account正在开始登录')
}
// 使用defineExpose将方法暴露出去
defineExpose({ loginAction })
</script>
```

```js
// 父组件script内
const pageContentRef = ref<InstanceType<typeof pageContent>>()
pageContentRef.value?.loginAction()
```

按照上面方法确实可以运行了，但是 defineExpose 会标红为未定义，这是 eslint 的问题
只需要

```js
// .eslintrc.js
module.exports = {
  env: {
    // 添加这一行
    'vue/setup-compiler-macros': true
  }
}
```
