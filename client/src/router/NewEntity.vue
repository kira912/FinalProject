<template>
  <div>
    <notifications v-if="messageError" group="custom-template"
                   :duration="5000"
                   :width="500"
                   animation-name="v-fade-left"
                   position="top right">
    </notifications>
    <div class="div-center">
      <form @submit.prevent='submit'>
        <h2>Données d'entité</h2>
        <div class="form-group">
          <label for="name" class="col-2 col-form-label">Nom de l'entité</label>
          <div class="col-10">
            <input class="form-control" v-model='name' type="text">
          </div>
        </div>
        
        <div class="form-group">
          <label for="type" class="col-2 col-form-label">Type d'entité</label>
          <div class="col-10">
            <input class="form-control" v-model='typeEntity' type="text">
          </div>
        </div>

        <div class="form-group">
          <label for="rattachement" class="col-2 col-form-label">Entité de rattachement</label>
          <div class="col-10">
            <input class="form-control" v-model='entityAttachment' type="text">
          </div>
        </div>

        <div class="form-group">
          <label for="enseigne" class="col-2 col-form-label">Enseigne</label>
          <div class="col-10">
            <input class="form-control" v-model='enseign' type="text">
          </div>
        </div>
        <br>

        <div class="form-inline">
          <label for="address" class="col-2 col-form-label">Adresse</label>
          <div class="col-10">      
            <input type="text" v-model='address' class="form-control">
          </div>        
          <label for="postal" class="col-2 col-form-label">Code Postal</label>
          <div class="col-10">
            <input class="form-control" v-model='codePostal' type="text">
          </div>  
          <label for="city" class="col-2 col-form-label">Ville</label>
          <div class="col-10">
            <input class="form-control" v-model='city' type="text">
          </div>  
        </div>
        <br>

        <div class="form-group">
          <label for="numberTel" class="col-2 col-form-label">Téléphone</label>
          <div class="col-10">
            <input class="form-control" v-model='telNumber' type="tel">
          </div>
        </div>

        <div class="form-group">
          <label for="email" class="col-2 col-form-label">Email</label>
          <div class="col-10">
            <input class="form-control" v-model='email' type="email">
          </div>
        </div>

        <h2>Données juridique </h2>
        <div class="form-group">
          <label for="rcs" class="col-2 col-form-label">RCS</label>
          <div class="col-10">
            <input class="form-control" v-model='rcs' type="text">
          </div>
        </div>

        <div class="form-group">
          <label for="tva" class="col-2 col-form-label">TVA Intracommunautaire</label>
          <div class="col-10">
            <input class="form-control" v-model='tvaIntra' type="text">
          </div>
        </div>

        <div class="form-group">
          <label for="siren" class="col-2 col-form-label">SIREN</label>
          <div class="col-10">
            <input class="form-control" v-model='siren' type="text">
          </div>
        </div>

        <div class="form-group">
          <label for="siret" class="col-2 col-form-label">SIRET</label>
          <div class="col-10">
            <input class="form-control" v-model='siret' type="text">
          </div>
        </div>

        <div class="form-group">
          <label for="license" class="col-2 col-form-label">License</label>
          <div class="col-10">
            <input class="form-control" v-model='license' type="text">
          </div>
        </div>

        <div class="form-group">
          <label for="guaranties" class="col-2 col-form-label">Garanties financières</label>
          <div class="col-10">
            <input class="form-control" v-model='financialGuarantees' type="text">
          </div>
        </div>

        <div class="form-group">
          <label for="statut" class="col-2 col-form-label">Statut</label>
          <div class="col-10">
            <input class="form-control" v-model='statut' type="text">
          </div>
        </div>

        <div class="form-group">
          <label for="capital" class="col-2 col-form-label">Capital social</label>
          <div class="col-10">
            <input class="form-control" v-model='socialCapital' type="text">
          </div>
        </div>

        <div class="form-group">
          <label for="dateExercise" class="col-2 col-form-label">Dates d'exercice</label>
          <div class="col-10">
            <input class="form-control" v-model='exerciseDate' type="date">
          </div>
        </div>

        <h2>Données bancaires</h2>
        <div class="form-group">
          <label for="bank" class="col-2 col-form-label">Banque</label>
          <div class="col-10">
            <input class="form-control" v-model='bank' type="text">
          </div>
        </div>

        <div class="form-inline">
          <label for="city" class="col-2 col-form-label">Adresse</label>
          <div class="col-10">
            <input type="text" v-model='addressBank' class="form-control">
          </div>    
          <label for="postal" class="col-2 col-form-label">Code Postal</label>
          <div class="col-10">  
          <input class="form-control" v-model="codePostalBank" type="text">
          </div> 
          <label for="city" class="col-2 col-form-label">Ville</label>
          <div class="col-10">
            <input class="form-control" v-model="cityBank" type="text">
          </div>  
        </div>

        <div class="form-group">
          <label for="owner" class="col-2 col-form-label">Titulaire de compte</label>
          <div class="col-10">
            <input class="form-control" v-model="ownerCount" type="text">
          </div>
        </div>

        <div class="form-group">
          <label for="iban" class="col-2 col-form-label">IBAN</label>
          <div class="col-10">
            <input class="form-control" v-model='iban' type="text">
          </div>
        </div>

        <div class="form-group">
          <label for="codeBic" class="col-2 col-form-label">Code BIC / SWIFT</label>
          <div class="col-10">
            <input class="form-control" v-model="codeBic" type="text">
          </div>
        </div>
        <br>

        <h2>Données de gestion</h2>
        <div class="form-group">
          <label for="director" class="col-2 col-form-label">Directeur d'entité</label>
          <div class="col-10">
            <input class="form-control" v-model="directorEntity" type="text">
          </div>
        </div>

        <div class="form-group">
          <label for="userAttachment" class="col-2 col-form-label">Utilisateurs rattachés</label>
          <div class="col-10">
            <input class="form-control" v-model="userAttachment" type="text">
          </div>
        </div>
        <button type="button" @click='submit' class="btn btn-dark">Créer</button>
      </form> 
    </div>
  </div>
