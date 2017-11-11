<template>
  <aside class="aside-menu scroll">
<!--    <b-list-group>
          <b-list-group-item :to="'/profile/' + user._id" v-for="(user, index) in users" :key="user._id"> <h4>{{user.firstname}} </h4>
          <img :src="user.profilePic" class="rounded-circle" width="30%"> 
        </b-list-group-item>
    </b-list-group> -->
  <div v-for="(item, index) in timeline" :key="item._id" class="card">
  <div class="card-block">
    <p class="card-text">Nouvel utilisateur <strong> {{item.firstname}} </strong></p>
    <p class="card-text">Crée le <strong> {{moment(item).format('dddd, MMMM Do YYYY, h:mm:ss a')}} </strong></p>
    <b-button :to='"/profile/" + item._id'>Voir le profil</b-button>
  </div>
</div>
  </aside>
</template>

<script>
import { getUsers, getTimeline } from "@/api/auth";
export default {
  name: "aside",
  data() {
    return {
      users: [],
      timeline: []
    };
  },
  created() {
    getUsers().then(users => {
      this.users = users;
    });
    getTimeline().then(timeline => {
      this.timeline = timeline;
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
.scroll {
  overflow-y: auto;
}
</style>
