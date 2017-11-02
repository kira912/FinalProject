<template>
  <aside class="aside-menu">
    <ul>
      <router-link :to='"/profile/" + user._id' v-for="(user, index) in users" :key="user._id">
        <li> <h3>{{user.firstname}} </h3>
          <img :src="user.profilePic" class="rounded-circle" width="30%"> 
        </li>
      </router-link>
    </ul>
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

<style scoped>
li {
  border: 1px solid black;
  text-align: center;
  margin: 10%;
  background-color: black;
  color: white;
}
</style>
