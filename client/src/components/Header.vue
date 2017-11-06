<template>
  <header class="navbar fixed-top navbar-toggleable-md navbar-light bg-faded height">
    <h3 class="">Menu</h3>
    <button class="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" @click="sidebarToggle" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- <h1 class="align">Esprit Voyages</h1> -->
      <auto-complete class="tall-input" :options="users"   @select="onOptionSelect">
    <template slot="item" scope="option">
      <article class="media">
      <p>
        <strong>{{ option.firstname }}</strong>
        {{ option.lastname }}
        </p>
        <img class="rounded-circle" :src="option.profilePic" width="5%" />
      </article>
    </template>
  </auto-complete>
    <div class="text-xs-center">
    <img class="rounded-circle" :src="user.profilePic" alt="test" />
      <b-dropdown class="right-nav">
        <button class="btn btn-dark" slot="trigger">
        </button>
        <b-dropdown-item @click.prevent="goToProfile($root.user._id)">Profil</b-dropdown-item>
      </b-dropdown>
    </div>
    <button class="navbar-toggler navbar-toggler-right navbar-brand" type="button" @click="asideToggle"><strong>&#9776;</strong></button>
    <h3>Contacts</h3>
  </header>
</template>

<script>
import AutoComplete from "@/components/AutoComplete";
import { logout, getSingleUser, getUsers } from "@/api/auth";
export default {
  components: { AutoComplete },
  name: "header",

  data() {
    return {
      items: [{ link: "Profil" }],
      user: [],
      users: []
    };
  },

  methods: {
    // Autocomplete
    onOptionSelect(option) {
      console.log("Selected option:", option);
    },
    onInput(value) {
      this.isOpen = !!value;
      this.highlightedPosition = 0;
    },
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
    getUsers().then(users => {
      this.users = users;
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
  background-color: #a7abb1;
}

img {
  width: 5em;
}

.tall-input {
  margin: 0 auto;
  position: relative;
  top: 9px;
}
</style>

