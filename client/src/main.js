// Imports
import 'bootstrap/dist/css/bootstrap.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Home from './Home';
import ListComponent from './Components/ListComponent';

// Plugins
Vue.use(VueRouter);
Vue.use(VueResource);

// Routes
const routes = [
  { path: '/', component: Home },
  { path: '/list', component: ListComponent },
];

const router = new VueRouter({
  routes,
});

/* eslint no-new: 0 */
new Vue({
  el: '#app',
  router,
  render: h => h('router-view'),
});
