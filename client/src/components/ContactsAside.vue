<template>
  <div>
    <div class="row" v-for="(user, index) in users" :key="user._id">
      <img class="test" :src="user.profilePic" />
      <p> {{user.firstname}} {{user.lastname}} </p>
    </div>
  </div>
</template>

<script>
import { getUsers } from "@/api/users";
export default {
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

<style>
.test {
  border-radius: 50%;
  width: 4em;
  height: 4em;
  margin-right: 1em;
}
</style>
