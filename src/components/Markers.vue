<template>
  <div>
    <div v-for="item in markerPositions" :key="item.id" class="marker">
      <transition name="slide-fade" mode="out-in">
        <div
          v-html="item.text"
          :key="item.text"
          :class="{[item.styleName]: true, move: mapDone}"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import '@/assets/css/markers.scss';
import AusFlag from '@/assets/flags/au.svg';
import InFlag from '@/assets/flags/in.svg';
import UkFlag from '@/assets/flags/uk.svg';
import UsFlag from '@/assets/flags/us.svg';

export default {
  name: 'Markers',
  props: {
    mapDone: { type: Boolean },
  },
  data() {
    return {
      selectedCountry: '',
      selectedFlag: null,
      markerPositions: [
        {
          id: 1,
          code: 'UK',
          tzDiff: '0.0',
          text: '&#9671;',
          styleName: 'marker__uk',
          flagSrc: UkFlag,
        },
        {
          id: 2,
          code: 'US',
          tzDiff: '-5.0',
          text: '&#9671;',
          styleName: 'marker__us',
          flagSrc: UsFlag,
        },
        {
          id: 3,
          code: 'IN',
          tzDiff: '5.5',
          text: '&#9671;',
          styleName: 'marker__in',
          flagSrc: InFlag,
        },
        {
          id: 4,
          code: 'AU',
          tzDiff: '9.5',
          text: '&#9671;',
          styleName: 'marker__au',
          flagSrc: AusFlag,
        },
      ],
    }
  }
}
</script>