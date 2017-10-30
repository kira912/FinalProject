<template>
  <div class="row">
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-block">
          <p>Nombres total d'utilisateurs: <strong>{{counterUsers}}</strong> </p>
        </div>
      </div>
    </div><!--/.col-->
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-block">
          <p>Nombres total d'entitées: <strong> {{counterEntities}} </strong></p>
        </div>
      </div>
    </div><!--/.col-->
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-block">
          <p>Total du business enregistré (toutes entités / utilisateurs confondus): <strong> {{totalBusiness}} €</strong></p>
        </div>
      </div>
    </div><!--/.col-->
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-block">
        </div>
      </div>
    </div><!--/.col-->
  </div><!--/.row-->
</template>

<script>
import { getUsers, getEntities } from "@/api/auth";
export default {
  name: "widgetsAdmin",

  data() {
    return {
      entities: [],
      counterUsers: 0,
      counterEntities: 0,
      totalBusiness: 0
    };
  },

  created() {
    getUsers().then(users => {
      users.forEach(user => {
        this.counterUsers++;
        if (user.totalBusiness) {
          this.totalBusiness += user.totalBusiness;
        }
      });
    });
    getEntities().then(entities => {
      this.entities = entities;
      entities.forEach(entity => {
        this.counterEntities++;
        if (entity.totalBusiness) {
          this.totalBusiness += entity.totalBusiness;
        }
      });
    });
  }
};
</script>
