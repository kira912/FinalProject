<template>
  <aside class="aside-menu">
   <b-list-group>
          <b-list-group-item :to="'/profile/' + user._id" v-for="(user, index) in users" :key="user._id"> <h4>{{user.firstname}} </h4>
          <img :src="user.profilePic" class="rounded-circle" width="30%"> 
        </b-list-group-item>
    </b-list-group>
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
  },

  methods: {
    goToProfile(_id) {
      this.$router.push("/profile/" + _id);
    }
  }
};
</script>

<style scoped>
li {
  border: 1px solid black;
  text-align: center;
  margin: 10%;
  background-color: #192b41;
  color: white;
  border-radius: 5px;
}
</style>
