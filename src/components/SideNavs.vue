<template>
  <div>
    <transition appear name="slide-left">
      <div v-show="mapDone" class="sidenav-left" />
    </transition>
    <transition appear name="slide-right" @after-enter="onSideNavEntryFinish">
      <div v-show="mapDone" class="sidenav-right" />
    </transition>
  </div>
</template>

<script>
import '@/assets/css/sideNav.scss';
export default {
  name: "sideNavs",
  props: {
    mapDone: { type: Boolean },
    onSideNavEntryFinish: { type: Function },
  }
}
</script>