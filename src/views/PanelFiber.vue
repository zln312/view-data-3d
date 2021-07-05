
<template>
 
  <div class="panel-contanier">
    <dv-border-box-10  class="content-title">
      <span>光纤震动</span>
    </dv-border-box-10>
    <div style="height:50%">
         <eline-fiber :cdata="cdata" style="height:100%;width:100%"></eline-fiber>
    </div>
    <div style="height:50%">
         <eline-fiber :cdata="cdata" style="height:100%;width:100%"></eline-fiber>
    </div>
  </div>
</template>

<script>
import ElineFiber from "../components/echart/eline-fiber";
export default {
  components: {
    ElineFiber,
  },
  data() {
    return {
      cdata: {}
    }
  }
};
</script>

<style></style>
