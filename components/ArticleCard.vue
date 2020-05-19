<template>
  <article class="card">
    <img
      src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg"
      alt="A banana that looks like a bird"
    />
    <div class="card-content">
      <div class="top-content">
        <div class="top-content__logo">
          <img src="../assets/img/v-logo.png" class="source-logo" />
        </div>
        <div class="top-content__title">
          <p>{{ sourceTitle }}</p>
          <p>Virgin News</p>
        </div>
        <div class="top-content__url">
          <a :href="link">See this newshouse on the chart</a>
        </div>
        <div class="top-content__chart-button">
          <img src="../assets/svg/arrow-right-blue-circle.svg" class="button-icon" />
        </div>
      </div>
      <h2>{{ articleTitle }}</h2>
      <h2>Trump insists all is well at G7, even as disputes boil</h2>
      <p>
        {{ articleContent }}
      </p>
      <p>
        Even after President Donald Trump claimed all was well at the Group of 7 summit, which got underway Sunday on
        France's Atlantic coast, there was evidence of rancor behind the scenes...
      </p>
      <a :href="link" style="read-more">
        Read more
      </a>
    </div>
  </article>
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
  margin-bottom: 2em;
  position: relative;
  a {
    text-decoration: none;
    color: #0177ff;
    text-align: left;
  }
  p {
    color: black;
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
