<template>
  <div class="row">
    <div class="col-sm-6 col-lg-3">
      <div class="card color">
        <div class="card-block">
          <p>Total du business enregistré (total de l'utilisateurs) : <strong> {{totalBusinessUser}} €</strong></p>
          <p>Total du business enregistré (total de l'entité) : <strong> {{totalBusinessEntity}} €</strong></p>
        </div>
      </div>
    </div><!--/.col-->

    <div class="col-sm-6 col-lg-3">
      <div class="card color">
        <div class="card-block">
          <p>Total des billets vendu pour votre compte : <strong> {{totalTicket}} </strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSingleUser, getUsers, getTickets } from "@/api/auth";
export default {
  name: "widgetsusers",

  data() {
    return {
      currentUser: [],
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
      users.forEach(user => {
        if (this.currentUser.entityAttachment === user.entityAttachment) {
          this.totalBusinessEntity += user.totalBusiness;
        }
      });
    });
  }
};
</script>

<style>
.color {
  background-color: #9b9591;
  border: 1px solid black;
}

p {
  color: white;
}
</style>
