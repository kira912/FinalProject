<template>
  <div>
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
            <button class="btn btn-primary active mt-3" @click="showModalInfo = true">Détails</button>
            <modal-info v-if="showModalInfo" @close="showModalInfo = false" :entity="entity"></modal-info>
          </td>
          <td>
            <button type="button" 
                    @click.prevent='goToEdit(entity._id)'
                    class="btn btn-primary active mt-3">Editer
                    </button>
          </td>
          <td>
            <button id="show-modal-delete" @click="showModal = true" class="btn btn-primary active mt-3">Supprimer</button>
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
