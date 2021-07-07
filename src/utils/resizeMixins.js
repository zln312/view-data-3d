
// 混入代码 resize-mixins.js
import { debounce } from '@/utils';
const resizeChartMethod = '$__resizeChartMethod';

export default {
  data() {
    // 在组件内部将图表 init 的引用映射到 chart 属性上
    return {
      chart: null,
    };
  },
  created() {
    window.addEventListener('resize', this[resizeChartMethod], false);
  },
  activated() {
    // 防止 keep-alive 之后图表变形
    console.log('activated....');
    if (this.chart) {
      this.chart.resize()
    }
  },
  beforeDestroy() {
    window.removeEventListener('reisze', this[resizeChartMethod]);
  },
  methods: {
    // 防抖函数来控制 resize 的频率
    [resizeChartMethod]: debounce(function() {
        console.log('resize...');
      if (this.chart) {
        console.log('IF resize...',this.chart);
        location.reload()
        this.chart.resize();
      }
    }, 300),
  },
};
