import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
    el: '#app',
    router
});
