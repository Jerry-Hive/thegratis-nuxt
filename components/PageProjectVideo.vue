<template>
  <f-page hash="videos" @entered="entered" @before-leave="beforeLeave">
<!--    <HiResponsiveVimeo-->
<!--      class="full-size"-->
<!--      id="537579443"-->
<!--      :play="play"-->
<!--      quality="1080p"-->
<!--      @play="onPlay"-->
<!--    />-->

    <div class="vimeo-bg-container" style="width: 100%; height: 100%">
      <iframe
        src="https://player.vimeo.com/video/537579443?api=1&background=1&loop=1&quality=1080p"
        allowfullscreen="allowfullscreen"
        frameborder="0"
      ></iframe>
    </div>

<!--    <div class="vimeo-bg-container" style="width: 100%; height: 100%">-->
<!--      <video autoplay="true" muted="true" playsinline loop @canplay="onPlay">-->
<!--        <source src="../assets/thegratis.mp4" type="video/mp4" />-->
<!--      </video>-->
<!--    </div>-->
    <img
        ref="mask"
        src="@/assets/gr-mask.png"
        style="width:100vw;height: 100vh;z-index: 10;position: absolute;left:0;top:0;transition: opacity .5s;opacity:0"
    />
    <center-box
        style="width:100vw;height: 100vh;z-index: 20;position: absolute;left:0;top:0;"
    >
      <img
          ref="unlimited"
          src="@/assets/an-unlimited-you-white.png"
          style="transition: opacity 2s;opacity:0;max-width: 60%;width:500px"
      />
    </center-box>

  </f-page>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
import { templateRef } from "@vueuse/core";
import HiResponsiveVimeo from "hive-vue/modules/components/HiResponsiveVimeo";
import { CenterBox }  from "hive-vue/layouts";
import FPage from "@/fullpageScroll/FPage";
export default {
  name: "PageProjectVideo",
  components: { FPage, CenterBox, HiResponsiveVimeo },
  setup() {
    const play = ref(false);
    const mask = templateRef(null);
    const unlimited = templateRef(null);
    function entered() {
      play.value = true;
    }
    function beforeLeave() {
      play.value = false;
    }
    function onPlay() {
      mask.value.style.opacity = 1;
      unlimited.value.style.opacity = 0.7;
    }
    return {
      play,
      entered,
      beforeLeave,
      onPlay
    };
  }
};
</script>

<style>
.vimeo-bg-container {
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
video, iframe {
  box-sizing: border-box;
  width: 177.77777778vh;
  height: 56.25vw;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
