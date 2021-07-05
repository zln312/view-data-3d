
<template>
 
  <div class="panel-contanier">
    <dv-border-box-10  class="content-title">
      <span>油色谱诊断分析</span>
    </dv-border-box-10>
    <funnel :cdata="cdata" style="height:100%;width:100%"></funnel>
  </div>
</template>

<script>
import funnel from "../components/echart/funnel";
export default {
  components: {
    funnel,
  },
  data() {
    return {
      cdata: {}
    }
  }
};
</script>

<style></style>
