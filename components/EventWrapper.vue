<template>
  <div class="flex flex--column mb24">
    <Divider class="w-100" />
    <div :class="{ 'title--small': !isMain }" @click="$router.push('/events/' + eventUri)" class="title">
      {{ title }}
    </div>
    <div>
      <span class="date-display">Last published:</span> <span class="date-display__date">{{ firstPublish }}</span>
    </div>
    <div class="mt16 mb8">
      <a class="articles" :href="'/events/' + eventUri"> {{ articleCount }} articles </a>
    </div>
    <div v-if="isMain" class="row">
      <div v-for="article in articles" :key="article.id" class="col-lg-4 col-md-6">
        <ArticleCard
          :title="article.title"
          :content="article.content"
          :image-url="article.image"
          :source-title="article.medium.title"
          :article-url="article.url"
          :favicon-url="article.medium.favicon"
          :medium-url="article.medium.uri"
          :medium-name="article.medium.title"
          class="article-wrapper"
        />
      </div>
    </div>
    <div v-else class="flex flex--column flex">
      <ArticleCardSmall
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :content="article.content"
        :image-url="article.image"
        :source-title="article.medium.title"
        :article-url="article.url"
        :favicon-url="article.medium.favicon"
        :medium-url="article.medium.uri"
        :medium-name="article.medium.title"
        class="article-wrapper"
      />
    </div>
    <div class="w-100 flex flex-justify--end text--uppercase mt16">
      <button
        :to="'/events/' + eventUri"
        @click="$router.push('/events/' + eventUri)"
        class="more-button text--uppercase"
      >
        More Articles <img src="@/assets/svg/small-right-arrow.svg" style="vertical-align: inherit;" />
      </button>
    </div>
  </div>
</template>

<script>
import Divider from './Divider'
import ArticleCard from './ArticleCard'
import ArticleCardSmall from './ArticleCardSmall'
export default {
  name: 'EventWrapper',
  components: { ArticleCardSmall, ArticleCard, Divider },
  props: {
    isMain: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'No title'
    },
    firstPublish: {
      type: String,
      default: '20 hours ago'
    },
    articleCount: {
      type: Number,
      default: 0
    },
    eventUri: {
      default: 'uri',
      type: String,
      required: true
    },
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  margin: 10px;
}
.title {
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
  color: #3f3942;
  transition: color 0.2s;
  cursor: pointer;
  display: block;
  line-height: 1em;
  &--small {
    font-size: 1.8rem;
  }
  &:hover {
    color: #0177ff;
  }
}
.date-display {
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;

  &__date {
    font-weight: 300;
    font-size: 1rem;
  }
}
.articles {
  font-size: 1rem;
  color: #e50001;
}
</style>
