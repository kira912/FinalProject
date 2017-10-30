<template>
  <div>
    <h2>Enregistrement du business</h2>
      <form>
        <div class="col-2">
          <label class="form-check-label">Business a enregistrer pour votre compte</label>
          <input type="number" v-model="totalBusiness" class="form-control">
          <button class="btn btn-primary" @click.prevent="editUser()">Enregistrer</button>
        </div>
      </form>
  </div>
</template>

<script>
import { editUser } from "@/api/auth";
export default {
  data() {
    return {
      totalBusiness: ""
    };
  },

  methods: {
    editUser() {
      editUser(this.$root.user._id, {
        totalBusiness: this.totalBusiness
      }).then(() => {
        this.$router.push("/dashboard");
      });
    }
  }
};
</script>

<style>

</style>
