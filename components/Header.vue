<template>
  <div class="ng-header container--fluid">
    <div class="flex flex-justify--space-between w-90 mx-auto px-3">
      <div class="flex">
        <nuxt-link to="/" class="flex flex--1 mr8">
          <h1 hidden>NEWSGRADIENT</h1>
          <img src="@/assets/svg/logo-text.svg" class="logo-image" />
        </nuxt-link>
        <h2 class="ng-header__text">
          Top pet događaja o kojima je izvještavala bosanskohercegovačka <br />
          štampa poredani su prema strančkoj pristranosti
        </h2>
        <!--        <TimingSelect @change="timerangeChanged" class="timing-container" />-->
      </div>
      <div class="links-container">
        <nuxt-link :class="['link', { 'link--active': '/' === $route.path }]" to="/" class="link events-link">
          Događaji
        </nuxt-link>
        <nuxt-link :class="['link', { 'link--active': '/about' === $route.path }]" to="/about" class="link">
          Više o
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
        { to: '/', title: 'Događaji' },
        { to: '/about', title: 'Više o' }
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
    padding: 32px 0;
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
    width: 408px;
  }
}

h2 {
  font-size: 18px;
  font-weight: 300;
  font-style: italic;
  line-height: 1.2;
  margin: 0 0 0 0.5rem;
}

.links-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  @media (max-width: $medium) {
    justify-content: flex-end;
  }
}

.link {
  color: #3f3942;
  font-size: 27px;
  font-weight: 900;
  border-bottom: 4px solid white;

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
    border: none;
  }

  &:hover {
    color: #ea4243;
    border-bottom: 4px solid #ea4243;
    @media (max-width: $medium) {
      color: white;
      text-decoration: none;
      border: none;
    }
  }

  &--active {
    color: #ea4243;
    border-bottom: 4px solid #ea4243;
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

a {
  text-decoration: none;
}
</style>
