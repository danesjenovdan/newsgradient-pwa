<template>
  <div class="ng-header container--fluid">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'SubHeader',
  data() {
    return {
      links: [
        { to: '/', title: 'Events' },
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
  font-size: 1.6rem;
  font-weight: bold;
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
  }

  &--active {
    color: #ea4243;
    text-decoration: underline;
    text-decoration-thickness: 4px;
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
