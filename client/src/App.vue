<template>
  <div id='app'>
      <AppHeader v-if="$root.user"/>
      <div class="app-body">
        <Sidebar v-if="$root.user" :navItems="nav"/>
        <AppAside/>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import nav from "@/_nav";
import {
  Header as AppHeader,
  Sidebar,
  Aside as AppAside,
  Breadcrumb
} from "@/components/";

export default {
  name: "app",
  components: {
    AppHeader,
    Sidebar,
    AppAside,
    Breadcrumb
  },
  data() {
    return {
      nav: nav.items
    };
  },
  computed: {
    name() {
      return this.$route.name;
    }
    /*     list() {
      return this.$route.matched;
    } */
  }
};
</script>


<style>
/* Import Font Awesome Icons Set */
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/css/font-awesome.min.css";
/* Import Simple Line Icons Set */
$simple-line-font-path: "~simple-line-icons/fonts/";
@import "~simple-line-icons/css/simple-line-icons.css";
/* Import Bootstrap Vue Styles */
@import "~bootstrap-vue/dist/bootstrap-vue.css";
</style>
<style lang="scss">
// Import Main styles for this application
@import "./scss/style";
</style>
