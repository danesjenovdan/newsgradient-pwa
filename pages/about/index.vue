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
    <div :class="{ container: !isMobile, 'container--fluid': isMobile }">
      <div class="flex flex-justify--space-evenly mt40">
        <div class="flex flex--column text--center title-holder">
          <span class="text--uppercase tab-title mb4">Karta medija</span>
          <div src="@/assets/svg/underline-gradient.svg" class="gradient-underline"></div>
        </div>
      </div>
      <div class="card flex flex--column">
        <div>
          <a href="/Media-Bias-Chart-Bosnia-2.jpg" target="_blank"
            ><img src="/Media-Bias-Chart-Bosnia-2.jpg" class="w-100 img-fluid"
          /></a>
        </div>
      </div>
      <div class="flex flex-justify--space-evenly mt64">
        <div class="flex flex--column text--center title-holder">
          <span class="text--uppercase tab-title mb4">Šta je Newsgradient?</span>
          <div src="@/assets/svg/underline-gradient.svg" class="gradient-underline"></div>
        </div>
      </div>
      <div class="card flex flex--column">
        <p class="subtitle mb-0">
          Newsgradient je online platforma koja nam omogućava da vidimo kako su mediji iz BiH, grupisani prema svojoj
          ideološkoj orijentaciji, izvještavali o pojedinim događajima i temama.
        </p>
      </div>
      <div class="flex flex-justify--space-evenly mt64">
        <div class="flex flex--column text--center title-holder">
          <span class="text--uppercase tab-title mb4">Kako je određena ideološka orijentacija medija?</span>
          <div src="@/assets/svg/underline-gradient.svg" class="gradient-underline"></div>
        </div>
      </div>
      <div class="card flex flex--column">
        <p class="subtitle">
          Koristeći jedinstvenu metodologiju koju je razvila Vanessa Otero, osnivačica
          <a href="https://www.adfontesmedia.com/" target="_blank">Ad Fontes Media</a>, ocijenili smo pouzdanost i
          ideološku orijentaciju medija u BiH. Tim analitičara/ki je u periodu od dva mjeseca pratio i ocjenjivao uzorak
          medijskih izvještaja odabranih medija prema spomenutoj metodologiji. Na ovaj način su dobijeni ukupni rezultati
          i izračunate ocjene 1) pouzdanosti 2) ideološke orijentacije svakog medija iz uzorka.
        </p>
        <p class="subtitle mb-0">
          Više o metodologiji ocjenjivanja medija možete saznati
          <a href="https://www.adfontesmedia.com/how-ad-fontes-ranks-news-sources/" target="_blank">ovdje</a>.
        </p>
      </div>
      <div class="flex flex-justify--space-evenly mt64">
        <div class="flex flex--column text--center title-holder">
          <span class="text--uppercase tab-title mb4">Kako radi Newsgradient?</span>
          <div src="@/assets/svg/underline-gradient.svg" class="gradient-underline"></div>
        </div>
      </div>
      <div class="card flex flex--column">
        <p class="subtitle mb-0">
          Prikupljamo članke iz odabranih bosanskohercegovačih medija uz pomoć naših saradnika i prijatelja iz
          <a href="https://eventregistry.org/" target="_blank">Event Registry</a>. Novinski članci o istoj temi ili
          događaju se grupiraju. Teme ili događaji o kojima se najviše izvještavalo u proteklom danu su prikazani na
          početnoj stranici. Mediji su, prema ideološkoj orijentaciji, grupisani u tri grupe: lijevo orijentisani mediji,
          neutralni/uravnoteženi mediji i desno orijentisani mediji. Granica koja dijeli ove tri kategorije je
          postavljena prema smjernicama postavljenim od strane autorke metodologije, uvažavajući lokalni kontekst i
          realnost medijske scene u BiH.
        </p>
      </div>
      <div class="flex flex-justify--space-evenly mt40">
        <div class="flex flex--column text--center title-holder">
          <span class="text--uppercase tab-title mb4"></span>
          <div src="@/assets/svg/underline-gradient.svg" class="gradient-underline"></div>
        </div>
      </div>
      <div class="card flex flex--column mb64">
        <div class="row">
          <div class="flex flex--column flex-align--flex-start col-lg-8 col-12 sponsors">
            <div class="title-container">
              <strong>RAZVILI</strong>
            </div>
            <div class="row">
              <div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
                <a href="https://danesjenovdan.si/" target="_blank" class="d-inline-block mb-4 mb-md-0"
                  ><img src="@/assets/img/djnd-logo.png" alt="danes je nov dan logo" class="img-fluid"
                /></a>
              </div>
              <div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
                <a href="https://zastone.ba/" target="_blank" class="d-inline-block mb-4 mb-md-0"
                  ><img src="@/assets/img/zasto-ne-logo.png" alt="zašto ne logo" class="img-fluid"
                /></a>
              </div>
              <div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
                <a href="https://www.adfontesmedia.com/" target="_blank" class="d-inline-block mb-4 mb-md-0"
                  ><img src="@/assets/img/adfontes-logo.png" alt="adfontes logo" class="img-fluid"
                /></a>
              </div>
            </div>
          </div>
          <div class="flex flex--column col-lg-4 col-12 sponsors mt-4 mt-lg-0">
            <div class="title-container">
              <strong>UZ POMOĆ</strong>
            </div>
            <div class="row">
              <div
                class="col-12 col-md-4 col-lg-6 d-flex align-items-center justify-content-center justify-content-md-start"
              >
                <a href="https://www.ned.org/" target="_blank" class="d-inline-block mb-4 mb-md-0"
                  ><img src="@/assets/img/ned-logo.png" alt="ned logo" class="img-fluid"
                /></a>
              </div>
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
  img {
    max-width: 160px;
    max-height: 90px;
  }
}
</style>
