import{C as c}from"./CardBox.a5efca74.js";import{C as x,D as y,F as h}from"./element-plus.8f542e47.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import{d as g,o as n,c as r,e,R as s,P as E,a3 as v,b as B,a as i,U as C,a0 as d,t as P,u,aq as A,ar as b}from"./@vue.60f1aaec.js";import"./@vueuse.e3ce8cae.js";import"./dayjs.7f6a9561.js";import"./axios.765908e4.js";import"./lodash-es.b0ae9094.js";import"./@element-plus.35a825cf.js";import"./@ctrl.2e36ce53.js";import"./async-validator.5d25c98b.js";import"./escape-html.e5dfadb9.js";import"./@popperjs.da6c49cb.js";import"./normalize-wheel-es.9a219a59.js";const S={class:"description"},k=g({props:{options:{default:()=>({})}},setup(t){return(l,D)=>{const m=x,o=y,_=h;return n(),r("div",S,[e(_,{border:"",column:t.options.column,title:t.options.title},{default:s(()=>[(n(!0),r(E,null,v(t.options.itemList,(p,f)=>(n(),B(o,{key:f,label:p.name,"label-align":"left",align:"left",width:"1"},{label:s(()=>[i("b",null,C(p.name),1)]),default:s(()=>[e(m,null,{default:s(()=>[d(C(p.description),1)]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1},8,["column","title"])])}}});var a=F(k,[["__scopeId","data-v-4658c045"]]);const L=[{title:"\u5F00\u53D1\u5DE5\u5177",desp:"Visual Studio Code"},{title:"\u7F16\u7A0B\u8BED\u8A00",desp:"TypeScript 4.x + JavaScript"},{title:"\u6784\u5EFA\u5DE5\u5177",desp:"Vite 2.x"},{title:"\u524D\u7AEF\u6846\u67B6",desp:"Vue 3.x"},{title:"\u8DEF\u7531\u5DE5\u5177",desp:"Vue Router 4.x"},{title:"\u72B6\u6001\u7BA1\u7406",desp:"Pinia 2.x"},{title:"UI \u6846\u67B6",desp:"Element Plus"},{title:"\u53EF\u89C6\u5316",desp:"Echart5.x"},{title:"\u5BCC\u6587\u672C",desp:"WangEditor"},{title:"\u5DE5\u5177\u5E93",desp:" @vueuse/core + dayjs + countup.js"},{title:"CSS \u9884\u7F16\u8BD1",desp:"Less"},{title:"HTTP \u5DE5\u5177",desp:"Axios"},{title:"Git Hook \u5DE5\u5177",desp:"husky"},{title:"\u4EE3\u7801\u89C4\u8303",desp:"EditorConfig + Prettier + ESLint"},{title:"\u63D0\u4EA4\u89C4\u8303",desp:"Commitizen + Commitlint"},{title:"\u81EA\u52A8\u90E8\u7F72",desp:"Centos + Jenkins + Nginx"}],j={itemList:[{name:"vue",description:"^3.2.25"},{name:"vue-router",description:"^4.0.14"},{name:"pinia",description:"^2.0.12"},{name:"axios",description:"^0.26.1"},{name:"element-plus",description:"^2.1.3"},{name:"less",description:"^4.1.2"},{name:"EChart",description:"^5.3.1"},{name:"dayjs",description:"^1.11.0"},{name:"wangeditor",description:"^4.6.17"}],column:2,title:"\u751F\u4EA7\u4F9D\u8D56:"},w={itemList:[{name:"typescript",description:"^4.5.4"},{name:"vite",description:"2.8.0"},{name:"vite-plugin-vue-setup-extend",description:"^0.4.0"},{name:"eslint",description:"^8.11.0"},{name:"prettier",description:"^2.5.1"},{name:"husky",description:"^7.0.0"},{name:"lint-staged",description:"^12.3.5"},{name:"commitizen",description:"^4.2.4"},{name:"@commitlint/config-conventional",description:"^12.1.1"},{name:"@types/node",description:"^17.0.21"},{name:"@typescript-eslint/eslint-plugin",description:"^5.15.0"},{name:"@typescript-eslint/parser",description:"^5.15.0"},{name:"cz-conventional-changelog",description:"^3.3.0"},{name:"@vue/compiler-sfc",description:"^3.0.5"},{name:"eslint-config-airbnb-base",description:"^14.2.1"},{name:"eslint-config-prettier",description:"^8.3.0"},{name:"eslint-plugin-import",description:"^2.25.4"},{name:"eslint-plugin-prettier",description:"^4.0.0"},{name:"eslint-plugin-vue",description:"^8.5.0"},{name:"vue-tsc",description:"^0.29.8"}],column:2,title:"\u5F00\u53D1\u4F9D\u8D56:"},T={itemList:[{name:"\u6587\u4EF6\u5939",description:"\u7EDF\u4E00\u5C0F\u5199, \u591A\u4E2A\u5355\u8BCD\u4F7F\u7528\u9A7C\u5CF0\u5F0F\u5199\u6CD5"},{name:"\u6587\u4EF6(.ts .vue .json .d.ts)",description:"\u7EDF\u4E00\u5C0F\u5199, \u591A\u4E2A\u5355\u8BCD\u4F7F\u7528\u9A7C\u5CF0\u5199\u6CD5"}],column:1,title:"\u6587\u4EF6\u540D\u79F0\u89C4\u8303"},M={itemList:[{name:"\u7EC4\u4EF6\u7684\u6587\u4EF6",description:"\u7EDF\u4E00\u5C0F\u5199, \u591A\u4E2A\u5355\u8BCD\u4F7F\u7528\u9A7C\u5CF0\u5199\u6CD5"},{name:"\u7EC4\u4EF6\u7684\u76EE\u5F55\u7ED3\u6784",description:"\u4F8B\u5982 button \u7EC4\u4EF6\uFF1Abutton/src/index.vue, \u7EDF\u4E00\u5728button/index.ts\u5BFC\u51FA"},{name:"\u7EC4\u4EF6\u5BFC\u5305\u987A\u5E8F",description:"\u5BFCvue\u6280\u672F\u6808\u7684\u5305 , \u5BFC\u7B2C\u4E09\u65B9\u7684\u5DE5\u5177\u51FD\u6570 , \u5BFC\u672C\u5730\u7684\u7EC4\u4EF6, \u5BFC\u672C\u5730\u7684\u5DE5\u5177\u51FD\u6570"},{name:"\u7EC4\u4EF6\u7684\u540D\u79F0",description:"\u7EDF\u4E00\u5927\u5199\u5F00\u5934\uFF0C\u9A7C\u5CF0\u547D\u540D"},{name:"\u7EC4\u4EF6\u5C5E\u6027\u987A\u5E8F",description:"name, components, props, emits, setup ..."},{name:"template\u6807\u7B7E",description:"\u76F4\u63A5\u4F7F\u7528\u7EC4\u4EF6\u540D ( \u4F8B\u5982\uFF1A<CasePannel/> )"},{name:"template\u6807\u7B7E\u5C5E\u6027\u987A\u5E8F",description:"v-if , v-for , ref, class, style, ... ,\u4E8B\u4EF6"},{name:"\u7EC4\u4EF6\u7684props",description:"\u5C0F\u5199\u5F00\u5934\uFF0C\u9A7C\u5CF0\u547D\u540D\uFF0C\u5FC5\u987B\u7F16\u5199\u7C7B\u578B\u9ED8\u8BA4\u503C"},{name:"\u7EC4\u4EF6\u7684\u6837\u5F0F",description:"\u4F5C\u7528\u57DF\uFF1Ascoped, lang = scss / less  ; \u7C7B\u540D\uFF1A\u7EDF\u4E00\u5C0F\u5199, \u591A\u4E2A\u5355\u8BCD\u4F7F\u7528\u9A7C\u5CF0\u5F0F\u5199\u6CD5"}],column:1,title:"\u7EC4\u4EF6\u7F16\u5199\u89C4\u8303"},V={itemList:[{name:"add \u64CD\u4F5C",description:"git add "},{name:"commit \u64CD\u4F5C",description:"git commit "},{name:"pull \u64CD\u4F5C",description:"git pull "},{name:"push \u64CD\u4F5C",description:"git push "}],column:1,title:"Git\u63D0\u4EA4\u89C4\u8303:"},I=`
vue3-ts-cms
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 auto-imports.d.ts
\u251C\u2500\u2500 components.d.ts
\u251C\u2500\u2500 index.html
\u251C\u2500\u2500 note.md
\u251C\u2500\u2500 note.md - \u5FEB\u6377\u65B9\u5F0F.lnk
\u251C\u2500\u2500 package-lock.json
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 public
\u2502   \u2514\u2500\u2500 favicon.ico
\u251C\u2500\u2500 src
\u2502   \u251C\u2500\u2500 App.vue
\u2502   \u251C\u2500\u2500 assets
\u2502   \u2502   \u251C\u2500\u2500 css
\u2502   \u2502   \u2502   \u251C\u2500\u2500 base.less
\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.less
\u2502   \u2502   \u2514\u2500\u2500 img
\u2502   \u2502       \u251C\u2500\u2500 login-bg.svg
\u2502   \u2502       \u251C\u2500\u2500 loginbgc.jpg
\u2502   \u2502       \u251C\u2500\u2500 logo.svg
\u2502   \u2502       \u251C\u2500\u2500 qq.png
\u2502   \u2502       \u2514\u2500\u2500 tiger.jpg
\u2502   \u251C\u2500\u2500 base-ui
\u2502   \u2502   \u251C\u2500\u2500 breadCrumb
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u251C\u2500\u2500 src
\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 BreadCrumb.vue
\u2502   \u2502   \u2502   \u2514\u2500\u2500 types
\u2502   \u2502   \u2502       \u2514\u2500\u2500 index.ts
\u2502   \u2502   \u251C\u2500\u2500 card
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 src
\u2502   \u2502   \u2502       \u2514\u2500\u2500 CardBox.vue
\u2502   \u2502   \u251C\u2500\u2500 description
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 src
\u2502   \u2502   \u2502       \u251C\u2500\u2500 DescriptionComponent.vue
\u2502   \u2502   \u2502       \u2514\u2500\u2500 type.ts
\u2502   \u2502   \u251C\u2500\u2500 echarts
\u2502   \u2502   \u2502   \u251C\u2500\u2500 data
\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 china.json
\u2502   \u2502   \u2502   \u251C\u2500\u2500 hooks
\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 useEchartsEffect.ts
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 src
\u2502   \u2502   \u2502       \u2514\u2500\u2500 BaseEchart.vue
\u2502   \u2502   \u251C\u2500\u2500 editor
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 src
\u2502   \u2502   \u2502       \u2514\u2500\u2500 MyEditor.vue
\u2502   \u2502   \u251C\u2500\u2500 form
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u251C\u2500\u2500 src
\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 formComponent.vue
\u2502   \u2502   \u2502   \u2514\u2500\u2500 types
\u2502   \u2502   \u2502       \u2514\u2500\u2500 index.ts
\u2502   \u2502   \u2514\u2500\u2500 tabel
\u2502   \u2502       \u251C\u2500\u2500 index.ts
\u2502   \u2502       \u251C\u2500\u2500 src
\u2502   \u2502       \u2502   \u2514\u2500\u2500 TableComponent.vue
\u2502   \u2502       \u2514\u2500\u2500 types
\u2502   \u2502           \u2514\u2500\u2500 index.ts
\u2502   \u251C\u2500\u2500 components
\u2502   \u2502   \u251C\u2500\u2500 nav-header
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 src
\u2502   \u2502   \u2502       \u251C\u2500\u2500 NavHeader.vue
\u2502   \u2502   \u2502       \u2514\u2500\u2500 UserInfo.vue
\u2502   \u2502   \u251C\u2500\u2500 nav-menu
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 src
\u2502   \u2502   \u2502       \u2514\u2500\u2500 NavMenu.vue
\u2502   \u2502   \u251C\u2500\u2500 page-echarts
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u251C\u2500\u2500 src
\u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 BarEcharts.vue
\u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 LineEchart.vue
\u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 MapEcharts.vue
\u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 PagePicChart.vue
\u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 PieEcharts.vue
\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 RoseEcharts.vue
\u2502   \u2502   \u2502   \u251C\u2500\u2500 types
\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 utils
\u2502   \u2502   \u2502       \u251C\u2500\u2500 convert-data.ts
\u2502   \u2502   \u2502       \u2514\u2500\u2500 coordinate-data.ts
\u2502   \u2502   \u251C\u2500\u2500 pageContent
\u2502   \u2502   \u2502   \u251C\u2500\u2500 config
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 src
\u2502   \u2502   \u2502       \u2514\u2500\u2500 pageContent.vue
\u2502   \u2502   \u251C\u2500\u2500 pageModal
\u2502   \u2502   \u2502   \u251C\u2500\u2500 config
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 src
\u2502   \u2502   \u2502       \u2514\u2500\u2500 pageModal.vue
\u2502   \u2502   \u2514\u2500\u2500 pageSearch
\u2502   \u2502       \u251C\u2500\u2500 config
\u2502   \u2502       \u2502   \u2514\u2500\u2500 index.ts
\u2502   \u2502       \u251C\u2500\u2500 index.ts
\u2502   \u2502       \u2514\u2500\u2500 src
\u2502   \u2502           \u2514\u2500\u2500 pageSearch.vue
\u2502   \u251C\u2500\u2500 env.d.ts
\u2502   \u251C\u2500\u2500 global
\u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2514\u2500\u2500 registerPtoperties.ts
\u2502   \u251C\u2500\u2500 hooks
\u2502   \u2502   \u251C\u2500\u2500 usePageModalEffect.ts
\u2502   \u2502   \u251C\u2500\u2500 usePageSearchEffect.ts
\u2502   \u2502   \u2514\u2500\u2500 usePermissionEffect.ts
\u2502   \u251C\u2500\u2500 main.ts
\u2502   \u251C\u2500\u2500 router
\u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2514\u2500\u2500 main
\u2502   \u2502       \u251C\u2500\u2500 analysis
\u2502   \u2502       \u2502   \u251C\u2500\u2500 dashboard
\u2502   \u2502       \u2502   \u2502   \u2514\u2500\u2500 DashboardPage.ts
\u2502   \u2502       \u2502   \u2514\u2500\u2500 overview
\u2502   \u2502       \u2502       \u2514\u2500\u2500 OverviewPage.ts
\u2502   \u2502       \u251C\u2500\u2500 product
\u2502   \u2502       \u2502   \u251C\u2500\u2500 category
\u2502   \u2502       \u2502   \u2502   \u2514\u2500\u2500 CategoryPage.ts
\u2502   \u2502       \u2502   \u2514\u2500\u2500 goods
\u2502   \u2502       \u2502       \u2514\u2500\u2500 GoodsPage.ts
\u2502   \u2502       \u251C\u2500\u2500 story
\u2502   \u2502       \u2502   \u251C\u2500\u2500 chat
\u2502   \u2502       \u2502   \u2502   \u2514\u2500\u2500 ChatPage.ts
\u2502   \u2502       \u2502   \u2514\u2500\u2500 list
\u2502   \u2502       \u2502       \u2514\u2500\u2500 ListPage.ts
\u2502   \u2502       \u2514\u2500\u2500 system
\u2502   \u2502           \u251C\u2500\u2500 department
\u2502   \u2502           \u2502   \u2514\u2500\u2500 DepartmentPage.ts
\u2502   \u2502           \u251C\u2500\u2500 menu
\u2502   \u2502           \u2502   \u2514\u2500\u2500 MenuPage.ts
\u2502   \u2502           \u251C\u2500\u2500 role
\u2502   \u2502           \u2502   \u2514\u2500\u2500 RolePage.ts
\u2502   \u2502           \u2514\u2500\u2500 user
\u2502   \u2502               \u2514\u2500\u2500 UserPage.ts
\u2502   \u251C\u2500\u2500 service
\u2502   \u2502   \u251C\u2500\u2500 analysis
\u2502   \u2502   \u2502   \u251C\u2500\u2500 dashboard.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 types.ts
\u2502   \u2502   \u251C\u2500\u2500 axios_demo.ts
\u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u251C\u2500\u2500 login
\u2502   \u2502   \u2502   \u251C\u2500\u2500 login.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 types.ts
\u2502   \u2502   \u251C\u2500\u2500 main
\u2502   \u2502   \u2502   \u251C\u2500\u2500 story
\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 system
\u2502   \u2502   \u2502       \u251C\u2500\u2500 system.ts
\u2502   \u2502   \u2502       \u2514\u2500\u2500 types.ts
\u2502   \u2502   \u2514\u2500\u2500 request
\u2502   \u2502       \u251C\u2500\u2500 config.ts
\u2502   \u2502       \u251C\u2500\u2500 index.ts
\u2502   \u2502       \u2514\u2500\u2500 types.ts
\u2502   \u251C\u2500\u2500 store
\u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u251C\u2500\u2500 login
\u2502   \u2502   \u2502   \u251C\u2500\u2500 login.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 loginTypes.ts
\u2502   \u2502   \u251C\u2500\u2500 main
\u2502   \u2502   \u2502   \u251C\u2500\u2500 analysis
\u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 dashboard.ts
\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 dashboardTypes.ts
\u2502   \u2502   \u2502   \u251C\u2500\u2500 index.ts
\u2502   \u2502   \u2502   \u251C\u2500\u2500 product
\u2502   \u2502   \u2502   \u2502   \u251C\u2500\u2500 category.ts
\u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 categoryType.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 system
\u2502   \u2502   \u2502       \u251C\u2500\u2500 system.ts
\u2502   \u2502   \u2502       \u2514\u2500\u2500 systemTypes.ts
\u2502   \u2502   \u2514\u2500\u2500 types.ts
\u2502   \u251C\u2500\u2500 utils
\u2502   \u2502   \u251C\u2500\u2500 cache.ts
\u2502   \u2502   \u251C\u2500\u2500 mapMenus.ts
\u2502   \u2502   \u2514\u2500\u2500 timeFormat.ts
\u2502   \u2514\u2500\u2500 views
\u2502       \u251C\u2500\u2500 login
\u2502       \u2502   \u251C\u2500\u2500 LoginPage.vue
\u2502       \u2502   \u251C\u2500\u2500 config
\u2502       \u2502   \u2502   \u2514\u2500\u2500 account-config.ts
\u2502       \u2502   \u2514\u2500\u2500 cpns
\u2502       \u2502       \u251C\u2500\u2500 LoginAccount.vue
\u2502       \u2502       \u251C\u2500\u2500 LoginPanel.vue
\u2502       \u2502       \u2514\u2500\u2500 LoginPhone.vue
\u2502       \u251C\u2500\u2500 main
\u2502       \u2502   \u251C\u2500\u2500 MainPage.vue
\u2502       \u2502   \u251C\u2500\u2500 analysis
\u2502       \u2502   \u2502   \u251C\u2500\u2500 dashboard
\u2502       \u2502   \u2502   \u2502   \u2514\u2500\u2500 DashboardPage.vue
\u2502       \u2502   \u2502   \u2514\u2500\u2500 overview
\u2502       \u2502   \u2502       \u251C\u2500\u2500 OverviewPage.vue
\u2502       \u2502   \u2502       \u2514\u2500\u2500 config
\u2502       \u2502   \u2502           \u251C\u2500\u2500 dependencies.ts
\u2502       \u2502   \u2502           \u251C\u2500\u2500 devDependencies.ts
\u2502       \u2502   \u2502           \u251C\u2500\u2500 projectStandard.ts
\u2502       \u2502   \u2502           \u251C\u2500\u2500 projectTree.ts
\u2502       \u2502   \u2502           \u2514\u2500\u2500 technologyStacks.ts
\u2502       \u2502   \u251C\u2500\u2500 product
\u2502       \u2502   \u2502   \u251C\u2500\u2500 category
\u2502       \u2502   \u2502   \u2502   \u251C\u2500\u2500 CategoryPage.vue
\u2502       \u2502   \u2502   \u2502   \u251C\u2500\u2500 config
\u2502       \u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 index.ts
\u2502       \u2502   \u2502   \u2502   \u2514\u2500\u2500 cpn
\u2502       \u2502   \u2502   \u2502       \u2514\u2500\u2500 HotCategory.vue
\u2502       \u2502   \u2502   \u2514\u2500\u2500 goods
\u2502       \u2502   \u2502       \u251C\u2500\u2500 GoodsPage.vue
\u2502       \u2502   \u2502       \u2514\u2500\u2500 config
\u2502       \u2502   \u2502           \u2514\u2500\u2500 index.ts
\u2502       \u2502   \u251C\u2500\u2500 story
\u2502       \u2502   \u2502   \u251C\u2500\u2500 chat
\u2502       \u2502   \u2502   \u2502   \u2514\u2500\u2500 ChatPage.vue
\u2502       \u2502   \u2502   \u2514\u2500\u2500 list
\u2502       \u2502   \u2502       \u251C\u2500\u2500 ListPage.vue
\u2502       \u2502   \u2502       \u2514\u2500\u2500 config
\u2502       \u2502   \u2502           \u2514\u2500\u2500 index.ts
\u2502       \u2502   \u2514\u2500\u2500 system
\u2502       \u2502       \u251C\u2500\u2500 department
\u2502       \u2502       \u2502   \u251C\u2500\u2500 DepartmentPage.vue
\u2502       \u2502       \u2502   \u2514\u2500\u2500 config
\u2502       \u2502       \u2502       \u2514\u2500\u2500 index.ts
\u2502       \u2502       \u251C\u2500\u2500 menu
\u2502       \u2502       \u2502   \u251C\u2500\u2500 MenuPage.vue
\u2502       \u2502       \u2502   \u2514\u2500\u2500 config
\u2502       \u2502       \u2502       \u2514\u2500\u2500 index.ts
\u2502       \u2502       \u251C\u2500\u2500 role
\u2502       \u2502       \u2502   \u251C\u2500\u2500 RolePage.vue
\u2502       \u2502       \u2502   \u2514\u2500\u2500 config
\u2502       \u2502       \u2502       \u2514\u2500\u2500 index.ts
\u2502       \u2502       \u2514\u2500\u2500 user
\u2502       \u2502           \u251C\u2500\u2500 UserPage.vue
\u2502       \u2502           \u2514\u2500\u2500 config
\u2502       \u2502               \u2514\u2500\u2500 index.ts
\u2502       \u2514\u2500\u2500 notFound
\u2502           \u2514\u2500\u2500 notFound.vue
\u251C\u2500\u2500 tsconfig.json
\u251C\u2500\u2500 tsconfig.node.json
\u2514\u2500\u2500 vite.config.ts
`;const R=t=>(A("data-v-031d701a"),t=t(),b(),t),N={class:"overview"},U=R(()=>i("div",null,[d(" \u6B64\u7CFB\u7EDF\u662F\u57FA\u4E8E"),i("strong",null," Vue3\u3001Pinia\u3001VueRouter\u3001TypeScript\u3001Vite\u3001ElementPlus\u3001Echart5 "),d("\u7B49\u6280\u672F\u6784\u5EFA\u7684\u540E\u53F0\u7CFB\u7EDF\u89E3\u51B3\u65B9\u6848 ")],-1)),q={class:"technologyStacks"},G={href:"javascript:;"},H=g({setup(t){const l=P(()=>L);return(D,m)=>(n(),r("div",N,[e(c,{title:"\u5173\u4E8E"},{default:s(()=>[U]),_:1}),e(c,{title:"\u6280\u672F\u6808"},{default:s(()=>[i("ul",q,[(n(!0),r(E,null,v(u(l),o=>(n(),r("li",{key:o.title},[d(C(o.title)+":",1),i("a",G,C(o.desp),1)]))),128))]),e(u(a),{options:u(j)},null,8,["options"]),e(u(a),{options:u(w)},null,8,["options"])]),_:1}),e(c,{title:"\u9879\u76EE\u89C4\u8303"},{default:s(()=>[e(u(a),{options:u(T)},null,8,["options"]),e(u(a),{options:u(M)},null,8,["options"]),e(u(a),{options:u(V)},null,8,["options"])]),_:1}),e(c,{title:"\u9879\u76EE\u7ED3\u6784"},{default:s(()=>[i("pre",null,C(u(I)),1)]),_:1})]))}});var n2=F(H,[["__scopeId","data-v-031d701a"]]);export{n2 as default};
