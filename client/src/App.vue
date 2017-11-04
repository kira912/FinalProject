<template>
  <div id='app'>
      <AppHeader v-if="$root.user"/>
      <div class="app-body">
        <Sidebar v-if="$root.user" :navItems="nav"/>
        <AppAside/>
      </div>
      <router-view></router-view>
            <footer class="footer-center">
			<div class="container">
				<div class="content has-text-centered">
					<p> &copy;
						<strong>Intranet</strong> by
            <a href="https://www.linkedin.com/in/valentin-perot/" target="_blank">
              Valentin Perot</a>. The source code is available on
						<a href="https://github.com/kira912/FinalProject" target="_blank">
              <i class="fa fa-github" aria-hidden="true"></i>GitHub
            </a>
					</p>
				</div>
			</div>
		</footer>
  </div>
</template>

<script>
import nav from "@/_nav";
import { Header as AppHeader, Sidebar, Aside as AppAside } from "@/components/";

export default {
  name: "app",
  components: {
    AppHeader,
    Sidebar,
    AppAside
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

.app {
  font-family: "Encode Sans Expanded", sans-serif;
  background-color: #e1dcd8;
}

button {
  border-radius: 5px;
}

.modal-overlay {
  background-color: black;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}

.footer-center {
  text-align: center;
}
</style>
