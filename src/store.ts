import Vue from 'vue';
import Vuex from 'vuex';
import { slants, eventRanges } from '@/requests';

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
    currentEvent: {},
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
    SET_CURRENT_EVENT(state, newCurrentEvent) {
      state.currentEvent = newCurrentEvent;
    },
  },
  actions: {

  },
});
