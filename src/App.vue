<template>
  <div id="app">
    <WorldContainer />
  </div>
</template>

<script>
import '@/assets/css/app.scss';
import '@/assets/css/world.scss';
import '@/assets/css/animations.scss';
import '@/assets/css/transitions.scss';
import WorldContainer from './components/WorldMap.vue';

export default {
  name: 'App',
  components: {
    WorldContainer,
  },
}
</script>
