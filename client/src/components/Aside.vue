<template>
  <aside class="aside-menu">
    <ul>
      <router-link :to='"/profile/" + user._id' v-for="(user, index) in users" :key="user._id"> <li> {{user.email}} </li></router-link>
    </ul>
  </aside>
</template>

<script>
import ModalEmail from "@/components/ModalEmail";
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
  },

  components: {
    ModalEmail
  }
};
</script>
