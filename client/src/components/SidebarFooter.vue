<template>
    <button class="button is-dark footer-menu" @click="logout()">Deconnexion</button>
</template>
<script>
import { logout } from "@/api/auth";
export default {
  name: "sidebar-footer",

  methods: {
    logout() {
      logout(this.$root);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.footer-menu {
  border: 1px solid white;
}
</style>

