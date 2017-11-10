<template>
  <div class="container-fluid">
    <button type="button" class="btn btn-dark" @click.prevent="$router.push('/ticket/new')">Créer un billet</button>
    <br><br>
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
            <button class="btn btn-dark" @click="showModalInfo(ticket)">Détails</button>
            <modal-info-ticket v-if="isModalInfoOpen" @close="isModalInfoOpen = false" :ticket="modalTicket"></modal-info-ticket>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ModalInfoTicket from "@/components/ModalInfoTicket";
import { getTickets, checkUser } from "@/api/auth";
export default {
  components: {
    ModalInfoTicket
  },

  data() {
    return {
      tickets: [],
      modalTicket: null,
      isModalInfoOpen: false
    };
  },

  created() {
    checkUser(this.$root);
    if (!this.$root.user) this.$router.push("/404");
    getTickets().then(tickets => {
      this.tickets = tickets;
    });
  },

  methods: {
    showModalInfo(ticket) {
      this.modalTicket = ticket;
      this.isModalInfoOpen = true;
    }
  }
};
</script>

