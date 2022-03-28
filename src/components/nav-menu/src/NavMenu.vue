<template>
  <div class="navMenu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="" />
      <span class="title" title="Vue3后台管理系统">Vue3后台管理系统</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="props.collapse"
    >
      <template v-for="item in userMenus">
        <!-- type=1表示是一个折叠的菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu :key="item.id" :index="item.id + ''">
            <!-- 一级菜单标题 -->
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-')[2].toLowerCase()" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单 -->
            <div v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''" @click="handleItemClick(subitem)">
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </div>
          </el-sub-menu>
        </template>
        <!-- 不是折叠直接遍历 -->
        <template v-else>
          <el-menu-item :key="item.id" :index="item.id + ''">
            <template v-if="item.icon">
              <el-icon>
                <component :is="item.icon.split('-')[2].toLowerCase()" />
              </el-icon>
            </template>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store'
import { computed, ref } from 'vue'
import { UserMenu } from '@/service/login/types'
import { useRoute, useRouter } from 'vue-router'
import { pathMapToMenu } from '@/utils/mapMenus'
const store = useLoginStore()
const router = useRouter()
const route = useRoute()
const props = defineProps({
  collapse: {
    type: Boolean,
    defalut: false
  }
})
const userMenus = computed(() => store.userMenus)
const currentPath = route.path
const menu = pathMapToMenu(userMenus.value, currentPath)
// 默认打开的菜单，用于页面刷新后右边菜单应该根据路径显示相应的子菜单
const defaultValue = ref(menu?.id + '')
const handleItemClick = (item: UserMenu) => {
  router.push({
    path: item.url ?? '/not/found'
  })
}
</script>

<style scoped lang="less">
.navMenu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      white-space: nowrap; /*强制单行显示*/
      text-overflow: ellipsis; /*超出部分省略号表示*/
      overflow: hidden; /*超出部分隐藏*/
      width: 260px; /*设置显示的最大宽度*/
      display: inline-block;

      font-size: 16px;
      font-weight: 700;
      line-height: 100%;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  // 覆盖element-plus的样式就使用::v-deep
  :v-deep .el-sub-menu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
