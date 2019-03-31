import App from './app.vue';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../style/index.css'

Vue.use(ElementUI);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }

});
