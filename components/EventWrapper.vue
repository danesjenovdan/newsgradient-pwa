<template>
  <div class="event-wrapper flex flex--column">
    <Divider class="w-100" />
    <div class="content-wrapper-custom">
      <div class="flex flex--column flex-justify--center">
        <div :class="{ 'title--small': !isMain }" @click="$router.push('/events/' + eventUri)" class="title">
          {{ title }}
        </div>
        <div>
          <span class="date-display">Last published:</span> <span class="date-display__date">{{ firstPublish }}</span>
        </div>
        <div class="mt16 mb8">
          <a :href="'/events/' + eventUri" class="articles"> {{ articleCount }} articles </a>
        </div>
        <div v-if="isMain" :class="{ empty__wrapper: !articleCount, row: articleCount }">
          <template v-if="articleCount">
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
          </template>
          <template v-else>
            <div class="flex flex--column flex-justify--center flex-align--center empty__holder">
              <img src="@/assets/svg/missing-icon.svg" width="60" />
              <span class="empty__text">
                There is no articles about this topic yet
              </span>
            </div>
          </template>
        </div>
        <div v-else :class="{ empty__wrapper: !articleCount }" class="flex flex--column">
          <template v-if="articleCount">
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
              :only-one="articles.length === 1"
              class="article-wrapper"
            />
          </template>
          <template v-else>
            <div class="flex flex--column flex-justify--center flex-align--center empty__holder">
              <img src="@/assets/svg/missing-icon.svg" width="60" />
              <span class="empty__text">
                There is no articles about this topic yet
              </span>
            </div>
          </template>
        </div>
      </div>
      <div>
        <div v-if="articleCount" class="w-100 flex flex-justify--flex-end text--uppercase mt16">
          <button
            :to="'/events/' + eventUri"
            @click="$router.push('/events/' + eventUri)"
            class="more-button text--uppercase"
          >
            More Articles <img src="@/assets/svg/puscica-bela.svg" style="vertical-align: inherit; width: 15px" />
          </button>
        </div>
      </div>
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
  font-weight: 900;
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
  font-weight: 400;
  font-style: italic;

  &__date {
    font-weight: 400;
    font-size: 1rem;
    font-style: italic;
  }
}
.articles {
  font-size: 1rem;
  color: #e50001;
}

.content-wrapper-custom {
  padding: 10px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.event-wrapper {
  min-height: 600px;
  height: 100%;
  background-color: #f6f6f6;
}

.empty {
  &__holder {
    margin-top: 50%;
  }
  &__wrapper {
    height: 100%;
    border-top: 1px solid black;
  }
  &__text {
    margin-top: 5px;
    font-weight: 300;
  }
}

.article-wrapper {
  height: 100%;
}
</style>
