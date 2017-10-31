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
import { getSingleUser, getUsers } from "@/api/auth";
export default {
  name: "widgetsusers",

  data() {
    return {
      totalBusinessUser: 0,
      totalBusinessEntity: 0
    };
  },

  created() {
    getSingleUser(this.$root.user._id).then(user => {
      if (user.totalBusiness) {
        this.totalBusinessUser += user.totalBusiness;
      }
    });
    getUsers().then(users => {
      // debugger;
      users.forEach(user => {
        if (user.totalBusiness) {
          this.totalBusinessEntity += user.totalBusiness;
        }
      });
    });
  }
};
</script>

<style>

</style>
