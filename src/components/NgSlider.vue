<template>
  <div id="slider">
    <input
      type="range"
      class="slider"
      :min="0"
      :max="max - 1"
      :value="currentValue"
      @input="onInput"
    />
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
  margin: 0 2rem;
  height: 40px;

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
