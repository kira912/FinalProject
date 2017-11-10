<template>
  <div class="container">
    <widgetsrh-manager v-if="manager"></widgetsrh-manager>
    <widgetsrh-users v-else-if="employe"></widgetsrh-users>
    <users-directories></users-directories>
  </div>  
</template>

<script>
import WidgetsrhManager from "@/components/WidgetsrhManager";
import WidgetsrhUsers from "@/components/WidgetsrhUsers";
import UsersDirectories from "@/components/UsersDirectories";
import { getSingleUser } from "@/api/auth";
export default {
  components: {
    WidgetsrhManager,
    WidgetsrhUsers,
    UsersDirectories
  },

  data() {
    return {
      manager: false,
      employe: false
    };
  },

  created() {
    getSingleUser(this.$root.user._id).then(user => {
      if (user.role === "Manager") {
        this.manager = true;
      } else if (user.role === "Vendeur") {
        this.employe = true;
      }
    });
  }
};
</script>

<style>

</style>
