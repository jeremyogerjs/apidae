import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog,faUserSecret,faChevronDown,faChevronUp,faHistory,faPlus,faGlobe,faEllipsisH,faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCog,faUserSecret,faChevronDown,faChevronUp,faHistory,faPlus,faGlobe,faEllipsisH,faBars );
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
