<template>
  <div id="index">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div>
          <transformer ref="transformer"></transformer>
        </div>
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
            <div class="title">
              <span class="title-text">数字孪生平台DEMO</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10
            style="width:33.3%;height:.0625rem; transform: rotateY(180deg);"
          />
        </div>
        <div class="content-date">
          <span>{{ dateYear }}</span>
          <span>{{ dateDay }}</span>
          <span>{{ dateWeek }}</span>
        </div>
        <div class="btn-group">
          <img
            :src="
              tabsActive === 0
                ? require('@/assets/img/home.png')
                : require('@/assets/img/home_3.png')
            "
            @click="handleClickTabs(0)"
          />
          <img
            :src="
              tabsActive === 1
                ? require('@/assets/img/monitor_ff.png')
                : require('@/assets/img/monitor_8a.png')
            "
            @click="handleClickTabs(1)"
          />
          <img
            :src="
              tabsActive === 2
                ? require('@/assets/img/temperature_ff.png')
                : require('@/assets/img/temperature_8a.png')
            "
            @click="handleClickTabs(2)"
          />
          <img
            :src="
              tabsActive === 3
                ? require('@/assets/img/ultrasonic_ff.png')
                : require('@/assets/img/ultrasonic_8a.png')
            "
            @click="handleClickTabs(3)"
          />
        </div>
        <div class="content-left-box">
          <panel-text :data="textList"></panel-text>
          <PRPD></PRPD>
          <panel-funnel></panel-funnel>
        </div>
        <div v-if="tabsActive === 0" class="content-right-box">
          <panel-gauge></panel-gauge>
          <panel-line title="变压器绕阻诊断"></panel-line>
          <panel-bar></panel-bar>
        </div>
        <div v-if="tabsActive === 1" class="content-right-box">
          <panel-fiber></panel-fiber>
          <panel-machine></panel-machine>
          <panel-line title="电气熵值"></panel-line>
        </div>
        <div v-if="tabsActive === 2" class="content-right-box">
          <panel-text :data="textList"></panel-text>
          <panel-text :data="textList"></panel-text>
          <panel-fiber></panel-fiber>
        </div>
        <div v-if="tabsActive === 3" class="content-right-box">
          <panel-content :data="contents_1"></panel-content>
          <panel-content :data="contents_1"></panel-content>
          <panel-content :data="contents_1"></panel-content>
        </div>

        <div class="bototm-btn">
          <btn-switch @expland="handleExpland"></btn-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from "../utils/index.js";
import PanelGauge from "./PanelGauge.vue";
import transformer from "./transformer";
import PanelText from "./components/PanelText.vue";
import PRPD from "./PRPD.vue";
import PanelFunnel from "./PanelFunnel.vue";
import PanelLine from "./PanelLine.vue";
import PanelBar from "./PanelBar.vue";
import PanelFiber from "./PanelFiber.vue";
import PanelMachine from "./PanelMachine.vue";
import PanelContent from "./components/PanelContent.vue";
import BtnSwitch from "./components/BtnSwitch";

export default {
  data() {
    return {
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      textList: [
        {
          title: "状态评估：正常",
          img: require("../assets/img/pinggu.png"),
        },
        {
          title: "健康分值：80分",
          img: require("../assets/img/heath.png"),
        },
        {
          title: "投运时间：2020-10",
          img: require("../assets/img/date.png"),
        },
        {
          title: "生产厂家：常州西电",
          img: require("../assets/img/suppiler.png"),
        },
      ],
      contents_1: {
        title: "超声局放",
        groups: [
          {
            id: 1,
            size: 0.3231,
            count: 0,
            type: "无放电",
          },
          {
            id: 2,
            size: 0.3231,
            count: 0,
            type: "无放电",
          },
        ],
      },
      tabsActive: 0,
    };
  },
  components: {
    PanelBar,
    PanelLine,
    PanelGauge,
    PRPD,
    PanelFunnel,
    transformer,
    PanelFiber,
    PanelText,
    PanelMachine,
    PanelContent,
    BtnSwitch,
  },
  mounted() {
    this.timeFn();
    this.cancelLoading();
  },
  methods: {
    timeFn() {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    handleExpland(e) {
      if (e) {
        this.$refs.transformer.playAnimation();
      } else {
        this.$refs.transformer.playAnimation2();
      }
    },
    handleClickTabs(e) {
      this.tabsActive = e;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
.trans_container {
  position: fixed;
  top: 50%;
  left: 50%;
  // transform: translate(-50%,-50%);
}
.dv-decoration-6 svg {
  transform-origin: bottom;
}
</style>
