<!--
 * @Author: Zhao.Li.Nai
 * @Date: 2021-06-25 21:35:53
 * @LastEditors: Zhao.Li.Nai
 * @LastEditTime: 2021-07-01 00:01:12
-->
<template>
  <div class="panel-contanier">
    <dv-border-box-10  class="content-title">
      <span>变压器状态</span>
    </dv-border-box-10>
    <div class="left-text-item">
      <div
        v-for="item in data"
        :key="item.title"
        style="display: flex;flex-direction: column;"
      >
        <div style="display:flex;align-items: center;">
          <img width="20px" :src="item.img" alt="" />
          <span style="font-size:0.3rem;margin-left:15px">{{
            item.title
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style></style>
