<template>
<div class="sidebar scroll">
  <ul>
    <li class="item">
      <router-link class="color" to="/dashboard">Acceuil</router-link>
    </li>
    <li class="item">
      <router-link class="color" to="/users">Utilisateurs</router-link>
    </li>
    <li class="item">
      <router-link class="color" to="/entities">Entités</router-link>
    </li>
    <li class="item">
      <router-link class="color" to="/tickets">Billets</router-link>
    </li>
    <li class="item">
      <router-link class="color" to="/human-ressources">Ressources Humaines</router-link>
    </li>
    <li>
      <b-btn v-if="currentUser.role === 'Manager'" v-b-toggle.collapse2 class="m-1 list-group-item list-group-item-action item">Manager</b-btn>
    <b-collapse id="collapse2">
      <b-button type="button" to="/directory-users" class="list-group-item list-group-item-action item-collapse">Annuaire utlisateurs</b-button>
  </b-collapse>
  <sidebar-footer />
    </li>
  </ul>
</div>
</template>
<script>
import SidebarFooter from "./SidebarFooter";
import { getSingleUser } from "@/api/auth";

export default {
  name: "sidebar",
  data() {
    return {
      currentUser: null
    };
  },

  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => {}
    }
  },
  components: {
    SidebarFooter
  },
  methods: {
    handleClick(e) {
      e.preventDefault();
      e.target.parentElement.classList.toggle("open");
    }
  },
  created() {
    getSingleUser(this.$root.user._id).then(user => {
      this.currentUser = user;
    });
  }
};
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}

.scroll {
  overflow-y: auto;
}

ul {
  list-style-type: none;
  width: 15.7em;
  padding: 0;
  border-radius: 3px;
}
ul li .color {
  display: block;
  text-align: center;
  color: white;
  text-decoration: none;
  padding: 5% 0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: all 0.3s;
}
ul li:first-child a {
  border-radius: 3px 0 0 3px;
}
ul li:last-child a {
  border-radius: 0 3px 3px 0;
}

ul li a:hover,
ul li a:focus {
  background: grey;
}

ul li a:active {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3) inset;
}
.item {
  text-align: center;
  background-color: #444d58;
  color: white;
  padding: 1em 0;
  text-decoration: none;
}

.item-collapse {
  text-align: left;
  background-color: #444d58;
  color: white;
}
</style>