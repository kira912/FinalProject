<template>
  <div class="container-fluid">
    <notifications group="custom-template"
                   :duration="5000"
                   :width="500"
                   animation-name="v-fade-left"
                   position="top left">
    </notifications>
    <modal-info v-if="isModalInfoOpen" @close="isModalInfoOpen = false" :user="modalUser"></modal-info>
    <modal-delete v-if="isModalDeleteOpen" @close="isModalDeleteOpen = false" :user="modalUser"></modal-delete>
    <b-button variant="dark" class="position" @click.prevent="$router.push('/user/new')">Créer un utilisateur</b-button>
    <br><br>
    <table class="table">
      <thead class="color">
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Détails</th>
          <th v-if="currentUser.role === 'Admin'">Editer</th>
          <th v-else></th>
          <th v-if="currentUser.role === 'Admin'">Supprimer</th>
          <th v-else></th>
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
            <b-button v-if="currentUser.role === 'Admin'"  variant="dark"
              @click.prevent='goToEdit(user._id)'
              >Editer
            </b-button>
          </td>
          <td>
            <b-button v-if="currentUser.role === 'Admin'" id="show-modal-delete" @click="showModalDelete(user)" variant="dark">Supprimer</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getUsers, getSingleUser, checkUser } from "@/api/auth";
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
      currentUser: true,
      isModalInfoOpen: false,
      isModalDeleteOpen: false,
      animation: {
        enter: {
          opacity: [1, 0],
          translateX: [0, -300],
          scale: [1, 0.2]
        },
        leave: {
          opacity: 0,
          height: 0
        }
      }
    };
  },

  created() {
    checkUser(this.$root);
    if (!this.$root.user) this.$router.push("/404");
    getUsers().then(user => {
      this.users = user;
    });
    getSingleUser(this.$root.user._id).then(actualUser => {
      this.currentUser = actualUser;
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

