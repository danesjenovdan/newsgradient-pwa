<template>
  <div id="header">
    <router-link
      v-if="$route.path !== '/'"
      to="/"
      id="back-to-listing"
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
  color: transparent;
  line-height: 40px;
  font-weight: 700;
  font-size: 1rem;
  background-color: #fff;
  background-image: url('../assets/logo-text.svg');
  background-position: center center;
  background-repeat: no-repeat;
  border-bottom: 1px solid #ccc;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;

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
  }
}
</style>
