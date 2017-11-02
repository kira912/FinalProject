<template>
  <div>
    <button type="button" class="button is-primary" @click.prevent="$router.push('/user/new')">Créer un utilisateur</button>
    <table class="table">
      <thead class="thead-default">
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Détails</th>
          <th>editer</th>
          <th>supprimer</th>
        </tr>
      </thead>
      <tbody v-for='(user, index) in users' :key='user._id'>
        <tr>
          <td> {{user.firstname}} </td>
          <td> {{user.lastname}} </td>
          <td>
            <button class="button is-primary" @click="showModalInfo = true">Détails</button>
            <modal-info v-if="showModalInfo" @close="showModalInfo = false" :user="user"></modal-info>
          </td>
          <td>
            <button type="button" 
                    @click.prevent='goToEdit(user._id)'
                    class="button is-primary">Editer
                    </button>
          </td>
          <td>
            <button id="show-modal-delete" @click="showModal = true" class="button is-primary">Supprimer</button>
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
                        
