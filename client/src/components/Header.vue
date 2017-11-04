<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded height">
    <h3 class="">Menu</h3>
    <button class="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" @click="sidebarToggle" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <h1 class="align">Esprit Voyages</h1>
    <img class="rounded-circle" :src="user.profilePic" alt="test" />
    <div class="text-xs-center">
      <b-dropdown class="right-nav">
        <button class="btn btn-dark" slot="trigger">
        </button>
        <b-dropdown-item @click.prevent="goToProfile($root.user._id)">Profil</b-dropdown-item>
      </b-dropdown>
    </div>
    <button class="navbar-toggler navbar-toggler-right navbar-brand" type="button" @click="asideToggle"><strong>&#9776;</strong></button>
    <h3>Contacts</h3>
  </nav>
</template>

<script>
import { logout, getSingleUser } from "@/api/auth";
export default {
  name: "header",

  data() {
    return {
      items: [{ link: "Profil" }],
      user: []
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
    getSingleUser(this.$root.user._id).then(user => {
      this.user = user;
    });
  }
};
</script>

<style scoped>
.align {
  font-family: "Lora", serif;
}

.custom {
  background-color: #20a8d8;
}

.height {
}

img {
  width: 5em;
}
</style>

