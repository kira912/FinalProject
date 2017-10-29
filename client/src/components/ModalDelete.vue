<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-body">
            <slot name="body">
              Voulez-vous supprimer l'utilisateur: {{user}}
            </slot>
          </div>

          <div class="modal-footer">
            <button class="btn btn-primary active mt-3" @click.prevent='deleteUser(user._id)'>
               Oui
            </button>
              <button class="btn btn-primary active mt-3" @click="$emit('close')">
                Non
              </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { deleteUser } from "@/api/auth";
export default {
  name: "modalDelete",

  props: {
    user: Object
  },

  methods: {
    deleteUser(id) {
      deleteUser(id).then(user => {
        this.$router.push("/users");
      });
    }
  }
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
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
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
