<template>
  <div>
    <div  v-for="(item, index) in timeline" :key="item._id" class="card">
      <div class="card-block">
        <p class="card-text">Nouveau vendu par <strong> {{item.seller}} </strong></p>
        <p class="card-text">Crée le <strong> {{moment(item.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')}} </strong></p>
      </div>
    </div>
  </div>
</template>

<script>
import { getTimelineTickets } from "@/api/auth";
export default {
  data() {
    return {
      timeline: []
    };
  },

  created() {
    getTimelineTickets().then(timeline => {
      this.timeline = timeline;
    });
  }
};
</script>

