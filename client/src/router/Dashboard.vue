<template>
<div>
  <widgets-admin v-if="admin"></widgets-admin>
  <widgets-users v-else-if="user"></widgets-users>
</div>
</template>

<script>
import WidgetsAdmin from "@/components/WidgetsAdmin";
import WidgetsUsers from "@/components/WidgetsUsers";
import { logout, getSingleUser } from "@/api/auth";
export default {
  components: { WidgetsAdmin, WidgetsUsers },
  data() {
    return {
      navItems: [],
      admin: false,
      user: false
    };
  },
  methods: {
    logout() {
      logout(this.$root);
      this.$router.push("/");
    }
  },
  created() {
    getSingleUser(this.$root.user._id).then(user => {
      if (user.role === "Admin") {
        this.admin = true;
      }
      if (user.role === "Vendeur") {
        this.user = true;
      }
    });
  }
};
</script>
