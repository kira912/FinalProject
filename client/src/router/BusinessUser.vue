<template>
  <div>
    <h2>Enregistrement du business</h2>
      <form>
        <div class="col-2">
          <label class="form-check-label">Business a enregistrer pour votre compte</label>
          <input type="number" v-model="totalBusiness" class="form-control">
          <button class="button is-primary" @click.prevent="editBusiness()">Enregistrer</button>
        </div>
      </form>
  </div>
</template>

<script>
import { editUserBusiness } from "@/api/auth";
export default {
  data() {
    return {
      totalBusiness: ""
    };
  },

  methods: {
    editBusiness() {
      editUserBusiness(this.$root.user._id, {
        totalBusiness: this.totalBusiness
      }).then(() => {
        this.$router.push("/dashboard");
      });
    }
  }
};
</script>

