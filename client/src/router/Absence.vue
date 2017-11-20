<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Date de l'absence</label>
            <div class="col-6">
              <input class="form-control" type="date" v-model="timeInfo.dayAbsence">
            </div>
          </div>
        </div>
        <div class="col">
          <h3>Matin</h3>
          <div class="form-group">
            <label>Heure de début(matinée)</label>
            <div class="col-4">
              <input type="time" v-model="timeInfo.dayAbsenceTimeStartAM" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label>Heure de fin(matinée)</label>
            <div class="col-4">
              <input type="time" v-model="timeInfo.dayAbsenceTimeEndAM" class="form-control">
            </div>
          </div>
        </div>
        <div class="col">
          <h3>Après-midi</h3>
          <div class="form-group">
            <label>Heure de début(après-midi)</label>
            <div class="col-4">
              <input type="time" v-model="timeInfo.dayAbsenceTimeStartPM" class="form-control">
            </div>
          </div>
          <div class="form-group">
              <label>Heure de fin(après-midi)</label>
            <div class="col-4">
              <input type="time" v-model="timeInfo.dayAbsenceTimeEndPM" class="form-control">
            </div>
          </div>
        </div>
      </div>
      <b-button variant="dark" @click="submit()">Valider</b-button>
    </form>
    <br>
    <table class="table">
      <thead class="color">
        <tr>
          <th>Jour absent</th>
          <th>Matin</th>
          <th>Matin</th>
          <th>Après-midi</th>
          <th>Après-midi</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in userInfo.dayAbsence" :key="index">
        <tr>
          <td> {{userInfo.dayAbsence[index]}} </td>
          <td> {{userInfo.dayAbsenceTimeStartAM[index]}} </td>
          <td> {{userInfo.dayAbsenceTimeEndAM[index]}} </td>
          <td> {{userInfo.dayAbsenceTimeStartPM[index]}} </td>
          <td> {{userInfo.dayAbsenceTimeEndPM[index]}} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getAbsences, newAbsence } from "@/api/users";
export default {
  data() {
    return {
      counterDays: 0,
      userInfo: [],
      timeInfo: {}
    };
  },
  created() {
    getAbsences(this.$route.params.id).then(infoTime => {
      this.userInfo = infoTime;
      infoTime.dayAbsence.forEach(day => {
        this.counterDays++;
      });
    });
  },
  methods: {
    submit() {
      newAbsence(this.$route.params.id, this.timeInfo).then(() => {
        this.$router.push("/perso/" + this.$root.user._id + "/absence");
      });
    }
  }
};
</script>

<style>

</style>
