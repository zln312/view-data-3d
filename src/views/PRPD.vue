
<template>
 
  <div class="panel-contanier">
    <dv-border-box-10  class="content-title">
      <span>局放PRPD图</span>
    </dv-border-box-10>
    <bar3d :cdata="cdata" style="height:100%;width:100%"></bar3d>
  </div>
</template>

<script>
import bar3d from "../components/echart/bar3d";
export default {
  components: {
    bar3d,
  },
  data() {
    return {
      cdata: {}
    }
  }
};
</script>

<style></style>
