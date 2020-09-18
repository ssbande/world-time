<template>
  <div id="worldMap">
    <div class="worldMapContainer">
      <transition appear name="fade" @after-enter='mapFadeComplete'>
        <img class="worldMapImage" :src="worldImage" />
      </transition>
      <div class="fadingEffect"></div>
    </div>
  </div>
</template>


<script>
import worldImage from '../assets/map/world.svg';

export default {
  name: 'WorldMapClock',
  data() {
    return {
      worldImage,
      mapDone: false,
    }
  },
  methods: {
    mapFadeComplete() {
      this.mapDone = true;
    },
  }
}

// different mobile widths: 
// 640 
// 731 
// 823 
// 568 
// 667 
// 736 
// 812 
// 1024 
// 1366 
// 720 
// 653
</script>
