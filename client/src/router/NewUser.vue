<template>
  <div>
    <div class="div-center">
     <div v-if="messageError" class="alert alert-danger" role="alert">
        {{messageError.message}}
      </div> 
      <form @submit.prevent="submit">
        <h2>Données personnelles</h2>
          <fieldset class="form-group">
            <div class="form-check">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" v-model="civility" name="optionsRadios" value="option1">
                Madame
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" v-model="civility" name="optionsRadios" value="option2">
                Monsieur
              </label>
            </div>
          </fieldset>

          <div class="form-group">
            <label for="lastName" class="col-2 col-form-label">Nom de famille : </label>
            <div class="col-10">
              <input class="form-control" type="text" v-model="lastname">
            </div>
          </div>

          <div class="form-group">
            <label for="name" class="col-2 col-form-label">Prénom : </label>
            <div class="col-10">
              <input class="form-control" type="text" v-model="firstname">
            </div>
          </div>

          <div class="form-group">
            <label for="birth" class="col-2 col-form-label">Date de naissance : </label>
            <div class="col-10">
              <input class="form-control" type="date" v-model="birthDate">
            </div>
          </div>

          <div class="form-group">
            <label for="enseigne" class="col-2 col-form-label">Téléphone : </label>
            <div class="col-10">
              <input class="form-control" type="text" v-model="telNumber">
            </div>
          </div>

          <div class="form-group">
            <label for="enseigne" class="col-2 col-form-label">Email : (Champs obligatoire) </label>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
            <div class="input-group-addon">@</div>
              <input type="email" class="form-control email" v-model="email">
            </div>
          </div>

          <div class="form-inline">
            <label for="city" class="col-2 col-form-label">Adresse : </label>
            <div class="col-10">
              <input type="text" v-model="address" class="form-control">
            </div>  
            <label for="postal" class="col-2 col-form-label">Code Postal : </label>
            <div class="col-10">
              <input class="form-control" type="text" v-model="codePostal">
            </div>  
            <label for="city" class="col-2 col-form-label">Ville : </label>
            <div class="col-10">
              <input class="form-control" type="text" v-model="city">
            </div>  
          </div>

          <div class="form-group">
            <label for="email" class="col-2 col-form-label">Pays : </label>
            <div class="col-10">
              <input class="form-control" v-model="country" type="email">
            </div>
          </div>
          <br>
        <div class="col-sm">
          <h2>Données professionnelles</h2>
          
          <div class="form-group">
            <label for="entity" class="col-2 col-form-label">Entité de rattachement : </label>
            <div class="col-10">
              <input class="form-control" type="text" v-model="entityAttachment">
            </div>
          </div>

          <div class="form-group">
            <label for="function" class="col-2 col-form-label">Fonction (emploi) : </label>
            <div class="col-10">
              <input class="form-control" type="text" v-model="functionJob">
            </div> 
          </div>

          <div class="form-group">
            <label for="contrat" class="col-2 col-form-label">Contrat de travail : </label>
            <div class="col-10">
              <input class="form-control" type="text" v-model="contract">
            </div>
          </div>

          <div class="form-group">
            <label for="salary" class="col-2 col-form-label">Salaire annuel (brut) : </label>
            <div class="col-10">
              <input class="form-control" type="text" v-model="annualSalary" >
            </div>
          </div>

          <div class="form-group">
            <label for="dateEnter" class="col-2 col-form-label">Date d'entrée dans l'entreprise : </label>
            <div class="col-10">
              <input class="form-control" type="date" v-model="entryBusiness">
            </div>
          </div>

          <div class="form-group">
            <label for="dateActive" class="col-2 col-form-label">Date de début d'activité : </label>
            <div class="col-10">
              <input class="form-control" type="date" v-model="startActivity">
            </div>
          </div>

          <div class="form-group">
            <label for="dateEnd" class="col-2 col-form-label">Date de fin de contrat : </label>
            <div class="col-10">
              <input class="form-control" type="text" v-model="endBusiness">
            </div>
          </div>

          <div class="form-group">
            <label for="emailPro" class="col-2 col-form-label">Email professionnel : </label>
            <div class="col-10">
              <input class="form-control" type="email" v-model="professionalEmail">
            </div>
          </div>

          <div class="form-group">
            <label for="telPro" class="col-2 col-form-label">Téléphone professionnel : </label>
            <div class="col-10">
              <input class="form-control" type="text" v-model='professionalNumber'>
            </div>
          </div>

          <div class="form-group">
            <label class="col-2 col-form-label">Si directeur d'entité : </label>
            <div class="col-10">
              <input class="form-control" type="text" v-model='directorEntity'>
            </div>
          </div>

          <div class="form-group">
          <label for="role" class="col-2 col-form-label">Droit d'accès  : (Champs obligatoire)</label>
            <div class="col-10">
              <select class="form-control" v-model="role">
              <option disabled value="">Choisir un role</option>
              <option>Directeur</option>
                <option>Manager</option>
                <option>Vendeur</option>
                <option>Prestataire</option>
              </select>
            </div>
          </div>
        </div>
        <button type="button" @click.prevent="submit" class="btn btn-dark">Créer</button>
      </form>
    </div>
  </div>
</template>

<script>
import { newUser, checkUser } from "@/api/auth";
export default {
  data() {
    return {
      messageError: null,
      firstname: "",
      lastname: "",
      civility: "",
      nationality: "",
      birthDate: "",
      telNumber: "",
      email: "",
      address: "",
      codePostal: "",
      city: "",
      country: "",
      entityAttachment: null,
      directorEntity: null,
      functionJob: "",
      contract: "",
      annualSalary: "",
      entryBusiness: "",
      startActivity: "",
      endBusiness: "",
      professionalEmail: "",
      professionalNumber: "",
      role: ""
    };
  },
  created() {
    checkUser(this.$root);
    if (!this.$root.user) this.$router.push("/404");
  },

  methods: {
    submit() {
      this.messageError = null;
      newUser({
        firstname: this.firstname,
        lastname: this.lastname,
        civility: this.civility,
        nationality: this.nationality,
        birthDate: this.birthDate,
        telNumber: this.telNumber,
        email: this.email,
        address: this.address,
        codePostal: this.codePostal,
        city: this.city,
        country: this.country,
        profilePic: this.profilePic,
        entityAttachment: this.entityAttachment,
        directorEntity: this.directorEntity,
        functionJob: this.functionJob,
        contract: this.contract,
        annualSalary: this.annualSalary,
        entryBusiness: this.entryBusiness,
        startActivity: this.startActivity,
        endBusiness: this.endBusiness,
        professionalEmail: this.professionalEmail,
        professionalNumber: this.professionalNumber,
        role: this.role
      })
        .then(() => {
          this.$router.push("/users");
        })
        .catch(err => {
          this.messageError = err.response.data.error;
        });
    }
  }
};
</script>

<style scoped>
.div-center,
h2 {
  margin-left: 15%;
}
</style>
