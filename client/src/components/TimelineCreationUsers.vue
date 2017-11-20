<template>
  <div class="scroll">
    <div v-for="(item, index) in timeline" :key="item._id" class="card">
      <div class="card-block">
        <p class="card-text">Nouvel utilisateur <strong> {{item.firstname}} </strong></p>
        <p class="card-text">Crée le <strong> {{moment(item).format('dddd, MMMM Do YYYY, h:mm:ss a')}} </strong></p>
        <b-button variant="dark" :to='"/profile/" + item._id'>Voir le profil</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getTimelineUsers } from "@/api/timeline";
export default {
  data() {
    return {
      timeline: []
    };
  },

  created() {
    getTimelineUsers().then(timeline => {
      this.timeline = timeline;
    });
  }
};
</script>

<style>

</style>
