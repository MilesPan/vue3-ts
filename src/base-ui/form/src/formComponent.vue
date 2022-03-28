<template>
  <div class="form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="props.labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :style="itemStyle"
              :label="item.label"
              :rules="item.rule"
              class="formItem"
            >
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :modelValue="modelValue[`${item.field}`]"
                  @update:modelValue="hanldeValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :modelValue="modelValue[`${item.field}`]"
                  @update:modelValue="hanldeValueChange($event, item.field)"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :value="option.value">{{ option.title }}</el-option>
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  :modelValue="modelValue[`${item.field}`]"
                  @update:modelValue="hanldeValueChange($event, item.field)"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IFormItem } from '../types/index'
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => {
      return {
        padding: '10px 40px'
      }
    }
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, //>1920px 显示四个
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})
const emit = defineEmits(['update:modelValue'])
// const _formData = ref({ ...props.modelValue })
// watch(_formData, (newValue) => emit('update:modelValue', newValue), { deep: true })
const hanldeValueChange = (value: any, field: string) => {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}
</script>

<style scoped lang="less">
.form {
  padding-top: 20px;
  .formItem {
    padding: 5px 30px;
  }
}
</style>
