<template>
  <div class="ng-header container--fluid">
    <div class="flex flex-justify--space-between">
      <div class="flex">
        <nuxt-link to="/" class="flex flex--1 mr8">
          <h1 hidden>NEWSGRADIENT</h1>
          <img src="@/assets/svg/logo-text.svg" class="logo-image" />
        </nuxt-link>
        <h2 class="ng-header__text">
          5 most reported events by Bosnian<br />
          press sorted by the partisan bias.
        </h2>
        <!--        <TimingSelect @change="timerangeChanged" class="timing-container" />-->
      </div>
      <div class="links-container">
        <nuxt-link :class="['link', { 'link--active': '/' === $route.path }]" to="/" class="link events-link">
          Events
        </nuxt-link>
        <nuxt-link :class="['link', { 'link--active': '/about' === $route.path }]" to="/about" class="link">
          About
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      links: [
        { to: '/', title: 'Events' },
        { to: '/about', title: 'About' }
      ]
    }
  },
  methods: {
    timerangeChanged(value) {
      this.$store.dispatch('events/setTimerange', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';

.ng-header {
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px -10px 20px 10px rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
  @media (min-width: $small) {
    padding: 15px 40px;
  }

  &__text {
    @media (max-width: $medium) {
      display: none;
    }
  }
}

.logo-link {
  text-decoration: none;
  display: block;
}
.logo-image {
  width: 150px;

  @media (min-width: $small) and (max-width: $large) {
    width: 200px;
  }

  @media (min-width: $large) {
    width: 300px;
  }
}

h2 {
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;
  line-height: 1.2;
  margin: 0 0 0 0.5rem;
}

.links-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  @media (max-width: $medium) {
    justify-content: flex-end;
  }
}

.link {
  color: #3f3942;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 900;
  @media (max-width: $medium) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    background-color: #ea4243;
    color: white;
    width: 80%;
    border-radius: 12px;
  }

  &:hover {
    color: #ea4243;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    /*border-bottom: 4px solid #ea4243;*/
  }

  &--active {
    color: #ea4243;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    /*border-bottom: 4px solid #ea4243;*/
  }
}

.events-link {
  display: none;
  @media (min-width: $medium) {
    display: block;
  }
}

.timing-container {
  display: block;
  @media (min-width: $medium) {
    display: none;
  }
}
</style>
