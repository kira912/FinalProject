<template>
  <div>
    <button type="button" class="button is-primary" @click.prevent="$router.push('/entity/new')">Créer une entité</button>    
    <table class="table">
      <thead class="thead-default">
        <tr>
          <th>Nom</th>
          <th>Type</th>
          <th>Directeur</th>
          <th>editer</th>
          <th>supprimer</th>
        </tr>
      </thead>
      <tbody v-for='(entity, index) in entities' :key='entity._id'>
        <tr>
          <td> {{entity.name}} </td>
          <td> {{entity.type}} </td>
          <td>
            <button class="button is-primary" @click="showModalInfo = true">Détails</button>
            <modal-info v-if="showModalInfo" @close="showModalInfo = false" :entity="entity"></modal-info>
          </td>
          <td>
            <button type="button" 
                    @click.prevent='goToEdit(entity._id)'
                    class="button is-primary">Editer
                    </button>
          </td>
          <td>
            <button id="show-modal-delete" @click="showModal = true" class="button is-primary">Supprimer</button>
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
