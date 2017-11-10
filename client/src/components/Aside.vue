<template>
  <aside class="aside-menu">
<!--    <b-list-group>
          <b-list-group-item :to="'/profile/' + user._id" v-for="(user, index) in users" :key="user._id"> <h4>{{user.firstname}} </h4>
          <img :src="user.profilePic" class="rounded-circle" width="30%"> 
        </b-list-group-item>
    </b-list-group> -->
    <div role="tabpanel" aria-hidden="false" aria-expanded="true" class="tab-pane show fade active" id="__BVID__123_" aria-lablelledby="__BVID__123____BV_tab_button__" style="">
      <div class="m-0 py-2 text-muted text-center bg-light text-uppercase callout">
        <small><b>Action à réaliser</b></small>
      </div>
        <hr class="transparent mx-3 my-0"> 
        <div class="m-0 py-3 callout callout-warning"> 
          <div>Meeting with <strong>Lucas</strong>
          </div> 
        </div> 
        <hr class="mx-3 my-0"> 
        <div class="m-0 py-3 callout callout-info">
          <div>Skype with <strong>Megan</strong>
          </div> 
        </div> 
        <hr class="transparent mx-3 my-0"> 
        <div class="m-0 py-2 text-muted text-center bg-light text-uppercase callout"><small><b>Tomorrow</b></small>
        </div> <hr class="transparent mx-3 my-0"> 
        <div class="m-0 py-3 callout callout-danger">
          <div>New UI Project - <strong>deadline</strong>
          </div> 
        </div> 
        <hr class="mx-3 my-0"> 
        <div class="m-0 py-3 callout callout-success">
          <div><strong>#10 Startups.Garden</strong> Meetup
          </div> 
        </div> 
 
    </div>
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
  text-align: center;
  margin: 10%;
  color: white;
  border-radius: 5px;
}
</style>
