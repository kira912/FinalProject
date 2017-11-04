<template>
<div class="row gt">
  <div class="col-6 col-lg-3">
    <div class="card height">
      <div class="card-block p-1 clearfix">
        <i class="fa fa-cogs bg-info p-1 font-2xl mr-1 float-left"></i>
        <div class="h5 text-warning mb-0 mt-h">{{totalBusinessUser}} €</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Total du business enregistré (total de votre compte)</div>
      </div>
    </div>
  </div><!--/.col-->

  <div class="col-6 col-lg-3">
    <div class="card height">
      <div class="card-block p-1 clearfix">
        <i class="fa icon-pie-chart bg-info p-1 font-2xl mr-1 float-left"></i>
      <div class="h1 text-muted text-right mb-2">
      </div>
        <div class="h5 text-warning mb-0 mt-h">{{totalBusinessEntity}} €</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Total du business enregistré (pour votre entité)</div>
      </div>
    </div>
  </div><!--/.col-->

  <div class="col-6 col-lg-3">
    <div class="card height">
      <div class="card-block p-1 clearfix">
        <i class="fa fa-bell bg-danger p-1 font-2xl mr-1 float-left"></i>
        <div class="h5 text-warning mb-0 mt-h">{{currentUser.totalTicket}}</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Total des billets vendu (pour votre compte)</div>
      </div>
    </div>
  </div><!--/.col-->
</div><!--/.row-->
</template>

<script>
import { getSingleUser, getUsers } from "@/api/auth";
export default {
  name: "widgetsusers",

  data() {
    return {
      currentUser: [],
      totalBusinessUser: 0,
      totalBusinessEntity: 0
    };
  },

  created() {
    getSingleUser(this.$root.user._id).then(user => {
      this.currentUser = user;
      if (user.totalBusiness) {
        this.totalBusinessUser += user.totalBusiness;
      }
    });
    getUsers().then(users => {
      users.forEach(user => {
        if (this.currentUser.entityAttachment === user.entityAttachment) {
          this.totalBusinessEntity += user.totalBusiness;
        }
      });
    });
  }
};
</script>


<style scoped>
.height {
  border: 3px solid black;
  padding: 10%;
  background-color: #5f686b;
}
</style>