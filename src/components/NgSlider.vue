<template>
  <div id="slider">
    <div class="lead">
      Move the slider to see different perspectives
    </div>
    <div class="icon-container">
      <img class="icon" :src="icon" alt="icon" :style="`left: ${currentValue / max * 100}%`" />
    </div>
    <input
      type="range"
      class="slider"
      :min="0"
      :max="max - 1"
      :value="currentValue"
      @input="onInput"
    />
    <div class="sentiment">
      This story is <strong>more {{ articleSlant }}</strong>
      than <strong>{{ percentageSlant.toFixed(0) }}%</strong> of coverage.
    </div>
  </div>
</template>

<script>
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
    articleSlant: {
      type: String,
      default: '',
    },
    percentageSlant: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      rangeValue: 50,
    };
  },
  computed: {
    currentValue() {
      return this.switching ? this.rangeValue : this.value;
    },
  },
  methods: {
    onInput(event) {
      this.rangeValue = Number(event.target.value);
      this.$emit('change', this.rangeValue);
    },
  },
};
</script>

<style lang="scss" scoped>
#slider {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 1rem;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px #ccc;

  .lead {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.7rem;
    text-align: center;
    margin-bottom: 0.25rem;
  }

  .icon-container {
    position: relative;
    height: 16px;

    .icon {
      display: block;
      width: 16px;
      height: 16px;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-8px);
    }
  }

  .sentiment {
    margin-top: 1rem;
    font-size: 0.7rem;
    text-align: center;
  }

  .slider {
    -webkit-appearance: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 5px;
    background: #07f;
    background-image: linear-gradient(to right, #07f, #e60000);
    outline: none;
    transition: opacity 0.2s;
  }

  @mixin slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 25px;
    background: #000;
    cursor: pointer;
  }

  .slider::-webkit-slider-thumb {
    @include slider-thumb;
  }

  .slider::-moz-range-thumb {
    @include slider-thumb;
  }
}
</style>
