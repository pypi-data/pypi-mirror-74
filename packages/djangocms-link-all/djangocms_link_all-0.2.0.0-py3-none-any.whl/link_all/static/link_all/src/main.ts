import Vue from 'vue';
import App from './link_all.vue';


Vue.prototype.window = {};
Vue.prototype.window.LINK_ALL_CONTENT_TYPES_NAMES = window.LINK_ALL_CONTENT_TYPES_NAMES;
Vue.prototype.window.LINK_ALL_INSTANCES = window.LINK_ALL_INSTANCES;


new Vue({render: h => h(App)}).$mount('.field-link_all_field');
