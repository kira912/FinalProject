<template>
  <div>
  <modal-info v-if="isModalInfoOpen" @close="isModalInfoOpen = false" :entity="modalEntity"></modal-info>
  <modal-delete v-if="isModalDeleteOpen" @close="isModalDeleteOpen = false" :entity="modalEntity"></modal-delete>

    <b-button variant="dark" @click.prevent="$router.push('/entity/new')">Créer une entité</b-button>    
    <br><br>
    <table class="table">
      <thead class="color">
        <tr>
          <th>Nom</th>
          <th>Type</th>
          <th>Directeur</th>
          <th v-if="$root.user.role === 'Admin'">Editer</th>
          <th v-else></th>
          <th>Supprimer</th>
        </tr>
      </thead>
      <tbody v-for='(entity, index) in entities' :key='entity._id'>
        <tr>
          <td> {{entity.name}} </td>
          <td> {{entity.type}} </td>
          <td>
            <button class="btn btn-dark" @click="showModalInfo(entity)">Détails</button>
          </td>
          <td>
            <button type="button" 
                    @click.prevent='goToEdit(entity._id)'
                    class="button is-dark">Editer
                    </button>
          </td>
          <td>
            <button id="show-modal-delete" @click="showModalDelete(entity)" type="button" class="btn btn-dark">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { getEntities } from "@/api/auth";
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
      isModalInfoOpen: false,
      isModalDeleteOpen: false
    };
  },

  created() {
    getEntities().then(entities => {
      this.entities = entities;
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
