<template>
  <div class="animated fadeIn">
    <button type="button" class="btn btn-primary active mt-3" @click.prevent="$router.push('/user/new')">Créer utilisateur</button>
    <div class="row">
      <div class="col-lg-6">
        <b-card>
          <table class="table">
            <thead>
              <tr>
                <th>Prénom</th>
                <th>Nom</th>
              </tr>
            </thead>
            <tbody v-for='(user, index) in users' :key='user._id' :user="user">
              <tr>
                <td>{{user.firstname}}</td>
                <td>{{user.lastname}}</td>
                <td><v-expansion-panel>
                  <v-expansion-panel-content hide-actions>
                    <div slot="header">Voir détails de l'utilisateur</div>
                    <v-card>
                      <v-card-text class="grey lighten-3">
                        <h2>Données de l'utilisateur</h2>
                        <p> <strong>Prénom: </strong> {{user.firstname}}</p>
                        <p> <strong>Nom de famille: </strong> {{user.lastname}} </p>
                        <p> <strong>Civilité: </strong> {{user.civility}} </p>
                        <p> <strong>Date de Naissance: </strong> {{user.birthDate}} </p>
                        <p> <strong>Adresse: </strong> {{user.address}} </p>
                        <p> <strong>Ville: </strong> {{user.city}} </p>
                        <p> <strong>Pays: </strong> {{user.country}} </p>
                        <p> <strong>Code Postal: </strong> {{user.codePostal}} </p>
                        <p> <strong>Numéro de téléphone: </strong> {{user.telNumber}} </p>
                        <p> <strong>Email: </strong> {{user.email}} </p>

                        <h2>Données professionncelles</h2>
                        <p> <strong>Entité de rattachement: </strong> {{user.entityAttachment}} </p>
                        <p> <strong>Fonction (emploi): </strong> {{user.functionJob}} </p>
                        <p> <strong>Contrat de travail: </strong> {{user.contract}} </p>
                        <p> <strong>Salaire annuel (brut): </strong> {{user.annualSalary}} </p>
                        <p> <strong>Date d'entrée dans l'entreprise: </strong> {{user.entryBusiness}} </p>
                        <p> <strong>Date de début d'activité: </strong> {{user.startActivity}} </p>
                        <p> <strong>Date de fin de contrat: </strong> {{user.endBusiness}} </p>
                        <p> <strong>Email professionnel: </strong> {{user.professionalEmail}} </p>
                        <p> <strong>Date de fin de contrat: </strong> {{user.endBusiness}} </p>
                        <p> <strong>Email professionnel: </strong> {{user.professionalEmail}} </p>
                        <p> <strong>Téléphone professionnel: </strong> {{user.professionalNumber}} </p>
                        
                        <h2>Données bancaires</h2>
                        <p> <strong>Banque: </strong> {{user.bank}} </p>
                        <p> <strong>Adresse de la banque: </strong> {{user.addressBank}}, {{user.cityBank}}, {{user.codePostalBank}} </p>
                        <p> <strong>Titulaire du compte</strong> {{user.ownerCount}} </p>
                        <p> <strong>IBAN: </strong> {{user.iban}} </p>
                        <p> <strong>Code BIC / SWIFT</strong> {{user.codeBic}} </p>

                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                </td>
                <td><button type="button"
                 @click.prevent='goToEdit(user._id)'
                  class="btn btn-primary active mt-3">Editer
                  </button>
                </td>
                <td>
                  <button id="show-modal-delete" @click="showModal = true" class="btn btn-primary active mt-3">Supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </div>
    </div>
    <modal-delete v-if="showModal" @close="showModal = false"></modal-delete>
  </div>
</template>

<script>
import { getUsers } from "@/api/auth";
import ModalDelete from "@/components/ModalDelete";
export default {
  components: {
    ModalDelete
  },

  data() {
    return {
      props: ["users"],
      users: [],
      showModal: false
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
