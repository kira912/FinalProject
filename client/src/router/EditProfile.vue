<template>
  <div class="container">
    <b-form @submit="">
      <b-form-group id="exampleInputGroup2"
                    label="Prénom" label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text" v-model="profileInfo.firstname" 
        ></b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Nom de famille" label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text" v-model="profileInfo.lastname">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Date de naissance" label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="date" v-model="profileInfo.birthDate">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Email" label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email" v-model="profileInfo.email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Mot de passe" label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="password" v-model="profileInfo.password">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Adresse" label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text" v-model="profileInfo.address">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Code postal" label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text" v-model="profileInfo.codePostal">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Ville" label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text" v-model="profileInfo.city">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Email professionnel" label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email" v-model="profileInfo.professionalEmail">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Numéro professionnel" label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text" v-model="profileInfo.professionalNumber">
        </b-form-input>
      </b-form-group>
      <b-button @click="editProfile()" variant="primary">Editer</b-button>
    </b-form>
  </div>
</template>

<script>
import { editProfile } from "@/api/users";
export default {
  data() {
    return {
      profileInfo: {}
    };
  },
  methods: {
    editProfile() {
      editProfile(this.$root.user._id, this.profileInfo).then(() => {
        this.$router.push("/perso");
      });
    }
  }
};
</script>

<style>

</style>
