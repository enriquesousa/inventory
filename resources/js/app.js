
require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Importar las rutas
import {routes} from './routes';

const router = new VueRouter({
    routes,
    mode: 'history'
  })

const app = new Vue({
    el: '#app',
    router
});
