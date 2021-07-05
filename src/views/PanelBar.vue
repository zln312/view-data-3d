
<template>
 
  <div class="panel-contanier">
    <dv-border-box-10 class="content-title">
      <span>震动故障诊断</span>
    </dv-border-box-10>
         <e-bar :cdata="cdata" style="height:100%;width:100%"></e-bar>
  </div>
</template>

<script>
import EBar from "../components/echart/e-bar";
export default {
  components: {
    EBar,
  },
  data() {
    return {
      cdata: {}
    }
  }
};
</script>

<style></style>
