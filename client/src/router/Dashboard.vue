<template>
<div>
  <widgets-admin v-if="admin = !admin"></widgets-admin>
  <widgets-users v-else-if="user = !user"></widgets-users>
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
  created(_id) {
    getSingleUser(_id).then(user => {
      if (user.role === "Admin") {
        console.log("DEBUGG ROLE", user.role);
        this.admin = true;
      } else if (user.role === "Guest") {
        this.user = true;
      }
    });
  }
};
</script>
