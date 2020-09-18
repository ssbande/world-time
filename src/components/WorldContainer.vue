<template>
  <div id="worldMap">
    <WorldMap :onFinish="mapFadeComplete" />
    <SideNavs :mapDone="mapDone" :onSideNavEntryFinish="sideNavComplete" />
    <CountryClock :sideNavDone="sidenavDone" :country="country" :flag="flag" :code="code" />
    <Markers :mapDone="mapDone" :setCountry="setCountry" :setFlag="setFlag" :setCode="setCode" />
  </div>
</template>


<script>
import WorldMap from "./WorldMap";
import SideNavs from "./SideNavs";
import CountryClock from "./CountryClock";
import Markers from "./Markers";

export default {
  name: "WorldContainer",
  components: {
    WorldMap,
    SideNavs,
    CountryClock,
    Markers
  },
  data() {
    return {
      mapDone: false,
      sidenavDone: false,
      country: '',
      code: '',
      flag: null,
    };
  },
  methods: {
    mapFadeComplete() { this.mapDone = true; },
    sideNavComplete() { this.sidenavDone = true; },
    setCode(code) { this.code = code },
    setCountry(country) { this.country = country; },
    setFlag(flag) { this.flag = flag; },
  }
};

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
