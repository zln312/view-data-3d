<!--
 * @Author: Zhao.Li.Nai
 * @Date: 2021-06-28 14:31:34
 * @LastEditors: Zhao.Li.Nai
 * @LastEditTime: 2021-06-28 15:47:28
-->
<template>
  <div>
    <Echart
      :options="options"
      id="gauge"
      height="100%"
      width="100%"
    ></Echart>
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
  mounted() {
    const that = this
    setInterval(function() {
      that.options.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    }, 2000);
  },
  watch: {
    cdata: {
      handler() {
        this.options = {
          series: [
            {
              type: "gauge",
              radius: '80%',
              center: ['50%','60%'],
              axisLine: {
                lineStyle: {
                  width: 30,
                  color: [
                    [0.3, "#67e0e3"],
                    [0.7, "#37a2da"],
                    [1, "#fd666d"],
                  ],
                },
              },
              pointer: {
                itemStyle: {
                  color: "auto",
                },
              },
              axisTick: {
                distance: -30,
                length: 8,
                lineStyle: {
                  color: "#fff",
                  width: 2,
                },
              },
              splitLine: {
                distance: -30,
                length: 30,
                lineStyle: {
                  color: "#fff",
                  width: 4,
                },
              },
              axisLabel: {
                color: "auto",
                distance: -25,
                fontSize: 15,
              },
              detail: {
                valueAnimation: true,
                formatter: "{value} \n mA",
                color: "auto",
                fontSize: 20
              },
              data: [
                {
                  value: 70,
                },
              ],
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
