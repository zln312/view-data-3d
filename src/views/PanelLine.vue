<template>
  <div class="panel-contanier">
    <dv-border-box-10 class="content-title">
      <span>{{ title }}</span>
    </dv-border-box-10>
    <e-line :cdata="cdata" style="height:100%;width:100%"></e-line>
  </div>
</template>

<script>
import ELine from "../components/echart/e-line";
export default {
  props: {
    title: {
      type: String,
    },
  },
  components: {
    ELine,
  },
  data() {
    return {
      cdata: {},
    };
  },
};
</script>

<style></style>
