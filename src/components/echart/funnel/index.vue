<!--
 * @Author: Zhao.Li.Nai
 * @Date: 2021-06-27 22:09:32
 * @LastEditors: Zhao.Li.Nai
 * @LastEditTime: 2021-06-28 15:55:50
-->
<template>
  <div>
    <Echart
      :options="options"
      id="funnel"
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
  watch: {
    cdata: {
      handler() {
        this.options = {
          title: {
            text: "漏斗图",
            subtext: "纯属虚构",
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c}%",
          },
          legend: {
            data: ["展现", "点击", "访问", "咨询", "订单"],
          },
          series: [
            {
              name: "预期",
              type: "funnel",
              left: "10%",
              width: "80%",
              sort: "ascending",
              label: {
                formatter: "{b}预期",
              },
              labelLine: {
                show: false,
              },
              itemStyle: {
                opacity: 0.7,
              },
              emphasis: {
                label: {
                  position: "inside",
                  formatter: "{b}预期: {c}%",
                },
              },
              data: [
                { value: 60, name: "访问" },
                { value: 40, name: "咨询" },
                { value: 20, name: "订单" },
                { value: 80, name: "点击" },
                { value: 100, name: "展现" },
              ],
            },
            {
              name: "实际",
              type: "funnel",
              left: "10%",
              width: "80%",
              maxSize: "80%",
              sort: "ascending",
              label: {
                position: "inside",
                formatter: "{c}%",
                color: "#fff",
              },
              itemStyle: {
                opacity: 0.5,
                borderColor: "#fff",
                borderWidth: 2,
              },
              emphasis: {
                label: {
                  position: "inside",
                  formatter: "{b}实际: {c}%",
                },
              },
              data: [
                { value: 30, name: "访问" },
                { value: 10, name: "咨询" },
                { value: 5, name: "订单" },
                { value: 50, name: "点击" },
                { value: 80, name: "展现" },
              ],
              // Ensure outer shape will not be over inner shape when hover.
              z: 100,
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
