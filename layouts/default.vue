<template>
  <div style="overflow-x: hidden;">
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  mounted() {
    this.$store.commit('sizing/SET_WIDTH', window.innerWidth)
    window.addEventListener('resize', this.calcWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calcWidth)
  },
  methods: {
    calcWidth() {
      this.$store.commit('sizing/SET_WIDTH', window.innerWidth)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/variables';

body {
  font-family: 'lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #000;

  @media (max-width: $small) {
    font-size: 12px;
  }
}

body {
  background-color: #ededed;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
