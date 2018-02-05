// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App";
import { checkUser } from "@/api/auth";
import router from "./router";
import VueFormWizard from "vue-form-wizard";
import Notifications from "vue-notification";
import moment from "moment";
import vuescroll from "vue-scroll";

Vue.prototype.moment = moment;
moment.locale("fr");
Vue.use(BootstrapVue);
Vue.use(VueFormWizard);
Vue.use(Notifications);
Vue.use(vuescroll);

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
