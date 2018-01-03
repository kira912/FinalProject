<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Date de la journée</label>
            <div class="col-6">
              <input class="form-control" type="date" v-model="timeInfo.dayWorked">
            </div>
          </div>
        </div>
        <div class="col">
          <h3>Matin</h3>
          <div class="form-group">
            <label for="exampleSelect1">Heure de début(matinée)</label>
            <div class="col-4">
              <input type="time" id="exampleSelect1" v-model="timeInfo.dayWorkedTimeStartAM" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label>Heure de fin(matinée)</label>
            <div class="col-4">
              <input type="time" v-model="timeInfo.dayWorkedTimeEndAM" class="form-control">
            </div>
          </div>
        </div>
        <div class="col">
          <h3>Après-midi</h3>
          <div class="form-group">
            <label>Heure de début(après-midi)</label>
            <div class="col-4">
              <input type="time" v-model="timeInfo.dayWorkedTimeStartPM" class="form-control">
            </div>
          </div>
          <div class="form-group">
              <label>Heure de fin(après-midi)</label>
            <div class="col-4">
              <input type="time" v-model="timeInfo.dayWorkedTimeEndPM" class="form-control">
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
          <th>Index</th>
          <th>Jour travaillé</th>
          <th>Matin</th>
          <th>Matin</th>
          <th>Après-midi</th>
          <th>Après-midi</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in userInfo.dayWorked" :key="index">
        <tr>
          <td> {{index + 1}} </td>
          <p v-if="index % 7 === 0"> {{counterWeeks++}} </p>
          <td> {{userInfo.dayWorked[index]}} </td>
          <td> {{userInfo.dayWorkedTimeStartAM[index]}} </td>
          <td> {{userInfo.dayWorkedTimeEndAM[index]}} </td>
          <td> {{userInfo.dayWorkedTimeStartPM[index]}} </td>
          <td> {{userInfo.dayWorkedTimeEndPM[index]}} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getTimeWorked, editTimeWorked } from "@/api/users";
export default {
  data() {
    return {
      counterDays: 0,
      counterWeeks: 0,
      userInfo: [],
      timeInfo: {}
    };
  },
  created() {
    getTimeWorked(this.$route.params.id).then(infoTime => {
      // debugger;
      this.userInfo = infoTime;
      infoTime.dayWorked.forEach(day => {
        this.counterDays++;
      });
    });
  },
  methods: {
    submit() {
      editTimeWorked(this.$route.params.id, this.timeInfo).then(() => {});
    }
  }
};
</script>

<style>

</style>
