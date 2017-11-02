<template>
  <header class="app-header navbar">
    <h3>Esprit Voyage</h3>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <button class="navbar-toggler sidebar-toggler d-md-down-none mr-auto" type="button" @click="sidebarToggle">&#9776;</button>

    <button class="button is-dark" @click="logout()">Deconnexion</button>
    <div class="text-xs-center">
              <b-dropdown>
            <button class="button is-primary" slot="trigger">
                <b-icon icon="arrow_drop_down"></b-icon>
            </button>

            <b-dropdown-item @click.prevent="goToProfile($root.user._id)">Profil</b-dropdown-item>
        </b-dropdown>
  </div>

    <button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" @click="asideToggle">&#9776;</button>
  </header>
</template>

<script>
import { logout, getUsers } from "@/api/auth";
export default {
  name: "header",

  data() {
    return {
      items: [{ link: "Profil" }]
    };
  },

  methods: {
    profileToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("toggle");
    },
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
  },
  created() {
    getUsers().then(user => {
      this.users = user;
    });
  }
};
</script>
