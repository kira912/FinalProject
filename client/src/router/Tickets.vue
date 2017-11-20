<template>
  <div class="container-fluid">
    <notifications group="custom-template"
                   :duration="5000"
                   :width="500"
                   animation-name="v-fade-left"
                   position="top left">
    </notifications>
    <button type="button" class="btn btn-dark" @click.prevent="$router.push('/ticket/new')">Créer un billet</button>
    <br><br>
    <table class="table">
      <thead>
        <tr>
          <th>Départ</th>
          <th>Arrivée</th>
          <th>Détails</th>
        </tr>
      </thead>
      <tbody v-for='(ticket, index) in tickets' :key='ticket._id'>
        <tr>
          <td> {{ticket.firstname}} </td>
          <td> {{ticket.lastname}} </td>
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
import { checkUser } from "@/api/auth";
import { getTickets } from "@/api/tickets";
export default {
  components: {
    ModalInfoTicket
  },

  data() {
    return {
      tickets: [],
      modalTicket: null,
      isModalInfoOpen: false,
      animation: {
        enter: {
          opacity: [1, 0],
          translateX: [0, -300],
          scale: [1, 0.2]
        },
        leave: {
          opacity: 0,
          height: 0
        }
      }
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

