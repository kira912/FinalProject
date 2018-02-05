<template>
  <div class="container-fluid">
    <widgetsrh-manager v-if="manager"></widgetsrh-manager>
    <widgetsrh-users v-else-if="employe"></widgetsrh-users>
    <!-- <users-directories v-if="$root.user.role === 'Manager' || $root.user.role === 'Admin'"></users-directories> -->
    <div class="center">
      <collapse-button type="Documents publics" content="Réglement Intérieur"></collapse-button>
      <collapse-button type="Documents privés" content="Fiche de paie"></collapse-button>
    </div>
    <div>
      <table class="table" v-if="currentUser.role === 'Manager' || currentUser.role === 'Admin'">
      <thead class="color">
        <tr>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Satuts</th>
        </tr>
      </thead>
      <tbody v-for="(request, index) in allRequestVacation" :key="request._id">
        <tr>
          <td> {{request.start}} </td>
          <td> {{request.end}} </td>
          <td> {{request.status}} </td>
          <td>
            <b-button v-if="request.status === 'Refusé' || request.status === 'En attente'" variant="success" 
              @click="validateRequest(request._id), request.status = 'Validé'">
              Accepté
            </b-button>
          </td>
          <td>
            <b-button v-if="request.status === 'Validé' || request.status === 'En attente'" variant="danger"
              @click="refuseRequest(request._id), request.status = 'Refusé'">
              Refusé
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>  
</template>

<script>
import WidgetsrhManager from "@/components/WidgetsrhManager";
import WidgetsrhUsers from "@/components/WidgetsrhUsers";
import UsersDirectories from "@/components/UsersDirectories";
import CollapseButton from "@/components/CollapseButton";
import { getSingleUser } from "@/api/users";
import { getVacation, editRequestVacation } from "@/api/vacations";
import { checkUser } from "@/api/auth";
export default {
  components: {
    WidgetsrhManager,
    WidgetsrhUsers,
    UsersDirectories,
    CollapseButton
  },

  data() {
    return {
      currentUser: [],
      toggleSuccess: false,
      successStatus: "Validé",
      toggleRefuse: false,
      refuseStatus: "Refusé",
      allRequestVacation: [],
      manager: false,
      employe: false
    };
  },

  created() {
    getSingleUser(this.$root.user._id).then(user => {
      this.currentUser = user;
      if (user.role === "Manager" || user.role === "Admin") {
        this.manager = true;
      } else if (user.role === "Vendeur") {
        this.employe = true;
      }
    });
    getVacation().then(requests => {
      this.allRequestVacation = requests;
      requests.forEach(request => {
        if (request.status === "Validé") {
          this.toggleSuccess = true;
          this.toggleRefuse = false;
        } else if (request.status === "Refusé") {
          this.toggleRefuse = true;
          this.toggleSuccess = false;
        }
      });
    });
  },
  methods: {
    validateRequest(id) {
      editRequestVacation(id, { status: this.successStatus });
      this.toggleRefuse = false;
    },
    refuseRequest(id) {
      editRequestVacation(id, { status: this.refuseStatus });
      this.toggleSuccess = false;
    }
  }
};
</script>
