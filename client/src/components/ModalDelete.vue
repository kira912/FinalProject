<template>

<!-- Modal delete for User -->
  <transition name="modal">
    <div class="modal-mask">
      <div @click="$emit('close')" class="modal-overlay"></div>
      <div class="modal-wrapper">
        <div class="modal-container" v-if="user">
          <div class="modal-body">
            <slot name="body">
              Voulez-vous supprimer l'utilisateur: {{user.firstname}}
            </slot>
          </div>

          <div class="modal-footer">
            <button class="button btn-dark" @click.prevent='deleteUser()'>
               Oui
            </button>
              <button class="button btn-dark" @click="$emit('close')">
                Non
              </button>
          </div>
        </div>

        <!-- Modal delete for Entity -->
        <div class="modal-container" v-else-if="entity">

          <div class="modal-body">
            <slot name="body">
              Voulez-vous supprimer l'entité: {{entity.name}}
            </slot>
          </div>

          <div class="modal-footer">
            <button class="button btn-dark" @click.prevent='deleteEntity()'>
               Oui
            </button>
              <button class="button btn-dark" @click="$emit('close')">
                Non
              </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
  
</template>

<script>
import { deleteUser, deleteEntity } from "@/api/auth";
export default {
  name: "modalDelete",

  props: ["user", "entity"],

  methods: {
    deleteUser() {
      deleteUser(this.user._id).then(() => {
        this.$router.push("/dashboard");
      });
    },
    deleteEntity() {
      deleteEntity(this.entity._id).then(() => {
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
