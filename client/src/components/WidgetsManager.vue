<template>
  <div class="row">
    <div class="col-6 col-lg-3">
      <div class="card height">
        <div class="card-block p-1 clearfix">
          <i class="fa fa-user bg-primary p-1 font-2xl mr-1 float-left"></i>
          <div class="h5 text-primary mb-0 mt-h">{{counterUsersEntity}}</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Utilisateurs rattaché à votre entité</div>
        </div>
      </div>
    </div><!--/.col-->
    <div class="col-6 col-lg-3">
      <div class="card height">
        <div class="card-block p-1 clearfix">
          <i class="fa fa-user bg-primary p-1 font-2xl mr-1 float-left"></i>
          <div class="h5 text-primary mb-0 mt-h">{{totalBusinessEntity}} €</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Total du business de votre entité</div>
        </div>
      </div>
    </div><!--/.col-->
    <div class="col-6 col-lg-3">
      <div class="card height">
        <div class="card-block p-1 clearfix">
          <i class="fa fa-bell bg-primary p-1 font-2xl mr-1 float-left"></i>
          <div class="h5 text-primary mb-0 mt-h">{{currentUser.totalTicket}}</div>
          <div class="text-muted text-uppercase font-weight-bold font-xs">Total des billets vendu (pour votre compte)</div>
        </div>
      </div>
    </div><!--/.col-->
    <div class="col-6 col-lg-3">
      <div class="card height">
        <div class="card-block p-1 clearfix">
          <i class="fa icon-pie-chart bg-primary p-1 font-2xl mr-1 float-left"></i>
          <div class="h1 text-muted text-right mb-2">
          </div>
          <div class="h5 text-primary mb-0 mt-h">{{currentUser.totalBusiness}} €</div>
          <div class="text-muted text-uppercase font-weight-bold font-xs">Total du business enregistré (pour votre entité)</div>
        </div>
      </div>
    </div><!--/.col-->
  </div>
</template>

<script>
import { getUsers, getSingleUser } from "@/api/auth";
export default {
  data() {
    return {
      currentUser: null,
      counterUsersEntity: 0,
      totalBusinessEntity: 0
    };
  },
  created() {
    getSingleUser(this.$root.user._id).then(user => {
      this.currentUser = user;
    });
    getUsers().then(users => {
      users.forEach(user => {
        if (user.entityAttachment === this.currentUser.entityAttachment) {
          this.counterUsersEntity++;
          this.totalBusinessEntity += user.totalBusiness;
        }
      });
    });
  }
};
</script>

<style>

</style>
