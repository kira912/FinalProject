<template>
  <div>
    <form class="form-inline">
      <div class="col-3">
        <label for="example-date-input" class="col-10 col-form-label">Date du debut de vos congés</label>
        <input class="form-control" type="date" v-model="start" id="example-date-input">
      </div>
      <div class="col-3">
        <label for="example-date-input" class="col-9 col-form-label">Date de fin de vos congés</label>
        <input type="date" v-model="end" class="form-control">
      </div>
    <b-button variant="dark" @click="submit()">Envoyé</b-button>
      </form>
  </div>
</template>

<script>
import { requestVacation } from "@/api/auth";
export default {
  data() {
    return {
      start: "",
      end: "",
      owner: this.$root.user._id,
      messageError: null
    };
  },
  methods: {
    submit() {
      this.messageError = null;
      requestVacation(this.$route.params.id, {
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
