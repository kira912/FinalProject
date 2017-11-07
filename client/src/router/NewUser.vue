<template>
  <div>
    <form-wizard @on-complete="submit">
      <tab-content title="Info perso">
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="radio" v-model="civility" name="inlineRadioOptions" id="inlineRadio1" value="Madame"> Madame
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input class="form-check-input" type="radio" v-model="civility" name="inlineRadioOptions" id="inlineRadio2" value="Monsieur"> Monsieur
          </label>
        </div>
        <br><br>
        <div class="form-inline">
          <div class="form-group">
            <label for="lastName" class="col-5 col-form-label">Nom de famille : </label>
            <div class="col-4">
              <input class="form-control" type="text" v-model="lastname">
            </div>
          </div>
          <div class="form-group">
            <label for="name" class="col-5 col-form-label">Prénom : </label>
            <div class="col-4">
              <input class="form-control" type="text" v-model="firstname">
            </div>
          </div>
          <div class="form-group">
            <label for="birth" class="col-7 col-form-label">Date de naissance : </label>
            <div class="col-4">
              <input class="form-control" type="date" v-model="birthDate">
            </div>
          </div>
        </div>
        <br><br>

        <div class="form-inline">
          <div class="form-group">
            <label for="enseigne" class="col-5 col-form-label">Téléphone : </label>
            <div class="col-4">
              <input class="form-control" type="text" v-model="telNumber">
            </div>
          </div>
          <div class="form-group">
            <label class="col-6 col-form-label">Email : *</label>
              <div class="col-4">
                <input type="email" class="form-control" v-model="email">
              </div>
          </div>
          <div class="form-group">
            <label for="email" class="col-8 col-form-label">Pays : </label>
            <div class="col-4">
              <input class="form-control" v-model="country" type="email">
            </div>
          </div>
        </div>
        <br><br>

        <div class="form-inline">
          <div class="form-group">
            <label for="city" class="col-4 col-form-label">Adresse : </label>
            <div class="col-4">
              <input type="text" v-model="address" class="form-control">
            </div>  
          </div>
          <div class="form-group">  
            <label for="postal" class="col-5 col-form-label">Code Postal : </label>
            <div class="col-4">
              <input class="form-control" type="text" v-model="codePostal">
            </div> 
          </div>
          <div class="form-group">   
            <label for="city" class="col-7 col-form-label">Ville : </label>
            <div class="col-4">
              <input class="form-control" type="text" v-model="city">
            </div>
          </div>  
        </div>
      </tab-content>
      <tab-content title="Info pro">
        <div class="form-inline">
          <div class="form-group">
            <label for="entity" class="sm-1 col-form-label">Entité de rattachement : </label>
            <div class="col-4">
              <input class="form-control" type="text" v-model="entityAttachment">
            </div>
          </div>
          <div class="form-group">
            <label for="function" class="col-6 col-form-label">Fonction (emploi) : </label>
            <div class="col-4">
              <input class="form-control" type="text" v-model="functionJob">
            </div> 
          </div>
          <div class="form-group">
            <label for="contrat" class="col-6 col-form-label">Contrat de travail : </label>
            <div class="col-4">
              <input class="form-control" type="text" v-model="contract">
            </div>
          </div>
        </div>
        <br><br>

        <div class="form-inline">
          <div class="form-group">
            <label for="salary" class="sm-5 col-form-label">Salaire annuel (brut) : </label>
            <div class="col-4">
              <input class="form-control" type="text" v-model="annualSalary" >
            </div>
          </div>
          <div class="form-group">
            <label for="dateEnter" class="sm-5 col-form-label">Date d'entrée dans l'entreprise : </label>
            <div class="col-4">
              <input class="form-control" type="date" v-model="entryBusiness">
            </div>
          </div>
          <div class="form-group">
            <label for="dateActive" class="sm-4 col-form-label">Date de début d'activité : </label>
            <div class="col-4">
              <input class="form-control" type="date" v-model="startActivity">
            </div>
          </div>
        </div>
        <br><br>

        <div class="form-inline">
          <div class="form-group">
            <label for="dateEnd" class="col-4 col-form-label">Date de fin de contrat : </label>
            <div class="col-4">
              <input class="form-control" type="text" v-model="endBusiness">
            </div>
          </div>
          <div class="form-group">
            <label for="emailPro" class="sm-5 col-form-label">Email professionnel : </label>
            <div class="col-4">
              <input class="form-control" type="email" v-model="professionalEmail">
            </div>
          </div>
          <div class="form-group">
            <label for="telPro" class="sm-5 col-form-label">Téléphone professionnel : </label>
            <div class="col-4">
              <input class="form-control" type="text" v-model='professionalNumber'>
            </div>
          </div>
        </div>
        <br><br>
        <div class="form-inline">
          <div class="form-group">
            <label class="sm-6 col-form-label">Si directeur d'entité : </label>
            <div class="col-4">
              <input class="form-control" type="text" v-model='directorEntity'>
            </div>
          </div>
          <div class="form-group">
            <label for="role" class="col-8 col-form-label">Droit d'accès  : (Champs obligatoire)</label>
            <div class="col-4">
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
      </tab-content>
    </form-wizard>
   <!--  <div class="div-center">
     <div v-if="messageError" class="alert alert-danger" role="alert">
        {{messageError.message}}
      </div> 

          <br>
        <div class="col-sm">
          <h2>Données professionnelles</h2>
          




















        </div>
        <button type="button" @click.prevent="submit" class="btn btn-dark">Créer</button>
      </form>
    </div> -->
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import { newUser, checkUser } from "@/api/auth";
export default {
  components: {
    FormWizard,
    TabContent
  },
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
