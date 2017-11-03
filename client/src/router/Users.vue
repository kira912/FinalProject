<template>
  <div>
    <modal-info v-if="isModalInfoOpen" @close="isModalInfoOpen = false" :user="modalUser"></modal-info>
    <modal-delete v-if="isModalDeleteOpen" @close="isModalDeleteOpen = false" :user="modalUser"></modal-delete>
    <b-button variant="dark" @click.prevent="$router.push('/user/new')">Créer un utilisateur</b-button>
    <table class="table">
      <thead class="color">
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Détails</th>
          <th>Editer</th>
          <th>Supprimer</th>
        </tr>
      </thead>
      <tbody v-for='(user, index) in users' :key='user._id'>
        <tr>
          <td> {{user.firstname}} </td>
          <td> {{user.lastname}} </td>
          <td>
            <b-button variant="dark" @click="showModalInfo(user)">Détails</b-button>
          </td>
          <td>
            <b-button  variant="dark"
              @click.prevent='goToEdit(user._id)'
              >Editer
            </b-button>
          </td>
          <td>
            <b-button id="show-modal-delete" @click="showModalDelete(user)" variant="dark">Supprimer</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getUsers } from "@/api/auth";
import ModalDelete from "@/components/ModalDelete";
import ModalInfo from "@/components/ModalInfo";
export default {
  components: {
    ModalDelete,
    ModalInfo
  },

  data() {
    return {
      users: [],
      modalUser: null,
      isModalInfoOpen: false,
      isModalDeleteOpen: false
    };
  },

  created() {
    getUsers().then(user => {
      this.users = user;
    });
  },

  methods: {
    goToEdit(_id) {
      this.$router.push("/user/" + _id);
    },
    showModalInfo(user) {
      this.modalUser = user;
      this.isModalInfoOpen = true;
    },
    showModalDelete(user) {
      this.modalUser = user;
      this.isModalDeleteOpen = true;
    }
  }
};
</script>

<style scoped>
.color {
  background-color: #bdb76b;
}
</style>
    
