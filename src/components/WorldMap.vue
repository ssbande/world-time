<template>
  <div class="worldMapContainer">
    <transition appear name="fade" @after-enter="onFinish">
      <img class="worldMapImage" :src="worldImage" ref="WorldMapImg" />
    </transition>
    <div class="fadingEffect"></div>
  </div>
</template>

<script>
import "@/assets/css/world.scss";
import worldImage from "../assets/map/world.svg";
export default {
  name: "WorldMap",
  props: {
    onFinish: { type: Function }
  },
  data() {
    return {
      worldImage
    };
  }
};
</script>