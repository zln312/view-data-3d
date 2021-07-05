<!--
 * @Author: Zhao.Li.Nai
 * @Date: 2021-06-16 22:25:30
 * @LastEditors: Zhao.Li.Nai
 * @LastEditTime: 2021-06-25 15:43:09
-->
<template>
  <div>
    <canvas id="t"></canvas>
  </div>
</template>

<script>
import * as THREE from "three/build/three.module";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { GUI } from "three/examples/jsm/libs/dat.gui.module";
export default {
  mounted() {
    this.initView();
  },
  data() {
    return {
      state: {
        animateBones: false
      },
      AnimationAction: null
    }
  },
  methods: {
    //初始化模型
    initView() {
      var stats = new Stats();
      const that = this;
      // stats.showPanel(0);
      // document.body.appendChild(stats.dom);

      const canvas = document.querySelector("#t");
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });

      var scene = new THREE.Scene();
      scene.background = null;

      //创建一个webGLRenderer

      //透视相机
      const camera = new THREE.PerspectiveCamera(75, 2);

      camera.position.set(600, 600, 600);

      const controls = new OrbitControls(camera, canvas);

      controls.update();
      {
        //添加光源
        let light1 = new THREE.DirectionalLight(0xffffff, 1);
        light1.position.set(-100, 300, 600);
        scene.add(light1);

        let light2 = new THREE.DirectionalLight(0xffffff, 1);
        light2.position.set(100, 300, 600);
        scene.add(light2);

        let light3 = new THREE.DirectionalLight(0xffffff, 1);
        light3.position.set(100, 300, 600);
        scene.add(light3);

        let light4 = new THREE.DirectionalLight(0xffffff, 1);
        light4.position.set(100, 100, -100);
        scene.add(light4);
      }

      const light = new THREE.AmbientLight(0xffffff, 3);
      scene.add(light);

      const gui = new GUI();
      gui.add(this.state, "animateBones");
      // gui.add(light, "intensity", 0, 10, 0.01);

      var mixer;
      var loader = new FBXLoader();
      loader.load("model/最终效果.fbx", function(obj) {
        // obj.traverse(function(child) {
        //   if (child.isMesh) {
        //     if(child.material.name==="byq0033"){
        //       child.material.opacity = 0.1;
        //     }
        //   }
        // });
        console.log(obj);
        obj.scale.set(7, 7, 7); //放大obj组对象
        scene.add(obj); //返回的组对象插入场景中
        obj.rotateY((180 * 3.14) / 180);

        mixer = new THREE.AnimationMixer(obj);
        // 查看动画数据
        console.log(obj.animations);
        that.AnimationAction = mixer.clipAction(obj.animations[0]);
        that.AnimationAction.loop = THREE.LoopOnce;
        that.AnimationAction.clampWhenFinished = true;
        that.AnimationAction.play(); //播放动画
      });

      var clock = new THREE.Clock();
      function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
      }
      
      function render() {
        // time *= 0.001;

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }
        renderer.render(scene, camera);

        that.state.animateBones && mixer && mixer.update(clock.getDelta());

        stats.update();

        requestAnimationFrame(render);
      }

      render();
    },
    playAnimation() {
      this.AnimationAction.reset()
      this.AnimationAction.timeScale = 1
      this.state.animateBones = true
    },
    playAnimation2() {
      this.AnimationAction.reset()
      this.AnimationAction.timeScale = -1
      this.state.animateBones = true
    }
  },
};
</script>

<style scoped>
#t {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
}
</style>
