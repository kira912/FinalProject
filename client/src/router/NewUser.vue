<template>
<div class="container-fluid">
  <div v-if="error" class="alert alert-danger" role="alert">
    {{error.message}}
  </div>
  <form @submit.prevent='newUser'>
  <h2>Données personnelles</h2>
  <fieldset class="form-group">
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" v-model="civility" name="optionsRadios" id="optionsRadios1" value="option1">
        Madame
      </label>
    </div>
    <div class="form-check">
    <label class="form-check-label">
        <input type="radio" class="form-check-input" v-model="civility" name="optionsRadios" id="optionsRadios2" value="option2">
        Monsieur
      </label>
    </div>
  </fieldset>

  <div class="form-group">
    <label for="lastName" class="col-2 col-form-label">Nom de famille</label>
    <div class="col-10">
      <input class="form-control" type="text" v-model="lastname" id="lastName">
    </div>
  </div>

  <div class="form-group">
    <label for="name" class="col-2 col-form-label">Prénom</label>
    <div class="col-10">
      <input class="form-control" type="text" v-model="firstname" id="name">
    </div>
  </div>

  <div class="form-group">
    <label for="birth" class="col-2 col-form-label">Date de naissance</label>
    <div class="col-10">
      <input class="form-control" type="date" v-model="birthDate" id="birth">
    </div>
  </div>

  <div class="form-group">
    <label for="enseigne" class="col-2 col-form-label">Téléphone</label>
    <div class="col-10">
      <input class="form-control" type="text" v-model="telNumber" id="numberTel">
    </div>
  </div>

  <div class="form-group">
    <label for="email" class="col-2 col-form-label">Email</label>
    <div class="col-10">
      <input class="form-control" v-model="email" type="email" id="email">
    </div>
  </div>

  <div class="form-inline">
    <label for="city">Adresse</label>
    <input type="text" id="city" v-model="address" class="form-control mx-sm-3">
    
    <label for="postal" class="col-2 col-form-label">Code Postal</label>
    <input class="form-control" type="text" v-model="codePostal" id="postal">
    
    <label for="city" class="col-2 col-form-label">Ville</label>
    <input class="form-control" type="text" v-model="city" id="city">
    
    <label for="country" class="col-2 col-form-label">Pays</label>
    <input class="form-control" type="text" v-model="country" id="country">
  </div>
  <br>

  <h2>Données professionnelles</h2>
  
  <div class="form-group">
    <label for="entity" class="col-2 col-form-label">Entité de rattachement</label>
    <div class="col-10">
      <input class="form-control" type="text" v-model="entityAttachment" id="entity">
    </div>
  </div>

  <div class="form-group">
    <label for="function" class="col-2 col-form-label">Fonction (emploi)</label>
    <div class="col-10">
      <input class="form-control" type="text" v-model="functionJob" id="function">
    </div> 
  </div>

  <div class="form-group">
    <label for="contrat" class="col-2 col-form-label">Contrat de travail</label>
    <div class="col-10">
      <input class="form-control" type="text" v-model="contract" id="contrat">
    </div>
  </div>

  <div class="form-group">
    <label for="salary" class="col-2 col-form-label">Salaire annuel (brut)</label>
    <div class="col-10">
      <input class="form-control" type="text" v-model="annualSalary"  id="salary">
    </div>
  </div>

  <div class="form-group">
    <label for="dateEnter" class="col-2 col-form-label">Date d'entrée dans l'entreprise</label>
    <div class="col-10">
      <input class="form-control" type="date" v-model="entryBusiness" id="dateEnter">
    </div>
  </div>

  <div class="form-group">
    <label for="dateActive" class="col-2 col-form-label">Date de début d'activité</label>
    <div class="col-10">
      <input class="form-control" type="date" v-model="startActivity" id="dateActive">
    </div>
  </div>

  <div class="form-group">
    <label for="dateEnd" class="col-2 col-form-label">Date de fin de contrat</label>
    <div class="col-10">
      <input class="form-control" type="text" v-model="endBusiness" id="dateEnd">
    </div>
  </div>

  <div class="form-group">
    <label for="emailPro" class="col-2 col-form-label">Email professionnel</label>
    <div class="col-10">
      <input class="form-control" type="email" v-model="professionalEmail" id="emailPro">
    </div>
  </div>

  <div class="form-group">
    <label for="telPro" class="col-2 col-form-label">Téléphone professionnel</label>
    <div class="col-10">
      <input class="form-control" type="text" v-model='professionalNumber' id="telPro">
    </div>
  </div>

  <div class="form-group dropup">
    <label for="role" class="col-2 col-form-label">Droit d'accès</label>
    <div class="col-10">
    </div>
  </div>
   <button type="button" @click.prevent="newUser" class="btn btn-primary">Créer</button>
  </form>
</div>
</template>

<script>
import { newUser } from "@/api/auth";
export default {
  data() {
    return {
      error: null,
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
      vitalCard: "",
      transportTicket: "",
      profilePic: "",
      entityAttachment: null,
      functionJob: "",
      contract: "",
      annualSalary: "",
      entryBusiness: "",
      startActivity: "",
      endBusiness: "",
      professionalEmail: "",
      professionalNumber: ""
    };
  },

  methods: {
    newUser() {
      this.error = null;
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
        vitalCard: this.vitalCard,
        transportTicket: this.transportTicket,
        profilePic: this.profilePic,
        entityAttachment: this.entityAttachment,
        functionJob: this.functionJob,
        contract: this.contract,
        annualSalary: this.annualSalary,
        entryBusiness: this.entryBusiness,
        startActivity: this.startActivity,
        endBusiness: this.endBusiness,
        professionalEmail: this.professionalEmail,
        professionalNumber: this.professionalNumber
      })
        .then(() => {
          this.$router.push("/users");
        })
        .catch(err => {
          this.error = err.response.data.error;
          console.error("Enregistrement erreur", err);
        });
    }
  }
};
</script>
