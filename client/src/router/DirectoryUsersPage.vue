<template>
  <div>
    <modal-info v-if="isModalInfoOpen" @close="isModalInfoOpen = false" :user="modalUser"></modal-info>
    <table class="table">
      <thead class="color">
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Détails</th>
          <th>Editer</th>
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
            <b-button variant="dark"
              @click.prevent='goToEdit(user._id)'
              >Editer
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>  
  </div>
</template>

<script>
import { getUsers } from "@/api/auth";
import ModalInfo from "@/components/ModalInfo";
export default {
  components: {
    ModalInfo
  },
  data() {
    return {
      isModalInfoOpen: false,
      modalUser: null,
      users: []
    };
  },
  created() {
    getUsers().then(users => {
      this.users = users;
    });
  },
  methods: {
    showModalInfo(user) {
      this.modalUser = user;
      this.isModalInfoOpen = true;
    }
  }
};
</script>

<style>

</style>
