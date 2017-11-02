<template>
  <div>
    <button type="button" class="button is-dark" @click.prevent="$router.push('/entity/new')">Créer une entité</button>    
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
            <button class="button is-dark" @click="showModalInfo = true">Détails</button>
            <modal-info v-if="showModalInfo" @close="showModalInfo = false" :entity="entity"></modal-info>
          </td>
          <td>
            <button v-if="$root.user.role === 'Admin'" type="button" 
                    @click.prevent='goToEdit(entity._id)'
                    class="button is-dark">Editer
                    </button>
          </td>
          <td>
            <button id="show-modal-delete" @click="showModal = true" class="button is-dark">Supprimer</button>
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
    ModalInfo
  },
  data() {
    return {
      entities: [],
      showModal: false,
      showModalInfo: false
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
    }
  }
};
</script>

<style scoped>
.color {
  background-color: #bdb76b;
}
</style>
