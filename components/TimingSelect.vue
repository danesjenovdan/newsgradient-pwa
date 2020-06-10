<template>
  <div class="timing-select">
    <select id="cars" @change="setTimeRange">
      <option :value="timeRanges.TODAY">Today</option>
      <option :value="timeRanges.YESTERDAY">Yesterday</option>
      <option :value="timeRanges.LAST_WEEK">Last week</option>
      <option :value="timeRanges.LAST_MONTH">Last month</option>
    </select>
  </div>
</template>

<script>
import { TIMERANGE } from '../constants'

export default {
  name: 'TimingSelect',
  data() {
    return {
      selectedTimeRange: TIMERANGE.TODAY
    }
  },
  computed: {
    timeRanges() {
      return TIMERANGE
    }
  },
  methods: {
    setTimeRange(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';

.timing-select {
  position: relative;

  select {
    width: 100%;
    height: 40px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid #bcbcbc;
    color: black;
    font-weight: 300;
    appearance: none;
    transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;
    text-align: center;
    text-align-last: center;
    @media (max-width: $medium) {
      height: unset;
    }
  }

  /* For IE <= 11 */
  select::-ms-expand {
    display: none;
  }

  .select-icon {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 30px;
    height: 36px;
    pointer-events: none;
    border: 2px solid #962d22;
    padding-left: 5px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  .select-icon svg.icon {
    transition: fill 0.3s ease;
    fill: white;
  }

  select:hover,
  select:focus {
    color: #c0392b;
    background-color: white;
    border-bottom-color: #dcdcdc;
  }
  select:hover ~ .select-icon,
  select:focus ~ .select-icon {
    background-color: white;
    border-color: #dcdcdc;
  }
  select:hover ~ .select-icon svg.icon,
  select:focus ~ .select-icon svg.icon {
    fill: #c0392b;
  }
}
</style>
