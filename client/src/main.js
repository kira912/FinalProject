// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App";
import {
  checkUser
} from "@/api/auth";
import router from "./router";
// import Vuetify from "vuetify";
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)
// Vue.use(Vuetify);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App),
  data: {
    user: null
  },
  created() {
    checkUser(this.$root);
  }
});
