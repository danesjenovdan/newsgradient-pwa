import Vue from 'vue';
import Router from 'vue-router';
import Listing from './views/Listing.vue';
import Article from './views/Article.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'listing',
      component: Listing,
    },
    {
      path: '/article/:eventId/:articleId',
      name: 'article',
      component: Article,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
