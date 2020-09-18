<template>
  <div>
    <div v-for="item in markerPositions" :key="item.id" class="marker">
      <transition name="slide-fade" mode="out-in">
        <div
          v-html="item.text"
          :key="item.text"
          :class="{[item.styleName]: true, move: mapDone}"
          :ref="item.refCode"
          @click='imageClicked(item.code, item.displayName, $event)'
        />
      </transition>
    </div>
  </div>
</template>

<script>
import '@/assets/css/markers.scss';
import constants from '../constants';

export default {
  name: 'Markers',
  props: {
    mapDone: { type: Boolean },
    setCountry: { type: Function },
    setCode: { type: Function },
    setFlag: { type: Function },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      selectedCountry: '',
      selectedFlag: null,
      markerPositions: constants.markersData,
    }
  },
  methods: {
    imageClicked(code, name, event) {
      event.preventDefault();
      this.setCountry(name);
      this.setCode(code);
      this.markerPositions.forEach((marker) => {
        const selectedMarker = marker;
        if (marker.code === code) {
          selectedMarker.text = '&#9672;';
          this.setFlag(marker.flagSrc);
        } else selectedMarker.text = '&#9671;';
      });
    },
    handleResize() {
      console.log("window size: ", window.innerWidth);
      console.log("us ref: ", this.$refs.US_ref);
      console.log("us ref top: ", this.$refs.US_ref[0].getBoundingClientRect().top);
      console.log("us ref left: ", this.$refs.US_ref[0].getBoundingClientRect().left);
      // const usTop = this.$refs.US_ref[0].getBoundingClientRect().top;
      // const usLeft = this.$refs.US_ref[0].getBoundingClientRect().left;


      // console.log('image component: ', this.$refs.worldMapImg.width)
    }
  }
}
</script>