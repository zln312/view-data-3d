<!--
 * @Author: Zhao.Li.Nai
 * @Date: 2021-07-05 14:15:11
 * @LastEditors: Zhao.Li.Nai
 * @LastEditTime: 2021-07-07 15:21:23
-->

<template>
 
  <div class="panel-contanier">
    <dv-border-box-10 class="content-title">
      <span>铁芯接触电流实时值</span>
    </dv-border-box-10>
         <gauge :cdata="cdata" style="height:100%;width:100%"></gauge>
  </div>
</template>

<script>
import gauge from "../components/echart/gauge";
export default {
  components: {
    gauge,
  },
  data() {
    return {
      cdata: {}
    }
  }
};
</script>

<style></style>
