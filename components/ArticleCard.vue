<template>
  <article class="card">
    <img
      src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg"
      alt="A banana that looks like a bird"
    />
    <div class="card-content">
      <div class="top-content">
        <div class="top-content--logo">
          <p>{{ sourceLogo }}</p>
        </div>
        <div class="top-content--title">
          <p>{{ sourceTitle }}</p>
        </div>
        <div class="top-content--url">
          <a :href="link">See this newshouse on the chart</a>
        </div>
        <div class="top-content--chart-button">
          <p>B</p>
        </div>
      </div>
      <h2>{{ articleTitle }}</h2>
      <p>
        {{ articleContent }}
      </p>
      <a :href="link">
        Read more
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    sourceLogo: this.setLogo,
    sourceTitle: Logo,
    link: Link,
    articleTitle: Title,
    articleContent: String
  },
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
  & a {
    text-decoration: none;
    color: #0177ff;
    text-align: left;
  }
  & p {
    color: black;
  }
}

.card-content {
  padding: 1.4em;
  text-align: left;

  & h2 {
    margin-top: 0;
    font-size: 27px;
    margin-bottom: 0.5em;
    font-weight: bold;
  }

  &p {
    font-size: 16px;
  }
}

.top-content {
  display: flex;
  margin-bottom: 10px;

  &--logo {
    width: 10%;
  }

  &--title {
    width: 30%;
  }
  &--url {
    width: 50%;
  }

  &--card-chart-button {
    width: 10%;
  }
}
</style>
