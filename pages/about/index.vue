<template>
  <div class="flex flex-justify--center flex-align--center">
    <div class="container mt48">
      <h2 class="about-text text--center">
        Newsgradient helps you explore the differences in reporting on political events. It enables a fast and easy way
        of accessing news representation across the whole spectrum of media landscape.
      </h2>
      <div class="flex flex-justify--space-evenly mt64">
        <div class="flex flex--column">
          <span @click="selectedTitle = 1" class="text--uppercase title text--cursor-pointer">How does this work?</span>
          <img v-if="selectedTitle === 1" src="@/assets/svg/underline-gradient.svg" class="gradient-underline" />
        </div>
        <div class="flex flex--column">
          <span @click="selectedTitle = 2" class="text--uppercase title text--cursor-pointer"
            >How are media arranged?</span
          >
          <img v-if="selectedTitle === 2" src="@/assets/svg/underline-gradient.svg" class="gradient-underline" />
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      selectedTitle: 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';

.container {
  width: 50%;
  @media (max-width: $small) {
    width: 100%;
    padding: 20px;
  }
}
.about-text {
  font-size: 40px;
  font-style: italic;
  font-weight: 300;
  @media (max-width: $small) {
    font-size: 25px;
  }
}
.card {
  background-color: white;
  padding: 40px;
  width: 100%;
}
.title {
  font-size: 25px;
  font-weight: 700;
}
.subtitle {
  font-size: 15px;
}
.gradient-underline {
  width: 100%;
  margin-bottom: -5px;
}
</style>
