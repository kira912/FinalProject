<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 col-lg-3">
        <div class="card height">
          <div class="card-block p-1 clearfix">
            <i class="fa fa-user bg-primary p-1 font-2xl mr-1 float-left"></i>
            <div class="h5 text-primary mb-0 mt-h">{{currentUser.paidHolidaysIn}}</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Total congés payés acquis</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-lg-3">
        <div class="card height">
          <div class="card-block p-1 clearfix">
            <i class="fa fa-user bg-primary p-1 font-2xl mr-1 float-left"></i>
            <div class="h5 text-primary mb-0 mt-h">{{currentUser.paidHolidaysOut}}</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Total congés payés utilisés</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSingleUser } from "@/api/auth";
export default {
  data() {
    return {
      currentUser: []
    };
  },

  created() {
    getSingleUser(this.$root.user._id).then(user => {
      this.currentUser = user;
    });
  }
};
</script>

<style>

</style>
