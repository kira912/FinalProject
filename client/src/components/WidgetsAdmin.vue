<template>
<div class="row">
  <div class="col-6 col-lg-3">
    <div class="card height">
      <div class="card-block p-1 clearfix max">
        <i class="fa fa-cogs bg-primary p-1 font-2xl mr-1 float-left"></i>
        <div class="h5 text-primary mb-0 mt-h">{{counterUsers}}</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Utilisateurs enregistrés</div>
      </div>
    </div>
  </div><!--/.col-->

  <div class="col-6 col-lg-3">
    <div class="card height">
      <div class="card-block p-1 clearfix">
        <i class="fa fa-laptop bg-info p-1 font-2xl mr-1 float-left"></i>
        <div class="h5 text-info mb-0 mt-h">{{counterEntities}}</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Nombres total d'entitées</div>
      </div>
    </div>
  </div><!--/.col-->

  <div class="col-6 col-lg-3">
    <div class="card height">
      <div class="card-block p-1 clearfix">
        <i class="fa icon-pie-chart bg-info p-1 font-2xl mr-1 float-left"></i>
      <div class="h1 text-muted text-right mb-2">
      </div>
        <div class="h5 text-warning mb-0 mt-h">{{totalBusiness}} €</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Total du business enregistré (toutes entités / utilisateurs confondus)</div>
        
      </div>
    </div>
  </div><!--/.col-->

  <div class="col-6 col-lg-3">
    <div class="card height">
      <div class="card-block p-1 clearfix">
        <i class="fa fa-bell bg-danger p-1 font-2xl mr-1 float-left"></i>
        <div class="h5 text-danger mb-0 mt-h">{{totalTicket}}</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Voyageurs enregistrés</div>
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
      counterUsers: 0,
      counterEntities: 0,
      totalBusiness: 0,
      totalTicket: 0
    };
  },

  created() {
    getUsers().then(users => {
      users.forEach(user => {
        this.counterUsers++;
        if (user.totalTicket) {
          this.totalTicket += user.totalTicket;
        }
        if (user.totalBusiness) {
          this.totalBusiness += user.totalBusiness;
        }
      });
    });
    getEntities().then(entities => {
      this.entities = entities;
      entities.forEach(entity => {
        this.counterEntities++;
        if (entity.totalTicket) {
          this.totalTicket += entity.totalTicket;
        }
        if (entity.totalBusiness) {
          this.totalBusiness += entity.totalBusiness;
        }
      });
    });
  }
};
</script>

<style scoped>
.max {
}

.height {
  border: 1px solid black;
  padding: 10%;
  background-color: #5f686b;
}
</style>

