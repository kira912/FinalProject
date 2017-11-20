<template>
  <div>
    <form class="form-inline">
      <div class="col-3">
        <label class="col-10 col-form-label">Date du debut de vos congés</label>
        <input class="form-control" type="date" v-model="start">
      </div>
      <div class="col-3">
        <label class="col-9 col-form-label">Date de fin de vos congés</label>
        <input type="date" v-model="end" class="form-control">
      </div>
      <b-button variant="dark" @click="submit()">Envoyé</b-button>
    </form>
    <table class="table">
      <thead class="color">
        <tr>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Satuts</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in vacationList" :key="item._id">
        <tr>
          <td> {{item.start}} </td>
          <td> {{item.end}} </td>
          <td> {{item.status}} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { requestVacation, getVacation } from "@/api/vacations";
export default {
  data() {
    return {
      vacationList: [],
      start: "",
      end: "",
      owner: this.$root.user._id,
      messageError: null
    };
  },
  created() {
    getVacation().then(vacation => {
      vacation.forEach(request => {
        if (request.owner === this.$root.user._id) {
          this.vacationList.push(request);
        }
      });
    });
  },
  methods: {
    submit() {
      this.messageError = null;
      requestVacation({
        start: this.start,
        end: this.end,
        owner: this.owner
      })
        .then(() => {
          this.$router.push("/perso");
        })
        .catch(err => {
          this.messageError = err.response.data.error;
        });
    }
  }
};
</script>

<style>

</style>
