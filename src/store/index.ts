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
    currentSortedArticles: [],
    currentArticleIndex: 0,
    username: '',
    password: '',
    loggedIn: false,
    sliderSwitching: false,
    sliderSwitchToValue: 0,
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
      // @ts-ignore
      state.currentArticleIndex = state.currentSortedArticles.indexOf(newCurrentArticle);
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
      state.currentSortedArticles = newCurrentEvent.results.slice()
        .sort((a: any, b: any) => a.sentimentRNN - b.sentimentRNN);
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
    SET_SLIDER_SWITCHING(state, newSliderSwitching) {
      state.sliderSwitching = newSliderSwitching;
    },
    SET_SLIDER_SWITCH_TO_VALUE(state, newSliderSwitchToValue) {
      state.sliderSwitchToValue = newSliderSwitchToValue;
    },
  },
  actions: {
    async updateArticleById({ commit, state }, { eventId, articleId }) {
      if (state.currentNewsEvent.results.length === 0) {
        const event = await getArticles(eventId);
        commit('SET_CURRENT_NEWS_EVENT', event);
      }
      const theArticle = state.currentNewsEvent.results
        // @ts-ignore
        .find((article) => article.id === parseInt(articleId, 10));
      // @ts-ignore
      commit('SET_CURRENT_ARTICLE_ID', theArticle.id);
      // @ts-ignore
      commit('SET_CURRENT_ARTICLE', theArticle);
      // @ts-ignore
      commit('SET_CURRENT_NEWSHOUSE', theArticle.medium.title);
      // @ts-ignore
      commit('SET_CURRENT_SENTIMENT', theArticle.sentiment);
    },
  },
});
