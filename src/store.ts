import Vue from 'vue';
import Vuex from 'vuex';
import { slants, eventRanges, getArticles } from '@/requests';

Vue.use(Vuex);

export const hState = Object.freeze({
  home: 'HOME',
});

export default new Vuex.Store({
  state: {
    headerState: hState.home,
    currentSlant: slants.all,
    currentEventRange: eventRanges.lastWeek,
    currentArticleUrl: '',
    currentArticleId: 0,
    currentNewshouse: '',
    currentSentiment: 0,
    currentNewsEvent: {
      count: null,
      next: null,
      previous: null,
      results: [],
    },
  },
  mutations: {
    SET_HEADER_STATE(state, newHeaderState) {
      state.headerState = newHeaderState;
    },
    SET_CURRENT_SLANT(state, newCurrentSlant) {
      state.currentSlant = newCurrentSlant;
    },
    SET_CURRENT_EVENT_RANGE(state, newCurrentEventRange) {
      state.currentEventRange = newCurrentEventRange;
    },
    SET_CURRENT_ARTICLE_URL(state, newCurrentArticleUrl) {
      state.currentArticleUrl = newCurrentArticleUrl;
    },
    SET_CURRENT_ARTICLE_ID(state, newCurrentArticleId) {
      state.currentArticleId = newCurrentArticleId;
    },
    SET_CURRENT_NEWSHOUSE(state, newCurrentNewshouse) {
      state.currentNewshouse = newCurrentNewshouse;
    },
    SET_CURRENT_SENTIMENT(state, newCurrentSentiment) {
      state.currentSentiment = newCurrentSentiment;
    },
    SET_CURRENT_NEWS_EVENT(state, newCurrentEvent) {
      state.currentNewsEvent = newCurrentEvent;
    },
  },
  actions: {
    async updateArticleById({ commit, state }, {eventId, articleId }) {
      if (state.currentNewsEvent.results.length === 0) {
        state.currentNewsEvent = await getArticles(eventId);
      }
      const theArticle = state.currentNewsEvent.results.find(article => article.id === parseInt(articleId));
      commit('SET_CURRENT_ARTICLE_URL', theArticle.url);
      commit('SET_CURRENT_ARTICLE_ID', theArticle.id);
      commit('SET_CURRENT_NEWSHOUSE', theArticle.medium.title);
      commit('SET_CURRENT_SENTIMENT', theArticle.sentiment);
    },
  },
});
