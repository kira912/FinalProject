<template>
  <div class="footer-menu">
    <button class="btn btn-dark btn-footer" @click="logout()">Deconnexion</button>
  </div>    
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
.btn-footer {
  border: 1px solid white;
}

.footer-menu {
  text-align: center;
  margin: 20% auto;
}
</style>

