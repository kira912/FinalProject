<template>
  <aside class="aside-menu">
    <p v-for="(user, index) in users" :key="user._id"> {{user.email}} </p>
  </aside>
</template>

<script>
import { getUsers } from "@/api/auth";
export default {
  name: "aside",
  data() {
    return {
      users: []
    };
  },
  created() {
    getUsers().then(users => {
      this.users = users;
    });
  }
};
</script>
