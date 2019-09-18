<template>
  <div id="slider">
    <div v-if="showHelp" class="hand"></div>
    <div v-if="showHelp" class="lead">
      Move the slider to see different perspectives
    </div>
    <div v-if="icon" class="icon-container">
      <img class="icon" :src="icon" alt="icon" :style="`left: ${currentValue / max * 100}%`" />
    </div>
    <div class="slider-container">
      <div class="slider-track">
        <div class="slider-arrow" @click="onArrowClick(-1)"></div>
        <div class="slider-arrow" @click="onArrowClick(1)"></div>
      </div>
      <input
        type="range"
        class="slider"
        :min="0"
        :max="max - 1"
        :value="currentValue"
        @input="onInput"
      />
    </div>
    <!-- <div class="sentiment">
      This story is <strong>more {{ articleSlant }}</strong>
      than <strong>{{ percentageSlant.toFixed(0) }}%</strong> of coverage.
    </div> -->
    <div class="labels">
      <span>NEGATIVE</span>
      <span>POSITIVE</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    switching: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Number,
      default: 50,
    },
    max: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      rangeValue: 50,
      showHelp: true,
    };
  },
  computed: {
    currentValue() {
      return this.switching ? this.rangeValue : this.value;
    },
    articleSlant() {
      const percentageMorePositive = ((this.value + 1) / this.max * 100);
      return percentageMorePositive > 50 ? 'positive' : 'negative';
    },
    percentageSlant() {
      const percentageMorePositive = ((this.value + 1) / this.max * 100);
      return percentageMorePositive > 50
        ? percentageMorePositive
        : 100 - percentageMorePositive;
    },
  },
  methods: {
    ...mapMutations([
      'SET_SLIDER_SWITCH_TO_VALUE',
    ]),
    onInput(event) {
      this.showHelp = false;
      this.rangeValue = Number(event.target.value);
      this.SET_SLIDER_SWITCH_TO_VALUE(this.rangeValue);
    },
    onArrowClick(direction) {
      this.showHelp = false;
      this.rangeValue = this.currentValue + direction;
      this.SET_SLIDER_SWITCH_TO_VALUE(this.rangeValue);
    },
  },
};
</script>

<style lang="scss" scoped>
#slider {
  position: fixed;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.09);

  .lead {
    position: absolute;
    left: 0;
    right: 0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    padding: 0.5rem;
    margin-top: -1rem;
    transform: translateY(-100%);
    background-color: rgba(#e8e8e8, 0.75);
  }

  .hand {
    position: fixed;
    bottom: 0;
    left: 35%;
    width: 3rem;
    height: 3rem;
    background-image: url('../assets/hand-pointer.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    z-index: 9;
    pointer-events: none;
  }

  .icon-container {
    position: relative;
    height: 16px;
    margin: 0 1rem;
    margin-bottom: 0.5rem;
    z-index: 2;

    .icon {
      display: block;
      width: 16px;
      height: 16px;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-7px);
      background: #fff;
    }
  }

  .labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    font-weight: 600;
    margin-top: 0.25rem;
    color: #333;

    span {
      margin: 0 0.5rem;
    }
  }

  .sentiment {
    margin-top: 0.5rem;
    font-size: 0.7rem;
    text-align: center;
  }

  .slider-container {
    position: relative;
    display: flex;
    align-items: center;
    height: 2rem;
    padding: 0 0.75rem;
    background: #07f;
    background-image: linear-gradient(to right, #07f, #e60000);
    border-radius: 5rem;

    .slider-track {
      position: absolute;
      top: calc(1rem - 0.125rem);
      left: 0.65rem;
      right: 0.65rem;
      height: 4px;
      background: #fff;
      border-radius: 5rem;

      .slider-arrow {
        content: '';
        display: block;
        position: absolute;
        top: calc(-2rem + 0.125rem);
        left: -0.75rem;
        width: 2rem;
        height: 4rem;
        background-image: url('../assets/slider-arrow.svg');
        background-repeat: no-repeat;
        background-size: 2rem 4rem;
        z-index: 9;
        cursor: pointer;
      }

      .slider-arrow:last-of-type {
        left: auto;
        right: -0.75rem;
        transform: rotate(180deg);
      }
    }

    .slider {
      -webkit-appearance: none;
      appearance: none;
      position: relative;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 3.5rem;
      background: transparent;
      outline: none;
    }

    @mixin slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1.25rem;
      height: 3.5rem;
      background: transparent;
      // background-image: url('../assets/slider-thumb.svg');
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="white"/></svg>');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      border: none;
      cursor: pointer;
    }

    .slider::-webkit-slider-thumb {
      @include slider-thumb;
    }

    .slider::-moz-range-thumb {
      @include slider-thumb;
    }
  }
}
</style>
