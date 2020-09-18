<template>
  <div>
    <div class="clockImageContainer">
      <transition appear name="slide-bottom">
        <img v-show="sideNavDone" class="clockImage" :src="clockImage" />
      </transition>
      <transition name="slide-bottom">
        <div v-show="country !== ''" class="clockData">
          <div class="locationName">
            <img :src="flag"/>
            <div>{{country}}</div>
          </div>
          <div class="locationTime">{{countryTime}}</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import "@/assets/css/clock.scss";
import clockImage from "../assets/clock.svg";
import constants from "../constants";

export default {
  name: "CountryClock",
  props: {
    sideNavDone: { type: Boolean },
    code: { type: String },
    country: { type: String },
    flag: { type: String },
  },
  data() {
    return {
      clockImage
    };
  },
  computed: {
    countryTime: function() {
      if(this.code === '') return '';
      else {
        const selectedCountry = constants.markersData.find(cntry => cntry.code === this.code);
        const d = new Date();
        const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        const newDate = new Date(utc + (3600000 * selectedCountry.tzDiff)).toLocaleTimeString();
        const timeOnly = newDate.replace(/([\d]+:[\d]{2}:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
        const period = timeOnly.split(":")[0] > 12 ? "PM" : "AM";
        return `${timeOnly} ${period}`;
        // var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
        // console.log('USA time: '+ (new Date(usaTime)).toISOString())
      }
    }
  }
};
</script>