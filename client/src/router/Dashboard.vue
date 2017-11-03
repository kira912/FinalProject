<template>
<div>
  <widgets-admin v-if="admin"></widgets-admin>
  <widgets-users v-else-if="employe"></widgets-users>
  <auto-complete :options="users"   @select="onOptionSelect">
    <template slot="item" scope="option">
      <article class="media">
         <router-link :to="'/profile/' + option._id">
      <p>
        <strong>{{ option.firstname }}</strong>
        {{ option.lastname }}
        </p>
        <img class="rounded-circle" :src="option.profilePic" width="20%" />
         </router-link>
      </article>
    </template>
  </auto-complete>


    <classement-users :users="users"></classement-users>
</div>
</template>

<script>
import AutoComplete from "@/components/AutoComplete";
import WidgetsAdmin from "@/components/WidgetsAdmin";
import WidgetsUsers from "@/components/WidgetsUsers";
import ClassementUsers from "@/components/ClassementUsers";
import { getSingleUser, getUsers, getEntities, getTickets } from "@/api/auth";
export default {
  components: { WidgetsAdmin, WidgetsUsers, ClassementUsers, AutoComplete },
  data() {
    return {
      navItems: [],
      admin: false,
      employe: false,
      keepFirst: false,
      users: [],
      entities: [],
      tickets: []
    };
  },

  methods: {
    onOptionSelect(option) {
      console.log("Selected option:", option);
    },
    onInput(value) {
      this.isOpen = !!value;
      this.highlightedPosition = 0;
    }
  },
  created() {
    getSingleUser(this.$root.user._id).then(user => {
      if (user.role === "Admin") {
        this.admin = true;
      } else if (user.role === "Vendeur" || user.role === "Directeur") {
        this.employe = true;
      }
    });
    getUsers().then(users => {
      this.users = users;
    });
    getEntities().then(entities => {
      this.entities = entities;
    });
    getTickets().then(tickets => {
      this.tickets = tickets;
    });
  }
};
</script>

<style scoped>
.result-search {
  border: 1px solid black;
  text-align: center;
  background-color: #192b41;
  color: white;
  width: 20%;
  border-radius: 5px;
}
</style>