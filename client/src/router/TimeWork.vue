<template>
  <div>
      <form class="form-inline">
      <div class="col-3">
        <label for="example-date-input" class="col-10 col-form-label">Date de votre journée</label>
        <input class="form-control" type="date" v-model="timeInfo.dayWorked" id="example-date-input">
      </div>
      <div class="form-group">
        <label for="example-date-input" class="col-9 col-form-label">Heure de début</label>
        <input type="time" v-model="timeInfo.dayWorkedTimeStart" class="form-control">
      </div>
      <div class="col-3">
        <label for="example-date-input" class="col-9 col-form-label">Heure de fin</label>
        <input type="time" v-model="timeInfo.dayWorkedTimeEnd" class="form-control">
      </div>
    <b-button variant="dark" @click="submit()">Valider</b-button>
      </form>
    <br>
          <table class="table">
      <thead class="color">
        <tr>
          <th>Jour travaillés</th>
          <th>Heure de début</th>
          <th>Heure de fin</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in userInfo.dayWorked" :key="index">
        <tr>
          <td> {{userInfo.dayWorked[index]}} </td>
          <td> {{userInfo.dayWorkedTimeStart[index]}} </td>
          <td> {{userInfo.dayWorkedTimeEnd[index]}} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getSingleUser, getTimeWorked, editTimeWorked } from "@/api/auth";
export default {
  data() {
    return {
      counterDays: 0,
      userInfo: [],
      timeInfo: {},
      fields: {
        dayWorked: { label: "Jour travaillés", sortable: true },
        dayWorkedTimeStart: { label: "Heure de début", sortable: true },
        dayWorkedTimeEnd: { label: "Heure de fin", sortable: true }
      }
    };
  },
  created() {
    getTimeWorked(this.$route.params.id).then(infoTime => {
      this.userInfo = infoTime;
      infoTime.dayWorked.forEach(day => {
        this.counterDays++;
      });
    });
  },
  methods: {
    submit() {
      editTimeWorked(this.$route.params.id, this.timeInfo).then(() => {
        this.$router.push("/perso/" + this.$root.user._id + "/time-work");
      });
    }
  }
};
</script>

<style>

</style>
