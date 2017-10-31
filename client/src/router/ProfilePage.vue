<template>
  <div class="d-flex justify-content-center">
    <div class="card" style="width: 20rem;">
  <img class="card-img-top" :src="user.profilePic" alt="pic profile">
  <div class="card-block">
    <h4 class="card-title">Données personnelles</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>Nom prénom: </strong> {{user.firstname}} {{user.lastname}} </li>
    <li class="list-group-item"><strong>Email perso: </strong> {{user.email}} </li>
    <li class="list-group-item"><strong>Téléphone perso: </strong> {{user.telNumber}} </li>
    <li class="list-group-item"><strong>Adresse perso: </strong> {{user.address}}, {{user.codePostal}}, {{user.city}} </li>
  </ul>
  <br>
  <h4 class="card-title">Données Professionnel</h4>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>Email perso: </strong> {{user.professionalEmail}} </li>
    <li class="list-group-item"><strong>Téléphone perso: </strong> {{user.professionalNumber}} </li>
  </ul>
</div>


  </div>
</template>

<script>
import { getSingleUser } from "@/api/auth";
export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    getSingleUser(this.$route.params.id).then(user => {
      if (user) {
        this.user = user;
      }
    });
  }
};
</script>

<style>

</style>
