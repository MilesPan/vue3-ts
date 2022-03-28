/// <reference types="vite/client" />

// 使环境变量有智能提示
// interface ImportMetaEnv {
//   readonly VITE_BASE_URL: string
//   readonly VITE_BASE_NAME: string | undefined
// }

// interface ImportMeta {
//   readonly env: ImportMetaEnv
// }

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare let $store: any
declare module '*.json'
