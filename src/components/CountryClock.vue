<template>
  <div>
    <div class="clockImageContainer">
      <transition appear name="slide-bottom">
        <img v-show="sideNavDone" class="clockImage" :src="clockImage" />
      </transition>
    </div>
  </div>
</template>

<script>
import "@/assets/css/clock.scss";
import clockImage from "../assets/clock.svg";
export default {
  name: "CountryClock",
  props: {
    sideNavDone: { type: Boolean }
  },
  data() {
    return {
      clockImage
    };
  }
};
</script>