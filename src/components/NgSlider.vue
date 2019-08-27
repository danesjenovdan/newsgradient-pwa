<template>
  <div id="slider">
    <input type="range" class="slider" @input="onInput" @change="onChange" min="0" max="100" step="0.1" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
  methods: {
    onChange(event) {

    },
    onInput(event) {
      console.log(event.target.value);
      this.$emit('change', Number(event.target.value));
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
