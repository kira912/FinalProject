<template>
  <div>
    <button type="button" class="button is-primary" @click.prevent="$router.push('/user/new')">Créer un billet</button>
    <table class="table">
      <thead class="thead-default">
        <tr>
          <th>Départ</th>
          <th>Arrivée</th>
          <th>Détails</th>
        </tr>
      </thead>
      <tbody v-for='(ticket, index) in tickets' :key='ticket._id'>
        <tr>
          <td> {{ticket.start}} </td>
          <td> {{ticket.end}} </td>
          <td>
            <button class="button is-primary" @click="showModal = true">Détails</button>
            <modal-info-ticket v-if="showModal" @close="showModal = false" :ticket="ticket"></modal-info-ticket>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ModalInfoTicket from "@/components/ModalInfoTicket";
import { getTickets } from "@/api/auth";
export default {
  components: {
    ModalInfoTicket
  },

  data() {
    return {
      tickets: [],
      showModal: false
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


                      <h2>Détails du ticket</h2>
                        <p> <strong>Départ: </strong> {{ticket.start}} </p>
                        <p><strong>Arrivée: </strong> {{ticket.end}} </p>
                        <p><strong>Date: </strong> {{ticket.date}} </p>
                        <p><strong>Prix: </strong> {{ticket.price}} € </p>
                        <p><strong>Categorie: </strong> {{ticket.category}} </p>
                        <p><strong>Client: </strong> {{ticket.client}} </p>