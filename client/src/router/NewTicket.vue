<template>
<div class="container-fluid">
  <h3>Enregistrement billet vendu</h3>
  <form @submit.prevent='newTicket'>
    <div class="form-group">
      <label class="col-2 col-form-label">Départ: </label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="depart">
      </div>
    </div>

    <div class="form-group">
      <label class="col-2 col-form-label">Arrivée: </label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="end">
      </div>
    </div>

    <div class="form-group">
      <label class="col-2 col-form-label">Prix: </label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="price">
      </div>
    </div>  

    <div class="form-group">
      <label class="col-2 col-form-label">Date: </label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="date">
      </div>
    </div>

      <div class="form-group">
      <label class="col-2 col-form-label">Catégorie: </label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="category">
      </div>
    </div> 
    
      <div class="form-group">
      <label class="col-2 col-form-label">Client: </label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="client">
      </div>
    </div>
    <button type="button" @click.prevent="newTicket" class="btn btn-primary">Créer</button>
  </form>
  </div>
</template>

<script>
import { newTicket } from "@/api/auth";
export default {
  data() {
    return {
      depart: "",
      end: "",
      price: "",
      date: "",
      category: "",
      client: ""
    };
  },

  methods: {
    newTicket() {
      newTicket({
        depart: this.depart,
        end: this.end,
        price: this.price,
        date: this.date,
        category: this.category,
        client: this.client
      }).then(() => {
        this.$router.push("/tickets");
      });
    }
  }
};
</script>

<style>

</style>
