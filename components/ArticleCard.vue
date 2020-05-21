<template>
  <div class="card flex flex--column flex-align--center">
    <img src="https://picsum.photos/600/300/?image=25" class="card__image" />
    <div class="flex flex-justify--space-between flex-align--center card__header">
      <span class="text--italic">Vigrin News</span>
      <span class="text--italic">See this newshouse on the chart</span>
    </div>
    <div class="card__body mt8">
      <span class="card__title">
        Klemen
      </span>
      /
      <span class="card__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: ['sourceLogo', 'sourceTitle', 'link', 'articleTitle', 'articleContent'],
  computed: {
    setLogo() {
      return {
        /* LOGO */
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: white;
  width: 100%;
  min-height: 450px;

  &__body {
    width: 90%;
  }

  &__image {
    width: 100%;
  }

  &__header {
    width: 90%;
  }

  &__title {
    font-size: 20px;
    font-weight: bold;
  }
}

.card-content {
  padding: 1.4em;
  text-align: left;
  background-image: linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0) 100%);

  h2 {
    margin-top: 0;
    font-size: 27px;
    margin-bottom: 0.5em;
    font-weight: bold;
  }

  p {
    font-size: 20px;
  }
}

.top-content {
  display: flex;
  margin-bottom: 10px;

  &__logo {
    width: 10%;
    .source-logo {
      width: 70%;
    }
  }

  &__title {
    width: 30%;
    text-align: left;
  }
  &__url {
    width: 50%;
    text-align: right;
    padding-right: 10px;
  }

  &__chart-button {
    width: 10%;

    .button-icon {
      width: 30%;
      color: #0177ff;
    }
  }
}
</style>
