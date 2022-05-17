<template>
  <div class="overview">
    <CardBox title="关于">
      <div>
        此系统是基于<strong> Vue3、Pinia、VueRouter、TypeScript、Vite、ElementPlus、Echart5 </strong
        >等技术构建的后台系统解决方案
      </div>
    </CardBox>
    <CardBox title="技术栈">
      <ul class="technologyStacks">
        <template v-for="item in technolog" :key="item.title">
          <li>
            {{ item.title }}:<a href="javascript:;">{{ item.desp }}</a>
          </li>
        </template>
      </ul>
      <DescriptionComponent :options="dependencies"></DescriptionComponent>
      <DescriptionComponent :options="devDependencies"></DescriptionComponent>
    </CardBox>
    <CardBox title="项目规范">
      <DescriptionComponent :options="filenameStandard"></DescriptionComponent>
      <DescriptionComponent :options="componentStandard"></DescriptionComponent>
      <DescriptionComponent :options="commitStandard"></DescriptionComponent>
    </CardBox>
    <CardBox title="项目结构">
      <pre>{{ tree }}</pre>
    </CardBox>
  </div>
</template>

<script lang="ts" setup>
import CardBox from '@/base-ui/card/src/CardBox.vue'
import DescriptionComponent from '@/base-ui/description'
import technologStack from './config/technologyStacks'
import dependencies from './config/dependencies'
import devDependencies from './config/devDependencies'
import { filenameStandard, componentStandard, commitStandard } from './config/projectStandard'
import tree from './config/projectTree'
import { computed } from 'vue'
const technolog = computed(() => technologStack)
</script>

<style scoped lang="less">
.overview {
  text-align: left;
  .about {
    margin-bottom: 20px;
  }
}
.technologyStacks {
  margin-top: -10px;
  padding: 0;

  li {
    list-style: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    a {
      margin-left: 20px;
      font-weight: 500;
      text-decoration: none;
      color: #409eff;
    }
  }
}
pre {
  margin-top: -10px !important;
  font-size: 18px;
  font-weight: 600;
  background: #dee1e6;
}
</style>
