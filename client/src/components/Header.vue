<template>
  <header class="app-header navbar">
    <h3 class="position-title-menu">Menu</h3>
    <button class="navbar-toggler sidebar-toggler d-md-down-none mr-auto custom" type="button" @click="sidebarToggle"><strong>&#9776;</strong></button>
    <h1 class="align">Esprit Voyages</h1>
    <div class="text-xs-center">
              <b-dropdown class="right-nav">
            <button class="button is-dark" slot="trigger">
                <b-icon icon="arrow_drop_down"></b-icon>
            </button>

            <b-dropdown-item @click.prevent="goToProfile($root.user._id)">Profil</b-dropdown-item>
        </b-dropdown>
  </div>

    <button class="navbar-toggler aside-menu-toggler d-md-down-none right-nav" type="button" @click="asideToggle"><strong>&#9776;</strong></button>
    <h3>Contacts</h3>
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


<style scoped>
.align {
  padding-right: 7.5em;
  font-family: "Lora", serif;
}

.position-title-menu {
  padding-right: 4%;
  padding-left: 3%;
}

.custom {
  background-color: #20a8d8;
}

.right-nav {
  margin-right: 3rem;
}
</style>

