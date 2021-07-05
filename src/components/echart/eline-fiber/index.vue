<!--
 * @Author: Zhao.Li.Nai
 * @Date: 2021-06-28 14:31:34
 * @LastEditors: Zhao.Li.Nai
 * @LastEditTime: 2021-06-28 17:03:04
-->
<template>
  <div>
    <Echart :options="options" id="line-fiber" height="100%" width="100%"></Echart>
  </div>
</template>

<script>
import Echart from "@/common/echart";
export default {
  data() {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    cdata: {
      handler() {
        this.options  = {
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["1", "32", "83", "124", "168", "208", "275"],
          },
          yAxis: {
            type: "value",
            axisLine: {
              show: true,
            },
          },
          series: [
            {
              data: [1, -1, 3, -2, 2, -3, 2],
              type: "line",
              smooth: true,
            },
          ],
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
