<template>
  <header class="app-header navbar">
    <h3>Esprit Voyage</h3>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <button class="navbar-toggler sidebar-toggler d-md-down-none mr-auto" type="button" @click="sidebarToggle">&#9776;</button>
    <a @click.prevent="logout" v-if="$root.user" href="/">Déconnexion</a>

    <div class="text-xs-center">
    <v-menu offset-y>
      <v-btn color="primary" dark slot="activator">Dropdown</v-btn>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click.prevent="goToProfile($root.user._id)">
          <v-list-tile-title >{{ item.link }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>

    <button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" @click="asideToggle">&#9776;</button>
  </header>
</template>

<script>
import { logout } from "@/api/auth";
export default {
  name: "header",

  data() {
    return {
      items: [{ link: "Profil" }]
    };
  },

  methods: {
    sidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-hidden");
    },
    sidebarMinimize(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-minimized");
    },
    mobileSidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-mobile-show");
    },
    asideToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("aside-menu-hidden");
    },
    logout() {
      logout(this.$root);
      this.$router.push("/");
    },
    goToProfile(_id) {
      this.$router.push("/profile/" + _id);
    }
  }
};
</script>
