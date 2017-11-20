<template>
  <div>
    <div v-for="(item, index) in timeline" :key="item._id" class="card">
      <div class="card-block">
        <p class="card-text">Nouvel entité crée <strong> {{item.name}} </strong></p>
        <p class="card-text">Crée le <strong> {{moment(item).format('dddd, MMMM Do YYYY, h:mm:ss a')}} </strong></p>
      </div>
    </div>
  </div>
</template>

<script>
import { getTimelineEntities } from "@/api/timeline";
export default {
  data() {
    return {
      timeline: []
    };
  },

  created() {
    getTimelineEntities().then(timeline => {
      this.timeline = timeline;
    });
  }
};
</script>

<style>

</style>
