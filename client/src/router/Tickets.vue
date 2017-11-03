<template>
  <div>
    <button type="button" class="btn btn-dark" @click.prevent="$router.push('/ticket/new')">Créer un billet</button>
    <table class="table">
      <thead class="color">
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
            <button class="btn btn-dark" @click="showModal = true">Détails</button>
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
  }
};
</script>

<style scoped>
.color {
  background-color: #bdb76b;
}
</style>

