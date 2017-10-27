<template>
<div>
  <!-- {{messageError.message}} -->
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
      <label for="rattachement" class="col-2 col-form-label">Entité de rattachement</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.entityAttachment' type="text">
      </div>
    </div>

    <div class="form-group">
      <label for="enseigne" class="col-2 col-form-label">Enseigne</label>
      <div class="col-10">
        <input class="form-control" v-model='entityInfo.enseign' type="text">
      </div>
    </div>
    
    <div class="form-inline">
      <label for="address">Adresse</label>
      <input type="text" v-model='entityInfo.address' class="form-control mx-sm-3">
      <label for="postal" class="col-2 col-form-label">Code Postal</label>
      <input class="form-control" v-model='entityInfo.codePostal' type="text">
      <label for="city" class="col-2 col-form-label">Ville</label>
      <input class="form-control" v-model='entityInfo.city' type="text">
    </div>

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
        <input class="form-control" v-model='entityInfo.statut' type="text">
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
      <label for="city">Adresse</label>
      <input type="text" v-model='entityInfo.addressBank' class="form-control mx-sm-3">
      <label for="postal" class="col-2 col-form-label">Code Postal</label>
      <input class="form-control" v-model="codePostalBank" type="text">
      <label for="city" class="col-2 col-form-label">Ville</label>
      <input class="form-control" v-model="cityBank" type="text">
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
        <input class="form-control" v-model="entityInfo.userAttachment" type="text">
      </div>
    </div>
    <button type="button" @click.prevent='editEntity()' class="btn btn-primary">Editer</button>
  </form>
</div>
</template>

<script>
import { editEntity, getSingleEntity } from "@/api/auth";
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
      entityInfo: {}
    };
  },

  methods: {
    editEntity() {
      editEntity(this.$route.params.id, {
        name: this.entityInfo.name,
        typeEntity: this.entityInfo.typeEntity,
        entityAttachment: this.entityInfo.entityAttachment,
        enseign: this.entityInfo.enseign,
        address: this.entityInfo.address,
        codePostal: this.entityInfo.codePostal,
        city: this.entityInfo.city,
        telNumber: this.entityInfo.telNumber,
        email: this.entityInfo.email,
        rcs: this.entityInfo.rcs,
        tvaIntra: this.entityInfo.tvaIntra,
        siren: this.entityInfo.siren,
        siret: this.entityInfo.siret,
        license: this.entityInfo.license,
        financialGuarantees: this.entityInfo.financialGuarantees,
        status: this.entityInfo.status,
        socialCapital: this.entityInfo.socialCapital,
        exerciseDate: this.entityInfo.exerciseDate,
        bank: this.entityInfo.bank,
        addressBank: this.entityInfo.addressBank,
        codePostalBank: this.entityInfo.codePostalBank,
        cityBank: this.entityInfo.cityBank,
        ownerCount: this.entityInfo.ownerCount,
        iban: this.entityInfo.iban,
        codeBic: this.entityInfo.codeBic,
        directorEntity: this.entityInfo.directorEntity,
        userAttachment: this.entityInfo.userAttachment
      }).then(data => {
        this.$router.push("/entities");
      });
    }
  },

  created() {
    getSingleEntity(this.$route.params.id).then(entityInfo => {
      this.entityInfo = entityInfo;
    });
  }
};
</script>
