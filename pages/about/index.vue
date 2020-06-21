<template>
  <div>
    <div>
      <SubHeader v-if="isMobile">
        <div class="flex flex-align--center">
          <div class="flex--1">
            <img
              @click="$router.push('/')"
              src="@/assets/svg/carousel/right-arrow.svg"
              class="back-button back-button--header"
            />
          </div>
          <div class="flex--5 text--center header--title">About Newsgradient</div>
          <div class="flex--1"></div>
        </div>
      </SubHeader>
      <Header v-else />
    </div>
    <div class="container mt48">
      <h2 class="about-text text--center">
        Newsgradient helps you explore the differences in reporting on political events. It enables a fast and easy way
        of accessing news representation across the whole spectrum of media landscape.
      </h2>
    </div>
    <div :class="{ container: !isMobile, 'container--fluid': isMobile }">
      <div class="flex flex-justify--space-evenly mt64">
        <div class="flex flex--column text--center title-holder">
          <span @click="selectedTitle = 1" class="text--uppercase tab-title text--cursor-pointer mb4"
            >How does this work?</span
          >
          <img v-if="selectedTitle === 1" src="@/assets/svg/underline-gradient.svg" class="gradient-underline" />
        </div>
        <div class="flex flex--column text--center title-holder">
          <span @click="selectedTitle = 2" class="text--uppercase tab-title text--cursor-pointer mb4"
            >How are media arranged?</span
          >
          <div v-if="selectedTitle === 2" src="@/assets/svg/underline-gradient.svg" class="gradient-underline"></div>
        </div>
      </div>
      <div class="card flex flex--column">
        <span class="title mb16">Sed ut persipiciatis unde omnis</span>
        <span class="subtitle"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. <br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.</span
        >
        <div class="row mt40">
          <div class="flex flex--column flex-align--flex-start col-lg-8 col-12 sponsors">
            <div class="title-container">
              <strong>
                DEVELOPED BY
              </strong>
            </div>
            <div class="flex flex-justify--space-between flex-align--center image-wrapper">
              <img src="@/assets/img/img1.png" height="40" />
              <img src="@/assets/img/img2.png" height="120" />
              <img src="@/assets/img/img3.png" height="40" />
            </div>
          </div>
          <div class="flex flex--column col-lg-4 col-12 sponsors">
            <div class="title-container">
              <strong>
                WITH SUPPORT OF
              </strong>
            </div>
            <div class="flex flex-justify--center flex-align--center image-wrapper single-image">
              <img src="@/assets/img/img4.png" height="80" width="80" style="width: unset" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from '../../components/SubHeader'
import Header from '../../components/Header'
export default {
  name: 'Index',
  components: { Header, SubHeader },
  data() {
    return {
      selectedTitle: 1
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.sizing.windowWidth <= 768
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';

.about-text {
  font-size: 2rem;
  font-weight: 400;
  @media (max-width: $medium) {
    font-size: 1rem;
  }
}
.card {
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  padding: 40px;
  border-radius: 0;
  border: none;
}
.title {
  font-size: 1.5rem;
  font-weight: 700;
  @media (max-width: $medium) {
    font-size: 1.1rem;
  }
}

.title-holder {
  position: relative;
}

.subtitle {
  font-size: 15px;
}
.gradient-underline {
  width: 100%;
  margin-bottom: -5px;
  z-index: 100;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(to right, #0076fe 0%, #e50001 100%);
  height: 5px;
}

.tab-title {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1.32px;
  color: black;
  @media (max-width: $medium) {
    font-size: 0.9rem;
  }
}

.image-wrapper {
  width: 80%;

  @media (max-width: $large) {
    width: 100%;
  }
  height: 120px;
  img {
    width: 25%;
  }
}

.title-container {
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  @media (min-width: $medium) {
    text-align: left;
  }
}

.single-image {
  display: flex;
  justify-content: start;
  align-items: center;

  @media (max-width: $medium) {
    justify-content: center;
    align-items: start;
  }
}

.sponsors {
  &:last-child {
    @media (max-width: $medium) {
      margin-top: 40px;
    }
  }
}
</style>
