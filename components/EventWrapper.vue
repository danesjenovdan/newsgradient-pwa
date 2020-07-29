<template>
  <div class="event-wrapper flex flex--column">
    <Divider class="w-100" />
    <div class="content-wrapper-custom">
      <div class="flex flex--column flex-justify--center">
        <div :class="{ 'title--small': !isMain }" @click="$router.push('/events/' + eventUri)" class="title">
          {{ title }}
        </div>
        <div class="mt-1">
          <template v-if="articles.length">
            <span :class="['date-display', { 'date-display--small': !isMain }]">Posljednja objava:</span>
            <span :class="['date-display__date', { 'date-display__date--small': !isMain }]">{{ firstPublish }}</span>
          </template>
          <span v-else>&nbsp;</span>
        </div>
        <div class="mt8 mb8">
          <a :href="'/events/' + eventUri" class="articles">{{
            `${allArticlesCount} ${allArticlesCount === 1 ? 'članak' : 'članaka'}`
          }}</a>
        </div>
        <div v-if="isMain" :class="['mt-2', { empty__wrapper: !articleCount, row: articleCount }]">
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
            <div class="flex flex--column flex-justify--center flex-align--center empty__holder--main">
              <img src="@/assets/svg/missing-icon.svg" class="missing-icon" />
              <span class="empty__text">
                Ni jedan {{ selectedSlantString }} medij nije izvijestio o ovom dogadjaju.
              </span>
            </div>
          </template>
        </div>
        <div v-else :class="{ empty__wrapper: !articleCount }" class="flex flex--column mt-2 small-articles">
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
              <img src="@/assets/svg/missing-icon.svg" class="missing-icon" />
              <span class="empty__text">
                Ni jedan {{ selectedSlantString }} medij nije izvijestio o ovom dogadjaju.
              </span>
            </div>
          </template>
        </div>
      </div>
      <div>
        <div v-if="articleCount" class="w-100 flex flex-justify--flex-end text--uppercase mt-4">
          <button
            :to="'/events/' + eventUri"
            @click="$router.push('/events/' + eventUri)"
            class="more-button text--uppercase"
          >
            Više članaka <img src="@/assets/svg/puscica-bela.svg" style="vertical-align: inherit; width: 15px" />
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
    allArticlesCount: {
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
  },
  computed: {
    selectedSlantString() {
      const slant = this.$store.state.carousel.selectedSlant
      return slant === 2 ? 'neutralan' : slant < 2 ? 'lijevo orijentiran' : 'desno orijentiran'
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  margin: 10px;
}

.title {
  font-size: 36px;
  font-weight: 900;
  font-style: italic;
  color: #3f3942;
  transition: color 0.15s ease-in-out;
  cursor: pointer;
  display: block;
  line-height: 1.1;

  &--small {
    font-size: 27px;
  }

  &:hover {
    color: #0177ff;
  }
}

.date-display {
  font-size: 18px;
  font-weight: 300;
  font-style: italic;

  &__date {
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
  }

  &--small,
  &__date--small {
    font-size: 13px;
  }
}

.articles {
  font-size: 18px;
  color: #e50001;
}

.content-wrapper-custom {
  padding: 25px 25px;
  height: 100%;
  min-height: 808px;
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
    margin-top: 40%;
    &--main {
      margin-top: 22%;
    }
  }

  &__wrapper {
    height: 100%;
    // border-top: 1px solid black;
  }

  &__text {
    margin-top: 8px;
    font-weight: 300;
    font-style: italic;
    font-size: 22px;
    max-width: 350px;
    text-align: center;
    line-height: 1.1;
  }
}

.article-wrapper {
  height: 100%;
}

.small-articles {
  margin-left: -25px;
  margin-right: -25px;

  .article-wrapper {
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 14px;
    padding-bottom: 20px;
  }
}

.missing-icon {
  width: 70px;
}
</style>
