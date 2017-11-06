<template>
<div class="container-fluid">
     <div v-if="messageError" class="alert alert-danger" role="alert">
        {{messageError.message}}
      </div> 
  <form>
    <h2>Données d'entité</h2>
    <div class="form-group">
      <label for="name" class="col-2 col-form-label">Nom de l'entité</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.name' type="text">
      </div>
    </div>
    
    <div class="form-group">
      <label for="type" class="col-2 col-form-label">Type d'entité</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.typeEntity' type="text">
      </div>
    </div>

    <div class="form-group">
      <label for="enseigne" class="col-2 col-form-label">Enseigne</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.enseign' type="text">
      </div>
    </div>
    
    <div class="form-inline">
      <label for="address" class="col-2 col-form-label">Adresse</label>
      <div class="col-10">      
        <input type="text" v-model='entityInfo.address' class="form-control">
      </div>        
      <label for="postal" class="col-2 col-form-label">Code Postal</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.codePostal' type="text">
      </div>  
      <label for="city" class="col-2 col-form-label">Ville</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.city' type="text">
      </div>  
    </div>
    <br>

    <div class="form-group">
      <label for="numberTel" class="col-2 col-form-label">Téléphone</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.telNumber' type="tel">
      </div>
    </div>

    <div class="form-group">
      <label for="email" class="col-2 col-form-label">Email</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.email' type="email">
      </div>
    </div>

    <h2>Données juridique </h2>
    <div class="form-group">
      <label for="rcs" class="col-2 col-form-label">RCS</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.rcs' type="text">
      </div>
    </div>

    <div class="form-group">
      <label for="tva" class="col-2 col-form-label">TVA Intracommunautaire</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.tvaIntra' type="text">
      </div>
    </div>

    <div class="fofefzfzfzefzrm-group">
      <label for="siren" class="col-2 col-form-label">SIREN</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.siren' type="text">
      </div>
    </div>

    <div class="form-group">
      <label for="siret" class="col-2 col-form-label">SIRET</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.siret' type="text">
      </div>
    </div>

    <div class="form-group">
      <label for="license" class="col-2 col-form-label">License</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.license' type="text">
      </div>
    </div>

    <div class="form-group">
      <label for="guaranties" class="col-2 col-form-label">Garanties financières</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.financialGuarantees' type="text">
      </div>
    </div>

    <div class="form-group">
      <label for="statut" class="col-2 col-form-label">Statut</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.status' type="text">
      </div>
    </div>

    <div class="form-group">
      <label for="capital" class="col-2 col-form-label">Capital social</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.socialCapital' type="text">
      </div>
    </div>

    <div class="form-group">_id
      <label for="dateExercise" class="col-2 col-form-label">Dates d'exercice</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.exerciseDate' type="date">
      </div>
    </div>

    <h2>Données bancaires</h2>
    <div class="form-group">
      <label for="bank" class="col-2 col-form-label">Banque</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.bank' type="text">
      </div>
    </div>

    <div class="form-inline">
      <label for="address" class="col-2 col-form-label">Adresse</label>
      <div class="col-10">      
        <input type="text" v-model='entityInfo.addressBank' class="form-control">
      </div>        
      <label for="postal" class="col-2 col-form-label">Code Postal</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.codePostalBank' type="text">
      </div>  
      <label for="city" class="col-2 col-form-label">Ville</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.cityBank' type="text">
      </div>  
    </div>
    <br>

    <div class="form-group">
      <label for="owner" class="col-2 col-form-label">Titulaire de compte</label>
      <div class="col-10">
        <input class="form-control" v-model="entityInfo.ownerCount" type="text">
      </div>
    </div>

    <div class="form-group">
      <label for="iban" class="col-2 col-form-label">IBAN</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.iban' type="text">
      </div>
    </div>

    <div class="form-group">
      <label for="codeBic" class="col-2 col-form-label">Code BIC / SWIFT</label>
      <div class="col-10">
        <input class="form-control" v-model="entityInfo.codeBic" type="text">
      </div>
    </div>
    <br>

    <h2>Données de gestion</h2>
    <div class="form-group">
      <label for="director" class="col-2 col-form-label">Directeur d'entité</label>
      <div class="col-10">
        <input class="form-control" v-model="entityInfo.directorEntity" type="text">
      </div>
    </div>

    <div class="form-group">
      <label for="userAttachment" class="col-2 col-form-label">Utilisateurs rattachés</label>
      <div class="col-10">
        <input class="form-control" v-model="entityInfo.usersAttachment" type="text">
      </div>
    </div>
    <button type="button" @click.prevent='editEntity()' class="btn btn-dark">Editer</button>
  </form>
</div>
</template>

<script>
import { editEntity, getSingleEntity, checkUser } from "@/api/auth";
export default {
  data() {
    return {
      messageError: null,
      entityInfo: {}
    };
  },

  methods: {
    editEntity() {
      this.messageError = null;
      editEntity(this.$route.params.id, this.entityInfo)
        .then(() => {
          this.$router.push("/entities");
        })
        .catch(err => {
          this.messageError = err.response.data.error;
        });
    }
  },

  created() {
    checkUser(this.$root);
    if (!this.$root.user) this.$router.push("/404");
    getSingleEntity(this.$route.params.id).then(entityInfo => {
      this.entityInfo = entityInfo;
    });
  }
};
</script>

<style scoped>
.div-center,
h2 {
  margin-left: 15%;
}
</style>