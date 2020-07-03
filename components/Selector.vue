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
    <div v-if="!isInfoSeen" @click="checkSeen" class="notification">
      <div class="notification--icon">
        <img src="@/assets/img/info-icon.png" class="notification--icon-img" />
      </div>
      <div class="text--center notification__text">
        <p class="notification__text--title">
          Izaberi perspektivu za pregled priča!
        </p>
        <p class="notification__text--desc">
          Pretražite različite perspektive istog događaja odabirom jedne od opcija u nastavku.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { SLANTS } from '../constants'

export default {
  name: 'Selector',
  data() {
    return {
      choices: Object.keys(SLANTS).map((slantKey) => {
        return {
          key: parseInt(slantKey),
          name: SLANTS[slantKey]
        }
      }),
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
      this.$emit('change', parseInt(key))
      this.checkSeen()
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
  height: 100px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  z-index: 99999;

  @media (max-width: $medium) {
    height: 80px;
  }
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
  box-shadow: 0px 0px 22px -3px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  padding: 10px;

  @media (min-width: $small) {
    width: 400px;
    left: calc(50% - 200px);
  }

  &__text {
    font-size: 1.1rem;
    &--title {
      font-weight: 900;
    }
    &--desc {
      font-weight: 100;
    }
  }
  &:before {
    position: absolute;
    display: block;
    content: '';
    width: 40px;
    height: 40px;
    background-color: white;
    transform: rotate(45deg);
    bottom: -20px;
    left: calc(50% - 20px);
    box-shadow: 5px 5px 5px -3px rgba(0, 0, 0, 0.25);
    z-index: 100;
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
  display: flex;
  justify-content: center;
  align-items: center;

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
    cursor: pointer;

    @media (max-width: $small) {
      font-size: 10px;
    }
  }
  li:hover:before {
    background-color: #0177ff;
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
    transition: background-color 0.2s;
    cursor: pointer;

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
