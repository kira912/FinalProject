<template>
<div>
  <widgets-admin v-if="admin"></widgets-admin>
  <widgets-users v-else-if="employe"></widgets-users>
     <section>
        <p class="content" v-if="selected"><b>Résultat pour votre recherche </b> <br>
         <router-link :to="'/profile/' + selected._id">{{ selected.firstname }} </router-link> </p>
        <b-field label="Chercher un utilisateur, entités, billet">
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
      tickets: []
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
