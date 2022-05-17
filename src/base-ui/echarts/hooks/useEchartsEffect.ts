import * as echarts from 'echarts'
import chinaMapData from '../data/china.json'
echarts.registerMap('china', chinaMapData)
export function useEchartsEffect(el: HTMLElement) {
  const echartInstance = echarts.init(el, 'light')
  const setOPtions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }
  const setEchartsResize = () => {
    echartInstance.resize()
  }
  // 改变浏览器窗口时重绘
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  return { echartInstance, setOPtions, setEchartsResize }
}
