<template>
  <div>
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
            <b-button variant="dark" @click="showModalInfo = true">Détails</b-button>
            <modal-info v-if="showModalInfo" @close="showModalInfo = false" :user="user"></modal-info>
          </td>
          <td>
            <b-button 
              @click.prevent='goToEdit(user._id)'
              variant="dark">Editer
            </b-button>
          </td>
          <td>
            <b-button id="show-modal-delete" @click="showModal = true" variant="dark">Supprimer</b-button>
            <modal-delete v-if="showModal" @close="showModal = false" :user="user"></modal-delete>
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
      showModal: false,
      showModalInfo: false
    };
  },

  created() {
    getUsers().then(users => {
      this.users = users;
    });
  },

  methods: {
    goToEdit(_id) {
      this.$router.push("/user/" + _id);
    }
  }
};
</script>

<style scoped>
.color {
  background-color: #bdb76b;
}
</style>
    
