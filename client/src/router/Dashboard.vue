<template>
<div>
  <widgets-admin v-if="admin"></widgets-admin>
  <widgets-users v-else-if="employe"></widgets-users>
    <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Find a name">
            <b-autocomplete
                v-model="name"
                placeholder="e.g. Anne"
                :keep-first="keepFirst"
                :data="filteredDataObj"
                field="firstname"
                @select="option => selected = option">
            </b-autocomplete>
        </b-field>
    </section>
</div>
</template>

<script>
import WidgetsAdmin from "@/components/WidgetsAdmin";
import WidgetsUsers from "@/components/WidgetsUsers";
import { getSingleUser, getUsers } from "@/api/auth";
export default {
  components: { WidgetsAdmin, WidgetsUsers },
  data() {
    return {
      navItems: [],
      admin: false,
      employe: true,
      keepFirst: false,
      name: "",
      selected: null,
      users: []
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
  created() {
    getSingleUser(this.$root.user._id).then(user => {
      if (user.role === "Admin") {
        this.admin = true;
      } else if (user.role === "Vendeur") {
        this.employe = true;
      }
    });
    getUsers().then(users => {
      this.users = users;
    });
  }
};
</script>
