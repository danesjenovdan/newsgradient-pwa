<template>
  <div id="home">
    <ng-header />
    <news-gradient />
    <ng-embed
      :articleUrl="currentArticleUrl"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapActions } from 'vuex';
import NgHeader from '@/components/NgHeader.vue';
import NewsGradient from '@/components/NewsGradient.vue';
import NgEmbed from '@/components/NgEmbed.vue';

@Component({
  components: {
    NgHeader,
    NewsGradient,
    NgEmbed,
  },

  computed: {
    ...mapState([
      'currentArticleUrl',
    ]),
  },

  methods: {
    ...mapActions([
      'updateArticleById',
    ]),
  },

  created() {
    // @ts-ignore
    this.updateArticleById({
      eventId: this.$route.params.eventId,
      articleId: this.$route.params.articleId,
    });
  },
})

export default class Article extends Vue {}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;

  &::before {
    content: 'LOADING ... If it\'s taking too long, the news site probably blocked iFrame embeds.';
    display: block;
    position: absolute;
  }
}
</style>
