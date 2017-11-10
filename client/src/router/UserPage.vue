<template>
<div>
  <div class="div-center">
    <form>
    <h2>Données personnelles</h2>
    <fieldset class="form-group">
      <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" v-model="userInfo.civility" value="Madame">
          Madame
        </label>
      </div>
      <div class="form-check">
      <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" v-model="userInfo.civility" value="Monsieur">
          Monsieur
        </label>
      </div>
    </fieldset>

    <div class="form-group">
      <label for="lastName" class="col-2 col-form-label">Nom de famille</label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="userInfo.lastname">
      </div>
    </div>

    <div class="form-group">
      <label for="name" class="col-2 col-form-label">Prénom</label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="userInfo.firstname">
      </div>
    </div>

    <div class="form-group">
      <label for="birthDate" class="col-2 col-form-label">Date de naissance</label>
      <div class="col-10">
        <input class="form-control" type="date" v-model="userInfo.birthDate">
      </div>
    </div>

    <div class="form-group">
      <label for="enseigne" class="col-2 col-form-label">Téléphone</label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="userInfo.telNumber">
      </div>
    </div>

    <div class="form-group">
      <label for="email" class="col-2 col-form-label">Email</label>
      <div class="col-10">
        <input class="form-control" type="email" v-model="userInfo.email">
      </div>
    </div>
      <label class="col-2 col-form-label" for="address">address</label>
      <input type="text" id="address" v-model='userInfo.address' class="form-control col-md-2">
            <label class="col-2 col-form-label" for="address">address</label>
      <input type="text" id="address" v-model='userInfo.address' class="form-control col-md-2">
    <br>

    <div class="form-group">
      <label for="country" class="col-2 col-form-label">Pays</label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="userInfo.country">
      </div>
    </div>


    <div class="form-group">
      <label for="natio" class="col-2 col-form-label">Nationalité</label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="userInfo.nationality">
      </div>
    </div>

    <br>

    <h2>Données professionnelles</h2>
    
    <div class="form-group">
      <label for="entity" class="col-2 col-form-label">Entité de rattachement</label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="userInfo.entityAttachment">
      </div>
    </div>

    <div class="form-group">
      <label for="function" class="col-2 col-form-label">Fonction (emploi)</label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="userInfo.functionJob">
      </div>
    </div>

    <div class="form-group">
      <label for="contrat" class="col-2 col-form-label">Contrat de travail</label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="userInfo.contract">
      </div>
    </div>

    <div class="form-group">
      <label for="salary" class="col-2 col-form-label">Salaire annuel (brut)</label>
      <div class="col-10">
        <input class="form-control" type="text" v-model="userInfo.annualSalary">
      </div>
    </div>

    <div class="form-group">
      <label for="startActivity" class="col-2 col-form-label">Date d'entrée dans l'entreprise</label>
      <div class="col-10">
        <input class="form-control" type="date" v-model="userInfo.entryBusiness">
      </div>
    </div>

    <div class="form-group">
      <label for="dateActive" class="col-2 col-form-label">Date de début d'activité</label>
      <div class="col-10">
        <input class="form-control" type="date" v-model="userInfo.startActivity">
      </div>
    </div>

    <div class="form-group">
      <label for="dateEnd" class="col-2 col-form-label">Date de fin de contrat</label>
      <div class="col-10">
        <input class="form-control" type="date" v-model="userInfo.endBusiness">
      </div>
    </div>

    <div class="form-group">
      <label for="professionalEmail" class="col-2 col-form-label">Email professionnel</label>
      <div class="col-10">
        <input class="form-control" type="email" v-model="userInfo.professionalEmail">
      </div>
    </div>

    <div class="form-group">
      <label for="telPro" class="col-2 col-form-label">Téléphone professionnel</label>
      <div class="col-10">
        <input class="form-control" v-model='userInfo.professionalNumber' type="text">
      </div>
    </div>

        <h2>Données bancaires</h2>
      <div class="form-group">
        <label for="bank" class="col-2 col-form-label">Banque</label>
        <div class="col-10">
          <input class="form-control" v-model='userInfo.bank' type="text">
        </div>
      </div>

    <div class="form-inline">
      <label for="address" class="col-2 col-form-label">Adresse</label>
      <div class="col-10">      
        <input type="text" v-model='userInfo.addressBank' class="form-control">
      </div>        
      <label for="postal" class="col-2 col-form-label">Code Postal</label>
      <div class="col-10">
        <input class="form-control" v-model='userInfo.codePostalBank' type="text">
      </div>  
      <label for="city" class="col-2 col-form-label">Ville</label>
      <div class="col-10">
        <input class="form-control" v-model='userInfo.cityBank' type="text">
      </div>  
    </div>
    <br>

      <div class="form-group">
        <label for="owner" class="col-2 col-form-label">Titulaire de compte</label>
        <div class="col-10">
          <input class="form-control" v-model="userInfo.ownerCount" type="text">
        </div>
      </div>

      <div class="form-group">
        <label for="iban" class="col-2 col-form-label">IBAN</label>
        <div class="col-10">
          <input class="form-control" v-model='userInfo.iban' type="text">
        </div>
      </div>

      <div class="form-group">
        <label for="codeBic" class="col-2 col-form-label">Code BIC / SWIFT</label>
        <div class="col-10">
          <input class="form-control" v-model="userInfo.codeBic" type="text">
        </div>
      </div>
      <br>

    <div class="form-group">
      <label for="role" class="col-2 col-form-label">Droit d'accès</label>
      <div class="col-10">
        <select class="form-control" v-model="userInfo.role">
          <option >Choisir un role</option>
          <option>Directeur</option>
          <option>Manager</option>
          <option>Vendeur</option>
          <option>Prestataire</option>
        </select>
      </div>
    </div>
    <button type="button" @click.prevent='editUser()' class="btn btn-dark">Editer</button>
    </form>
  </div>  
</div>
</template>

<script>
import { editUser, getSingleUser, checkUser } from "@/api/auth";
export default {
  data() {
    return {
      userInfo: {}
    };
  },

  methods: {
    editUser() {
      editUser(this.$route.params.id, this.userInfo).then(() => {
        this.$router.push("/users");
      });
    }
  },

  created() {
    checkUser(this.$root);
    if (!this.$root.user) this.$router.push("/");
    getSingleUser(this.$route.params.id).then(userInfo => {
      this.userInfo = userInfo;
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