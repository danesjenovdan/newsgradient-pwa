<template>
  <div id="header">
    <router-link
      v-if="$route.path !== '/'"
      to="/"
      id="back-to-listing"
      @click="$matomo.trackEvent('backToListing', `${this.$route.params.eventId}`)"
    >List</router-link>
    <h1>Newsgradient</h1>
    <p id="subheader" v-if="$route.path === '/'">
      current TOP FIVE POLITICAL EVENTS as reported by US media
    </p>
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
  font-weight: 700;
  background-color: #fff;
  background-image: url('../assets/logo-text.svg');
  background-position: top 1rem center;
  background-repeat: no-repeat;
  background-size: 100% 12px;
  position: fixed;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: 0px 0px 10px 0px #ccc;
  padding-top: 1rem;
  padding-bottom: 0.75rem;

  h1 {
    font-size: 12px;
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

  #subheader {
    width: 100%;
    text-transform: none;
    width: 100%;
    margin: 0;
    text-align: center;
    font-size: 10px;
    line-height: 14px;
    color: #000000;
    font-weight: 400;
    font-style: italic;
  }
}
</style>
