import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App";
import eventBus from "./plugin/eventBus";


Vue.use(eventBus);
Vue.use(ElementUI);
Vue.use(VueRouter);
const router = new VueRouter({
  routes
})

new Vue({
    el: '#app',
    router,
    ...App,
    mounted() {
      function isMobile() {
        return !!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      }
      this.$eventBus.$emit('currAgent', isMobile());
      window.onresize = () => {
        this.$eventBus.$emit('currAgent', isMobile());
      } 
    }
});
