<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <!-- Modal for Users -->
        <div class="modal-container" v-if="user">
          <div class="modal-header">
            <slot name="header">
            <h5>Données de l'utilisateur</h5>
            </slot>
          </div>
          <div class="modal-body">
            <p> <strong>Prénom: </strong> {{user.firstname}}</p>
            <p> <strong>Nom de famille: </strong> {{user.lastname}} </p>
            <p> <strong>Civilité: </strong> {{user.civility}} </p>
            <p> <strong>Date de Naissance: </strong> {{user.birthDate}} </p>
            <p> <strong>Adresse: </strong> {{user.address}} </p>
            <p> <strong>Ville: </strong> {{user.city}} </p>
            <p> <strong>Pays: </strong> {{user.country}} </p>
            <p> <strong>Code Postal: </strong> {{user.codePostal}} </p>
            <p> <strong>Numéro de téléphone: </strong> {{user.telNumber}} </p>
            <p> <strong>Email: </strong> {{user.email}} </p>
          </div>
          <div class="modal-header">
            <slot name="header">
              <h5>Données de professionelles</h5>
            </slot>
          </div>
          <div class="modal-body">
            <p> <strong>Entité de rattachement: </strong> {{user.entityAttachment}} </p>
            <p> <strong>Fonction (emploi): </strong> {{user.functionJob}} </p>
            <p> <strong>Contrat de travail: </strong> {{user.contract}} </p>
            <p> <strong>Salaire annuel (brut): </strong> {{user.annualSalary}} </p>
            <p> <strong>Date d'entrée dans l'entreprise: </strong> {{user.entryBusiness}} </p>
            <p> <strong>Date de début d'activité: </strong> {{user.startActivity}} </p>
            <p> <strong>Date de fin de contrat: </strong> {{user.endBusiness}} </p>
            <p> <strong>Email professionnel: </strong> {{user.professionalEmail}} </p>
            <p> <strong>Date de fin de contrat: </strong> {{user.endBusiness}} </p>
            <p> <strong>Email professionnel: </strong> {{user.professionalEmail}} </p>
            <p> <strong>Téléphone professionnel: </strong> {{user.professionalNumber}} </p>
          </div>
          <div class="modal-header">
            <slot name="header">
              <h5>Données de professionelles</h5>
            </slot>
          </div>
          <div class="modal-body">
            <p> <strong>Banque: </strong> {{user.bank}} </p>
            <p> <strong>Adresse de la banque: </strong> {{user.addressBank}}, {{user.cityBank}}, {{user.codePostalBank}} </p>
            <p> <strong>Titulaire du compte</strong> {{user.ownerCount}} </p>
            <p> <strong>IBAN: </strong> {{user.iban}} </p>
            <p> <strong>Code BIC / SWIFT</strong> {{user.codeBic}} </p>
          </div>
          <div class="modal-footer">
              <button class="btn btn-primary active mt-3" @click="$emit('close')">
                Retour
              </button>
          </div>
        </div>

        <!-- Modal for Entities -->
        <div class="modal-container" v-else-if="entity">
          <div class="modal-header">
            <slot name="header">
            <h5>Donnée de l'entité</h5>
            </slot>
          </div>
          <div v-if="entity" class="modal-body">
            <p> <strong>Nom de l'entité: </strong> {{entity.name}}</p>
            <p> <strong>Type de l'entité: </strong> {{entity.typeEntity}} </p>
            <p> <strong>Entité d'attachement: </strong> {{entity.entityAttachment}} </p>
            <p> <strong>Enseigne: </strong> {{entity.enseign}} </p>
            <p> <strong>Adresse: </strong> {{entity.address}} </p>
            <p> <strong>Ville: </strong> {{entity.city}} </p>
            <p> <strong>Code Postal: </strong> {{entity.codePostal}} </p>
            <p> <strong>Numéro de téléphone: </strong> {{entity.telNumber}} </p>
            <p> <strong>Email: </strong> {{entity.email}} </p>
          </div>
           <div class="modal-header">
            <slot name="header">
            <h5>Données juridiques</h5>
            </slot>
          </div>
          <div class="modal-body">
            <p> <strong>RCS: </strong> {{entity.rcs}} </p>
            <p> <strong>TVA Intracommunautaire: </strong> {{entity.tvaIntra}} </p>
            <p> <strong>SIREN: </strong> {{entity.siren}} </p>
            <p> <strong>SIRET: </strong> {{entity.siret}} </p>
            <p> <strong>Licence: </strong> {{entity.license}} </p>
            <p> <strong>Garanties finacières: </strong> {{entity.financialGuarantees}} </p>
            <p> <strong>Statut: </strong> {{entity.statut}} </p>
            <p> <strong>Capital social: </strong> {{entity.socialCapital}} </p>
            <p> <strong>Dates d'exercice</strong> {{entity.exerciseDate}} </p>
          </div>
          <div class="modal-header">
            <slot name="header">
              <h5>Données bancaires</h5>
            </slot>
          </div>
          <div class="modal-body">
            <p> <strong>Banque: </strong> {{entity.bank}} </p>
            <p> <strong>Adresse de la banque: </strong> {{entity.address}}, {{entity.city}}, {{entity.codePostal}} </p>
            <p> <strong>Titulaire du compte</strong> {{entity.ownerCount}} </p>
            <p> <strong>IBAN: </strong> {{entity.iban}} </p>
            <p> <strong>Code BIC / SWIFT</strong> {{entity.codeBic}} </p>
          </div>
          <div class="modal-header">
            <slot name="header">
              <h5>Données de gestion</h5>
            </slot>
          </div>
          <div class="modal-body">
            <p> <strong>Directeur d'entité</strong> {{entity.directorEntity}} </p>
            <p> <strong>Utilisateurs rattachés: </strong> {{entity.userAttachement}} </p>
          </div>
          <div class="modal-footer">
              <button class="btn btn-primary active mt-3" @click="$emit('close')">
                Retour
              </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modalInfo",

  props: ["user", "entity"]
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  overflow-y: auto;
  font-family: Helvetica, Arial, sans-serif;
  max-height: 90%;
}

.modal-header h5 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>
