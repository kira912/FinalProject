<template>
<div>
  <widgets-admin v-if="admin"></widgets-admin>
  <widgets-users v-else-if="employe"></widgets-users>
     <section>
        <div class="result-search" v-if="selected">
        <p class="content" ><b>Résultat pour votre recherche </b> <br>
          <router-link :to="'/profile/' + selected._id">{{ selected.firstname }} </router-link> </p>
          <img class="rounded-circle" :src="selected.profilePic" v-if="selected.profilePic" alt="test" width="30%" />
        </div>
        <b-field label="Rechercher un utilisateur, entité, billet : ">
            <b-autocomplete
                v-model="name"
                :keep-first="keepFirst"
                :data="filteredDataObj"
                field="firstname"
                @select="option => selected = option"
                @keydown.enter="onHit">
            </b-autocomplete>
        </b-field>
    </section> 
    <br>
    <classement-users :users="users"></classement-users>
</div>
</template>

<script>
import WidgetsAdmin from "@/components/WidgetsAdmin";
import WidgetsUsers from "@/components/WidgetsUsers";
import ClassementUsers from "@/components/ClassementUsers";
import { getSingleUser, getUsers, getEntities, getTickets } from "@/api/auth";
export default {
  components: { WidgetsAdmin, WidgetsUsers, ClassementUsers },
  data() {
    return {
      navItems: [],
      admin: false,
      employe: false,
      keepFirst: false,
      name: "",
      selected: null,
      users: [],
      entities: [],
      tickets: [],
      allData: []
    };
  },
  computed: {
    filteredDataObj() {
      return this.users.filter(option => {
        return (
          option.firstname
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  },

  methods: {
    onHit(user) {
      this.$router.push("/profile/" + user._id);
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

