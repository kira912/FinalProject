<template>
<div class="container-fluid">
  <h3>Enregistrement billet vendu</h3>
  <form @submit.prevent='newTicket'>
    <div class="form-group">
      <label class="col-2 col-form-label">Départ: </label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="start">
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
        <input class="form-control" type="date" v-model="date">
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
import { newTicket, getSingleUser, editUserTotalTicket } from "@/api/auth";
export default {
  data() {
    return {
      user: null,
      start: "",
      end: "",
      price: "",
      date: "",
      category: "",
      client: "",
      seller: this.$root.user._id,
      totalTicket: 1
    };
  },

  created() {
    getSingleUser(this.$root.user._id).then(user => {
      this.user = user;
    });
  },

  methods: {
    newTicket() {
      newTicket({
        start: this.start,
        end: this.end,
        price: this.price,
        date: this.date,
        category: this.category,
        client: this.client,
        seller: this.seller
      });

      editUserTotalTicket(this.$root.user._id, {
        totalTicket: this.totalTicket
      }).then(() => {
        this.$router.push("/tickets");
      });

      /*      editUser(this.$root.user._id, this.user.totalTicket++).then(() => {
        console.log("debugg", this.user.totalTicket);
        debugger;
        this.$router.push("/tickets");
      }); */
    }
  }
};
</script>

<style>

</style>
