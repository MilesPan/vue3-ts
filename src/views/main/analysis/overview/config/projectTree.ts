const tree = `
vue3-ts-cms
├── README.md
├── auto-imports.d.ts
├── components.d.ts
├── index.html
├── note.md
├── note.md - 快捷方式.lnk
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── base.less
│   │   │   └── index.less
│   │   └── img
│   │       ├── login-bg.svg
│   │       ├── loginbgc.jpg
│   │       ├── logo.svg
│   │       ├── qq.png
│   │       └── tiger.jpg
│   ├── base-ui
│   │   ├── breadCrumb
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── BreadCrumb.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── card
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── CardBox.vue
│   │   ├── description
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── DescriptionComponent.vue
│   │   │       └── type.ts
│   │   ├── echarts
│   │   │   ├── data
│   │   │   │   └── china.json
│   │   │   ├── hooks
│   │   │   │   └── useEchartsEffect.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── BaseEchart.vue
│   │   ├── editor
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── MyEditor.vue
│   │   ├── form
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── formComponent.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   └── tabel
│   │       ├── index.ts
│   │       ├── src
│   │       │   └── TableComponent.vue
│   │       └── types
│   │           └── index.ts
│   ├── components
│   │   ├── nav-header
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── NavHeader.vue
│   │   │       └── UserInfo.vue
│   │   ├── nav-menu
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── NavMenu.vue
│   │   ├── page-echarts
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   ├── BarEcharts.vue
│   │   │   │   ├── LineEchart.vue
│   │   │   │   ├── MapEcharts.vue
│   │   │   │   ├── PagePicChart.vue
│   │   │   │   ├── PieEcharts.vue
│   │   │   │   └── RoseEcharts.vue
│   │   │   ├── types
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── convert-data.ts
│   │   │       └── coordinate-data.ts
│   │   ├── pageContent
│   │   │   ├── config
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── pageContent.vue
│   │   ├── pageModal
│   │   │   ├── config
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── pageModal.vue
│   │   └── pageSearch
│   │       ├── config
│   │       │   └── index.ts
│   │       ├── index.ts
│   │       └── src
│   │           └── pageSearch.vue
│   ├── env.d.ts
│   ├── global
│   │   ├── index.ts
│   │   └── registerPtoperties.ts
│   ├── hooks
│   │   ├── usePageModalEffect.ts
│   │   ├── usePageSearchEffect.ts
│   │   └── usePermissionEffect.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   └── main
│   │       ├── analysis
│   │       │   ├── dashboard
│   │       │   │   └── DashboardPage.ts
│   │       │   └── overview
│   │       │       └── OverviewPage.ts
│   │       ├── product
│   │       │   ├── category
│   │       │   │   └── CategoryPage.ts
│   │       │   └── goods
│   │       │       └── GoodsPage.ts
│   │       ├── story
│   │       │   ├── chat
│   │       │   │   └── ChatPage.ts
│   │       │   └── list
│   │       │       └── ListPage.ts
│   │       └── system
│   │           ├── department
│   │           │   └── DepartmentPage.ts
│   │           ├── menu
│   │           │   └── MenuPage.ts
│   │           ├── role
│   │           │   └── RolePage.ts
│   │           └── user
│   │               └── UserPage.ts
│   ├── service
│   │   ├── analysis
│   │   │   ├── dashboard.ts
│   │   │   └── types.ts
│   │   ├── axios_demo.ts
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── story
│   │   │   │   └── index.ts
│   │   │   └── system
│   │   │       ├── system.ts
│   │   │       └── types.ts
│   │   └── request
│   │       ├── config.ts
│   │       ├── index.ts
│   │       └── types.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── loginTypes.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── dashboard.ts
│   │   │   │   └── dashboardTypes.ts
│   │   │   ├── index.ts
│   │   │   ├── product
│   │   │   │   ├── category.ts
│   │   │   │   └── categoryType.ts
│   │   │   └── system
│   │   │       ├── system.ts
│   │   │       └── systemTypes.ts
│   │   └── types.ts
│   ├── utils
│   │   ├── cache.ts
│   │   ├── mapMenus.ts
│   │   └── timeFormat.ts
│   └── views
│       ├── login
│       │   ├── LoginPage.vue
│       │   ├── config
│       │   │   └── account-config.ts
│       │   └── cpns
│       │       ├── LoginAccount.vue
│       │       ├── LoginPanel.vue
│       │       └── LoginPhone.vue
│       ├── main
│       │   ├── MainPage.vue
│       │   ├── analysis
│       │   │   ├── dashboard
│       │   │   │   └── DashboardPage.vue
│       │   │   └── overview
│       │   │       ├── OverviewPage.vue
│       │   │       └── config
│       │   │           ├── dependencies.ts
│       │   │           ├── devDependencies.ts
│       │   │           ├── projectStandard.ts
│       │   │           ├── projectTree.ts
│       │   │           └── technologyStacks.ts
│       │   ├── product
│       │   │   ├── category
│       │   │   │   ├── CategoryPage.vue
│       │   │   │   ├── config
│       │   │   │   │   └── index.ts
│       │   │   │   └── cpn
│       │   │   │       └── HotCategory.vue
│       │   │   └── goods
│       │   │       ├── GoodsPage.vue
│       │   │       └── config
│       │   │           └── index.ts
│       │   ├── story
│       │   │   ├── chat
│       │   │   │   └── ChatPage.vue
│       │   │   └── list
│       │   │       ├── ListPage.vue
│       │   │       └── config
│       │   │           └── index.ts
│       │   └── system
│       │       ├── department
│       │       │   ├── DepartmentPage.vue
│       │       │   └── config
│       │       │       └── index.ts
│       │       ├── menu
│       │       │   ├── MenuPage.vue
│       │       │   └── config
│       │       │       └── index.ts
│       │       ├── role
│       │       │   ├── RolePage.vue
│       │       │   └── config
│       │       │       └── index.ts
│       │       └── user
│       │           ├── UserPage.vue
│       │           └── config
│       │               └── index.ts
│       └── notFound
│           └── notFound.vue
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
`
export default tree
