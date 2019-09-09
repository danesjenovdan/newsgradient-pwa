import Vue from 'vue';
import Vuex from 'vuex';
import { eventRanges, getArticles } from '@/requests';

Vue.use(Vuex);

export const hState = Object.freeze({
  home: 'HOME',
});

export default new Vuex.Store({
  state: {
    headerState: hState.home,
    currentEventRange: eventRanges.yesterday,
    currentArticle: {},
    currentArticleId: 0,
    currentNewshouse: '',
    currentSentiment: 0,
    currentNewsEvent: {
      count: null,
      next: null,
      previous: null,
      results: [],
    },
    username: '',
    password: '',
    loggedIn: false,
  },
  mutations: {
    SET_HEADER_STATE(state, newHeaderState) {
      state.headerState = newHeaderState;
    },
    SET_CURRENT_EVENT_RANGE(state, newCurrentEventRange) {
      state.currentEventRange = newCurrentEventRange;
    },
    SET_CURRENT_ARTICLE(state, newCurrentArticle) {
      state.currentArticle = newCurrentArticle;
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
    SET_USERNAME(state, newUsername: string) {
      state.username = newUsername;
    },
    SET_PASSWORD(state, newPassword: string) {
      state.password = newPassword;
    },
    TOGGLE_LOGGED_IN(state) {
      state.loggedIn = !state.loggedIn;
    },
    SET_LOGGED_IN(state, newLoginState) {
      state.loggedIn = newLoginState;
    },
  },
  actions: {
    async updateArticleById({ commit, state }, { eventId, articleId }) {
      if (state.currentNewsEvent.results.length === 0) {
        state.currentNewsEvent = await getArticles(eventId);
      }
      const theArticle = state.currentNewsEvent.results.find(article => article.id === parseInt(articleId));
      commit('SET_CURRENT_ARTICLE_ID', theArticle.id);
      commit('SET_CURRENT_ARTICLE', theArticle);
      commit('SET_CURRENT_NEWSHOUSE', theArticle.medium.title);
      commit('SET_CURRENT_SENTIMENT', theArticle.sentiment);
    },
  },
});
