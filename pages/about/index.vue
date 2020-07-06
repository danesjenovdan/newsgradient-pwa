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
    <div class="container mt64 mb64">
      <h2 class="about-text text--center">
        "Newsgradient" vam pomaže istražiti razlike u izvještavanju o političkim događajima. Omogućuje brz i jednostavan
        pristup načinu predstavljanja vijesti u čitavom medijskom spektru.
      </h2>
    </div>
    <div :class="{ container: !isMobile, 'container--fluid': isMobile }">
      <div class="flex flex-justify--space-evenly mt64">
        <div class="flex flex--column text--center title-holder">
          <span class="text--uppercase tab-title mb4">Kako ovo funkcionira?</span>
          <div src="@/assets/svg/underline-gradient.svg" class="gradient-underline"></div>
        </div>
      </div>
      <div class="card flex flex--column">
        <span class="subtitle">
          Prikupljamo sve članke iz odabranih bosanskohercegovačih medija uz pomoć naših saradnika i prijatelja iz
          <a href="https://eventregistry.org/" target="_blank">Event Registryija</a>. Novinski članci o istom događaju se
          zajednički grupiraju. Događaji o kojima se najviše izvještavalo su prikazani na početnoj stranici. Uz korištenu
          rigoroznu metodologiju koju je razvila
          <a href="https://www.adfontesmedia.com/" target="_blank">Ad Fontes Media</a>, ocijenili smo medijsku ideolosku
          orjentaciju. Više o tome možete saznati
          <a href="https://www.adfontesmedia.com/how-ad-fontes-ranks-news-sources/" target="_blank">ovdje</a>.
        </span>
      </div>
      <div class="flex flex-justify--space-evenly mt40">
        <div class="flex flex--column text--center title-holder">
          <span class="text--uppercase tab-title mb4">Karta medija</span>
          <div src="@/assets/svg/underline-gradient.svg" class="gradient-underline"></div>
        </div>
      </div>
      <div class="card flex flex--column">
        <div>
          <img src="https://placekitten.com/1000/1000" class="w-100 img-fluid" />
        </div>
      </div>
      <div class="flex flex-justify--space-evenly mt40">
        <div class="flex flex--column text--center title-holder">
          <span class="text--uppercase tab-title mb4"></span>
          <div src="@/assets/svg/underline-gradient.svg" class="gradient-underline"></div>
        </div>
      </div>
      <div class="card flex flex--column mb64">
        <div class="row mt40">
          <div class="flex flex--column flex-align--flex-start col-lg-8 col-12 sponsors">
            <div class="title-container">
              <strong>
                RAZVILI
              </strong>
            </div>
            <div class="flex flex-justify--space-between flex-align--center image-wrapper">
              <img src="@/assets/img/djnd-logo.png" class="img1" alt="danes je nov dan logo" />
              <img src="@/assets/img/zasto-ne-logo.png" class="img2" alt="zašto ne logo" />
              <img src="@/assets/img/adfontes-logo.png" class="img1" alt="adfontes logo" />
            </div>
          </div>
          <div class="flex flex--column col-lg-4 col-12 sponsors">
            <div class="title-container">
              <strong>
                UZ POMOĆ
              </strong>
            </div>
            <div class="flex flex-justify--center flex-align--center image-wrapper single-image">
              <img src="@/assets/img/ned-logo.png" height="80" width="80" style="width: unset" />
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
  font-size: 40px;
  font-weight: 300;
  font-style: italic;

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
  font-weight: 900;

  @media (max-width: $medium) {
    font-size: 1.1rem;
  }
}

.title-holder {
  position: relative;
}

.subtitle {
  font-size: 18px;
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
  font-weight: 900;
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
    @media (max-width: $large) {
    }
  }

  .img1,
  .img2 {
    width: 20%;
  }

  .img2 {
    @media (max-width: $medium) {
      width: 80px;
    }
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
  justify-content: flex-start;
  align-items: center;

  @media (max-width: $medium) {
    justify-content: center;
    align-items: flex-start;
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