</template>

<script>
import { newEntity, checkUser } from "@/api/auth";
export default {
  data() {
    return {
      name: "",
      typeEntity: "",
      entityAttachment: "",
      enseign: "",
      address: "",
      codePostal: "",
      city: "",
      telNumber: "",
      email: "",
      rcs: "",
      tvaIntra: "",
      siren: "",
      siret: "",
      license: "",
      financialGuarantees: "",
      statut: "",
      socialCapital: "",
      exerciseDate: "",
      bank: "",
      addressBank: "",
      codePostalBank: "",
      cityBank: "",
      ownerCount: "",
      iban: "",
      codeBic: "",
      directorEntity: "",
      userAttachment: "",
      messageError: null,
      animation: {
        enter: {
          opacity: [1, 0],
          translateX: [0, -300],
          scale: [1, 0.2]
        },
        leave: {
          opacity: 0,
          height: 0
        }
      }
    };
  },

  created() {
    checkUser(this.$root);
    if (!this.$root.user) this.$router.push("/404");
  },

  methods: {
    submit() {
      this.messageError = null;
      newEntity({
        name: this.name,
        typeEntity: this.typeEntity,
        entityAttachment: this.entityAttachment,
        enseign: this.enseign,
        address: this.address,
        codePostal: this.codePostal,
        city: this.city,
        telNumber: this.telNumber,
        email: this.email,
        rcs: this.rcs,
        tvaIntra: this.tvaIntra,
        siren: this.siren,
        siret: this.siret,
        license: this.license,
        financialGuarantees: this.financialGuarantees,
        status: this.status,
        socialCapital: this.socialCapital,
        exerciseDate: this.exerciseDate,
        bank: this.bank,
        addressBank: this.addressBank,
        codePostalBank: this.codePostalBank,
        cityBank: this.cityBank,
        ownerCount: this.ownerCount,
        iban: this.iban,
        codeBic: this.codeBic,
        directorEntity: this.directorEntity,
        userAttachment: this.userAttachment
      })
        .then(() => {
          setTimeout(() => {
            this.showSuccess("custom-template");
          }, 1000);
          this.$router.push("/entities");
        })
        .catch(err => {
          this.messageError = err.response.data.error;
          this.showError("custom-template", "error");
        });
    },
    showSuccess(group, type = "") {
      let title = `Nouvel entité crée`;
      let now = new Date();
      let text = `Date ${now}`;
      this.$notify({ group, title, text, type });
    },
    clean(group) {
      this.$notify({ group, clean: true });
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