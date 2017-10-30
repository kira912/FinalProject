<template>
<div class="animated fadeIn">
    <button type="button" class="btn btn-primary active mt-3" @click.prevent="$router.push('/ticket/new')">Créer un ticket</button>
    <div class="row">
      <div class="col-lg-6">
        <b-card>
          <table class="table">
            <thead>
              <tr>
                <th>Ticket</th>
              </tr>
            </thead>
            <tbody v-for='(ticket, index) in tickets' :key='ticket._id'>
              <tr>
                <td>{{ticket.start}}</td>
                <td><v-expansion-panel>
                  <v-expansion-panel-content hide-actions>
                    <div slot="header">Voir détail du ticket</div>
                    <v-card>
                      <v-card-text class="grey lighten-3">
                        <h2>Détails du ticket</h2>
                        <p> <strong>Départ: </strong> {{ticket.start}} </p>
                        <p><strong>Arrivée: </strong> {{ticket.end}} </p>
                        <p><strong>Date: </strong> {{ticket.date}} </p>
                        <p><strong>Prix: </strong> {{ticket.price}} € </p>
                        <p><strong>Categorie: </strong> {{ticket.category}} </p>
                        <p><strong>Client: </strong> {{ticket.client}} </p>
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                </td>

                <td><button type="button" @click.prevent='getSingleEntity(entity._id)' class="btn btn-primary active mt-3">Editer</button></td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getTickets, getSingleTicket } from "@/api/auth";
export default {
  data() {
    return {
      tickets: []
    };
  },

  created() {
    getTickets().then(tickets => {
      this.tickets = tickets;
    });
  },
  methods: {
    gotToTicket(_id) {
      this.$router.push("/ticket/" + _id);
    }
  }
};
</script>

<style>

</style>
