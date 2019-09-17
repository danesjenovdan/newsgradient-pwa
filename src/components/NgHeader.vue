<template>
  <div id="header" :class="{ 'has-line': $route.path === '/' }">
    <router-link
      v-if="$route.path !== '/'"
      to="/"
      id="back-to-listing"
      @click="$matomo.trackEvent('backToListing', `${this.$route.params.eventId}`)"
    >List</router-link>
    <h1>Newsgradient</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NgHeader extends Vue {}
</script>

<style scoped lang="scss">
#header {
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-weight: 700;
  background-color: #fff;
  background-image: url('../assets/logo-text.svg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 15px;
  position: fixed;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;

  &.has-line::after {
    content: '';
    display: block;
    width: 75px;
    height: 2px;
    position: absolute;
    top: 37px;
    left: 50%;
    transform: translateX(-50%);
    background-image: linear-gradient(to right, #07f, #e60000);
  }

  &:not(.has-line) {
    box-shadow: 0px 0px 10px 0px #ccc;
  }

  h1 {
    font-size: 1rem;
    margin: 0;
    color: transparent;
  }

  #back-to-listing {
    display: block;
    position: absolute;
    top: 0;
    left: 0.8rem;
    color: #000;
    font-size: 0.75rem;
    text-decoration: none;
    padding-left: 1.25rem;

    background-image: url('../assets/arrow-left.svg');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 1rem 1rem;
  }
}
</style>
