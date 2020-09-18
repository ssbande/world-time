<template>
  <div id="worldMap">
    <WorldMap :onFinish="mapFadeComplete"/>
    <SideNavs :mapDone="mapDone" :onSideNavEntryFinish="sideNavComplete" />
    <CountryClock :sideNavDone="sidenavDone" />
  </div>
</template>


<script>
import WorldMap from './WorldMap';
import SideNavs from './SideNavs';
import CountryClock from './CountryClock';

export default {
  name: 'WorldContainer',
  components: {
    WorldMap,
    SideNavs,
    CountryClock
  },
  data() {
    return {
      mapDone: false,
      sidenavDone: false,
    }
  },
  methods: {
    mapFadeComplete() {
      this.mapDone = true;
    },
    sideNavComplete() {
      console.log('side nav completed')
      this.sidenavDone = true;
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
