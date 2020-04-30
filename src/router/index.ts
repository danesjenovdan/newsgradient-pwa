import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Listing from '../views/Listing.vue';
import Event from '../views/Event.vue';
// import Article from '../views/Article.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'listing',
    component: Listing,
  },
  {
    path: '/event/:eventId',
    name: 'event',
    component: Event,
  },
  // {
  //   path: '/article/:eventId/:articleId',
  //   name: 'article',
  //   component: Article,
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
