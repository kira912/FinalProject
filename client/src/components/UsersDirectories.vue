<template>
  <b-table striped hover :items="users" :fields="fields"></b-table>
</template>

<script>
import { getUsers } from "@/api/users";
export default {
  data() {
    return {
      users: [],
      fields: {
        firstname: {
          label: "Prénom",
          sortable: true
        },
        lastname: {
          label: "Nom de famille",
          sortable: true
        },
        city: {
          label: "Ville",
          sortable: true
        }
      }
    };
  },

  created() {
    getUsers().then(users => {
      this.users = users;
    });
  }
};
</script>

<style>

</style>
