<template>
<full></full>
</template>

<script>
import { logout } from "@/api/auth";
import Full from "@/containers/Full";
export default {
  components: { Full },
  data() {
    return {
      navItems: []
    };
  },
  methods: {
    logout() {
      logout(this.$root);
      this.$router.push("/");
    },
    entity() {
      this.$router.push("/entity");
    }
  }
};
</script>
