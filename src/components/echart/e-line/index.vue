<!--
 * @Author: Zhao.Li.Nai
 * @Date: 2021-06-28 14:31:34
 * @LastEditors: Zhao.Li.Nai
 * @LastEditTime: 2021-07-07 15:09:14
-->
<template>
  <div>
    <Echart :options="options" id="home_line" height="100%" width="100%"></Echart>
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
        this.options = {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: "line",
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
