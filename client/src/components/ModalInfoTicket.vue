<template>
  <transition name="modal">
    <div class="modal-mask">
      <div @click="$emit('close')" class="modal-overlay"></div>
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
            <h5>Vendeur</h5>
            </slot>
          </div>
          <div class="modal-body">
            <p><strong>Vendeur : </strong> {{ticket.seller}} </p>
          </div>
          <div class="modal-header">
            <slot name="header">
            <h5>Voyage</h5>
            </slot>
          </div>
          <div class="modal-body">
            <p> <strong>Date de départ : </strong> {{ticket.dateDetarture}}</p>
            <p> <strong>Date de retour : </strong> {{ticket.returnDate}} </p>
            <p> <strong>Zone géographique : </strong> {{ticket.geographicalArea}} </p>
            <p> <strong>Pays : </strong> {{ticket.country}} </p>
          </div>
          <div class="modal-header">
            <slot name="header">
            <h5>Type de vente et Fournisseurs</h5>
            </slot>
          </div>
          <div class="modal-body">
            <p> <strong>Typologie : </strong> {{ticket.typology}}</p>
            <p> <strong>Fournisseurs : </strong> {{ticket.suppliers}} </p>
            <p> <strong>Zone géographique : </strong> {{ticket.geographicalArea}} </p>
            <p> <strong>Pays : </strong> {{ticket.country}} </p>
          </div>
          <div class="modal-header">
            <slot name="header">
            <h5>Vente</h5>
            </slot>
          </div>
          <div class="modal-body">
            <p> <strong>Date de réservation : </strong> {{ticket.bookingDate}}</p>
            <p> <strong>Commande Gestour : </strong> {{ticket.gestourOrder}} </p>
            <p> <strong>Volume d'affaires : </strong> {{ticket.businessVolume}} </p>
            <p> <strong>Assurance : </strong> {{ticket.insurance}} </p>
          </div>
          <div class="modal-header">
            <slot name="header">
            <h5>Client</h5>
            </slot>
          </div>
          <div class="modal-body">
            <p> <strong>Nom de famille : </strong> {{ticket.lastname}}</p>
            <p> <strong>Prénom : </strong> {{ticket.firstname}} </p>
            <p> <strong>Email du client : </strong> {{ticket.customerEmail}} </p>
            <p> <strong>Mobile du client : </strong> {{ticket.mobileClient}} </p>
            <p> <strong>Nombres de Pax : </strong> {{ticket.numberPax}} </p>
            <p> <strong>Recrutement : </strong> {{ticket.recruitement}} </p>
            <p> <strong>Provenance : </strong> {{ticket.origin}} </p>
            <p> <strong>CRM - Produits : </strong> {{ticket.crmProducts}} </p>
            <p> <strong>CRM - Perso : </strong> {{ticket.crmPersonal}} </p>
            <p> <strong>CRM - Opt-in : </strong> {{ticket.crmOptIn}} </p>
            <p> <strong>Remarques : </strong> {{ticket.remarks}} </p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-dark"@click="$emit('close')">
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
  name: "modalInfoTicket",
  props: ["ticket"]
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
