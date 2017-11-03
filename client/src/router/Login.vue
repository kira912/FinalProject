<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card-group mb-0">
            <div class="card p-4">
              <div class="card-body">
                <div v-if="error" class="alert alert-danger" role="alert">
                  {{error}}
                </div>
                <h1>Login</h1>
                <p class="text-muted">Connecté vous avec vos identifiants</p>
                <form @submit.prevent='login'>
                  <div class="input-group mb-3">
                    <span class="input-group-addon"><i class="icon-user"></i></span>
                    <input type="text" class="form-control" v-model='username' placeholder="example@gmail.com">
                  </div>
                  <div class="input-group mb-4">
                    <span class="input-group-addon"><i class="icon-lock"></i></span>
                    <input type="password" class="form-control" v-model='password' placeholder="Password">
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <button class="btn btn-dark">Connexion</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { login } from "@/api/auth";

export default {
  data() {
    return {
      error: null,
      username: "",
      password: ""
    };
  },

  methods: {
    login() {
      this.error = null;
      login(this.username, this.password, this.$root)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(err => {
          this.error = err.response.data.error;
          console.error("erreur Log in", err);
        });
    }
  }
};
</script>

<style scoped>
a {
  color: white;
}
</style>
