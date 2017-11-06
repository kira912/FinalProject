<template>
  <div class="container-fluid">
  <modal-info v-if="isModalInfoOpen" @close="isModalInfoOpen = false" :entity="modalEntity"></modal-info>
  <modal-delete v-if="isModalDeleteOpen" @close="isModalDeleteOpen = false" :entity="modalEntity"></modal-delete>

    <b-button variant="dark" @click.prevent="$router.push('/entity/new')">Créer une entité</b-button>    
    <br><br>
    <table class="table">
      <thead class="color">
        <tr>
          <th>Nom</th>
          <th>Type</th>
          <th>Détails</th>
          <th v-if="currentUser === 'Admin'">Editer</th>
          <th v-else></th>
          <th v-if="currentUser === 'Admin'">Supprimer</th>
          <th v-else></th>
        </tr>
      </thead>
      <tbody v-for='(entity, index) in entities' :key='entity._id'>
        <tr>
          <td> {{entity.name}} </td>
          <td> {{entity.typeEntity}} </td>
          <td>
            <b-button class="btn btn-dark" @click="showModalInfo(entity)">Détails</b-button>
          </td>
          <td>
            <b-button v-if="currentUser.role === 'Admin'" type="button" 
                    @click.prevent='goToEdit(entity._id)'
                    class="button btn-dark">Editer
                    </b-button>
          </td>
          <td>
            <b-button v-if="currentUser.role === 'Admin'" id="show-modal-delete" @click="showModalDelete(entity)" class="btn btn-dark">Supprimer</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { getEntities, getSingleUser, checkUser } from "@/api/auth";
import ModalInfo from "@/components/ModalInfo";
import ModalDelete from "@/components/ModalDelete";
export default {
  components: {
    ModalInfo,
    ModalDelete
  },
  data() {
    return {
      entities: [],
      modalEntity: null,
      currentUser: true,
      isModalInfoOpen: false,
      isModalDeleteOpen: false
    };
  },

  created() {
    checkUser(this.$root);
    if (!this.$root.user) this.$router.push("/404");
    getEntities().then(entities => {
      this.entities = entities;
    });
    getSingleUser(this.$root.user._id).then(user => {
      this.currentUser = user;
    });
  },

  methods: {
    goToEdit(_id) {
      this.$router.push("/entity/" + _id);
    },
    showModalInfo(entity) {
      this.modalEntity = entity;
      this.isModalInfoOpen = true;
    },
    showModalDelete(entity) {
      this.modalEntity = entity;
      this.isModalDeleteOpen = true;
    }
  }
};
</script>

<style scoped>
.color {
  background-color: #bdb76b;
}

button {
  border-radius: 5px;
}
</style>
