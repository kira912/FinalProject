<template>
  <header class="navbar fixed-top navbar-toggleable-md navbar-light bg-faded height">
    <div class="d-flex align-items-start">
    <h3 class="">Menu</h3>
    <button class="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" @click="sidebarToggle" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
      <auto-complete class="tall-input mx-auto" :options="users"   @select="onOptionSelect">
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
  <div class="d-flex align-items-start">
    <img @click="goToProfile(user._id)" class="rounded-circle" :src="user.profilePic" alt="test" />
    <b-button @click="goToEspacePerso(user._id)">Espace personnel</b-button>
    <button class="navbar-toggler navbar-toggler-right navbar-brand" type="button" @click="asideToggle"><strong>&#9776;</strong></button>
    <h3>Timeline</h3>
  </div>
  </header>
</template>

<script>
import AutoComplete from "@/components/AutoComplete";
import { getSingleUser, getUsers } from "@/api/auth";
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
    mobileSidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-mobile-show");
    },
    asideToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("aside-menu-hidden");
    },
    goToEspacePerso(_id) {
      this.$router.push("/perso");
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
  background-color: white;
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

