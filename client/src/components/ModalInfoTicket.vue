<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
            <h5>Données du billet</h5>
            </slot>
          </div>
          <div class="modal-body">
            <p> <strong>Départ: </strong> {{ticket.start}}</p>
            <p> <strong>:Arrivée </strong> {{ticket.end}} </p>
            <p> <strong>Prix: </strong> {{ticket.price}} </p>
            <p> <strong>Date: </strong> {{ticket.date}} </p>
            <p> <strong>Catégorie: </strong> {{ticket.category}} </p>
            <p> <strong>Clients: </strong> {{ticket.client}} </p>
          </div>
          <div class="modal-footer">
            <button class="button dark" @click="$emit('close')">
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
