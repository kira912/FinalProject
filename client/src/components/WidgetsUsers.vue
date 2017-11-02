<template>
    <div class="row">
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-block">
          <p>Total du business enregistré (total de l'utilisateurs): <strong> {{totalBusinessUser}} €</strong></p>
          <p>Total du business enregistré (total de l'entité): <strong> {{totalBusinessEntity}} €</strong></p>
        </div>
      </div>
    </div><!--/.col-->

    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-block">
          <p>Total des billets vendu pour votre compte: <strong> {{totalTicket}} </strong></p>
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
import { getSingleUser, getUsers, getTickets } from "@/api/auth";
export default {
  name: "widgetsusers",

  data() {
    return {
      currentUser: null,
      totalBusinessUser: 0,
      totalBusinessEntity: 0,
      totalTicket: 0
    };
  },

  created() {
    getSingleUser(this.$root.user._id).then(user => {
      if (user.totalBusiness) {
        this.currentUser = user;
        this.totalBusinessUser += user.totalBusiness;
        this.totalTicket += user.totalTicket;
      }
    });
    getUsers().then(users => {
      // debugger;
      users.forEach(user => {
        if (user.entityAttachment === this.currentUser.entityAttachment) {
          this.totalBusinessEntity += user.totalBusiness;
        }
      });
    });
    /*     getTickets().then(ticket => {
      ticket.forEach(ticket => {
        this.totalTicket++;
      });
    }); */
  }
};
</script>

<style>

</style>
