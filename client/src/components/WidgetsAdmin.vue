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
      users: [],
      entities: [],
      counterUsers: 0,
      counterEntities: 0
    };
  },

  created() {
    getUsers().then(users => {
      this.users = users;
      users.forEach(user => {
        this.counterUsers++;
      });
    });
    getEntities().then(entities => {
      this.entities = entities;
      entities.forEach(entity => {
        this.counterEntities++;
      });
    });
  }
};
</script>

<style>

</style>
