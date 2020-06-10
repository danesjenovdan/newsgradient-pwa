<template>
  <div id="ng-selector">
    <div class="container">
      <ul class="choice-bar">
        <li
          v-for="choice in choices"
          :key="choice.key"
          :class="{ active: choice.key === $store.state.carousel.selectedSlant }"
          @click="setChoice(choice.key)"
        >
          {{ choice.name }}
        </li>
      </ul>
    </div>
    <div v-if="!isInfoSeen" class="notification" @click="checkSeen">
      <div class="notification--icon">
        <img src="@/assets/img/info-icon.png" class="notification--icon-img" />
      </div>
      <div class="text--center notification__text">
        <p class="notification__text--title">
          Pick a perspective to see the stories!
        </p>
        <p class="notification__text--desc">
          Browse among different views on the same event by selecting one of the options below.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
const NEUTRAL = 'NEUTRAL'
const LIBERAL = 'LIBERAL'
const FAR_LEFT = 'FAR LEFT'
const CONSERVATIVE = 'CONSERVATIVE'
const FAR_RIGHT = 'FAR RIGHT'

export default {
  name: 'Selector',
  data() {
    return {
      choices: [
        { key: 1, name: FAR_LEFT },
        { key: 2, name: LIBERAL },
        { key: 3, name: NEUTRAL },
        { key: 4, name: CONSERVATIVE },
        { key: 5, name: FAR_RIGHT }
      ],
      isInfoSeen: false
    }
  },
  mounted() {
    if (!localStorage.isInfoSeen) {
      localStorage.isInfoSeen = false
    }
    this.isInfoSeen = localStorage.isInfoSeen === 'true'
  },
  methods: {
    setChoice(key) {
      this.$emit('change', key)
    },
    checkSeen() {
      localStorage.isInfoSeen = true
      this.isInfoSeen = localStorage.isInfoSeen
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';

#ng-selector {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 11vh;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  padding-top: 1rem;
}

.notification {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 200px;
  position: absolute;
  left: 10%;
  bottom: 13vh;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  @media (min-width: $small) {
    width: 400px;
    left: calc(50% - 200px);
  }

  &__text {
    font-size: 1.1rem;
    &--title {
      font-weight: 700;
    }
    &--desc {
      font-weight: 100;
    }
  }
  &:before {
    position: absolute;
    display: block;
    content: '';
    width: 50px;
    height: 50px;
    background-color: white;
    transform: rotate(45deg);
    bottom: -5%;
    left: calc(50% - 25px);
  }

  &--icon {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    left: calc(50% - 35px);
    top: -35px;
    background-color: #cecece;
    border: 5px solid white;
  }
  &--icon-img {
    width: 27px;
    height: 42px;
  }
}

.choice-bar {
  width: 100%;

  li {
    list-style-type: none;
    width: 20%;
    float: left;
    font-size: 12px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    color: #7d7d7d;
    font-style: italic;
    @media (max-width: $small) {
      font-size: 10px;
    }
  }

  li:before {
    width: 45px;
    height: 45px;
    content: '';
    line-height: 30px;
    border: 4px solid #dddddd;
    background-color: #dddddd;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;

    @media (max-width: $small) {
      width: 30px;
      height: 30px;
    }
  }

  li:after {
    width: 100%;
    height: 7px;
    content: '';
    position: absolute;
    background-color: #dddddd;
    top: 18px;
    left: -50%;
    z-index: -1;
    @media (max-width: $small) {
      top: 12px;
    }
  }

  li:first-child:after {
    content: none;
  }

  li.active:before {
    border-color: #dddddd;
    background-color: #0177ff;
  }

  li.active + li:after {
    background-color: #dddddd;
  }
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 0;
}
</style>
