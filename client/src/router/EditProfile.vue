<template>
  <div class="container">
    <b-form @submit="">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:" label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email" v-model="email" required
                      placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:" label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text" v-model="firstname" required
                      placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Editer</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: ""
    };
  }
};
</script>

<style>

</style>
