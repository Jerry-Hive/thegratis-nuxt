<template>
  <div class="vimeo-bg-container" style="width: 100%; height: 100%">
  <video :autoplay="autoplay" muted="true" playsinline loop >
    <source :src="src" type="video/mp4" />
  </video>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: {
    src: String,
    autoplay: {
      type: Boolean,
      default:false,
    }
  }
}
</script>

<style scoped>
.vimeo-bg-container {
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
video {
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