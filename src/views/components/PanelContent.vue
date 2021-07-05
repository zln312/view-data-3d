<!--
 * @Author: Zhao.Li.Nai
 * @Date: 2021-06-25 21:35:53
 * @LastEditors: Zhao.Li.Nai
 * @LastEditTime: 2021-07-01 00:48:43
-->
<template>
  <div class="panel-contanier">
    <dv-border-box-10  class="content-title">
      <span>{{ data.title }}</span>
    </dv-border-box-10>
    <div class="panel_conetent_contanier">
      <div
        v-for="(item, index) in data.groups"
        :key="item.title"
        class="panel_content_item"
      >
        <span>{{ data.title + "通道" + (index + 1) }}</span>
        <div class="item_row">
          <span>幅值</span>
          <span style="color:chartreuse">{{ item.size }}</span>
        </div>
        <div class="item_row">
          <span>放电次数</span>
          <span>{{ item.count }}</span>
        </div>
        <div class="item_row">
          <span>放电类型</span>
          <span>{{ item.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
.panel_conetent_contanier {
  display: flex;
  flex-direction: column;
  font-size: 0.3rem;
  height: 100%;
  .panel_content_item {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .item_row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
