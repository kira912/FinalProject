<template>
<div class="container">
  <widgets-admin v-if="admin"></widgets-admin>
  <widgets-users v-else-if="employe"></widgets-users>
  <widgets-manager v-else-if="manager"></widgets-manager>
  <date-picker v-model="time1" range lang="fr" format="dd-MM-yyyy" :shortcuts="shortcuts"></date-picker>
  <div v-if="moment(currentUser.updatedAt).format('DD MM YYYY') === moment(time1[0]).format('DD MM YYYY')">
    <widgets class="row d-flex justify-content-around" :data="currentUser.totalBusiness" text="Total du business enregistré (total de votre compte)"></widgets>
  </div>
  <classement-users :users="users"></classement-users>
    <div class="Chart">
      <h1 style="text-align:center;">Linechart</h1>
      <line-charts :chart-data="datacollection"></line-charts>
    </div>
</div>
</template>

<script>
import moment from "moment";
import Widgets from "@/components/Widgets";
import DatePicker from "vue2-datepicker";
import LineCharts from "@/components/charts/LineCharts";
import WidgetsAdmin from "@/components/WidgetsAdmin";
import WidgetsUsers from "@/components/WidgetsUsers";
import WidgetsManager from "@/components/WidgetsManager";
import ClassementUsers from "@/components/ClassementUsers";
import {
  getSingleUser,
  getUsers,
  getEntities,
  getTickets,
  checkUser
} from "@/api/auth";
export default {
  components: {
    WidgetsAdmin,
    WidgetsUsers,
    WidgetsManager,
    ClassementUsers,
    LineCharts,
    DatePicker,
    Widgets
  },

  data() {
    return {
      time1: "",
      shortcuts: [
        {
          text: "Aujourd'hui",
          start: new Date(),
          end: new Date()
        },
        {
          text: "Hier",
          start: new Date(new Date().setDate(new Date().getDate() - 1)),
          end: new Date(new Date().setDate(new Date().getDate() - 1))
        },
        {
          text: "Cette semaine",
          start: new Date(new Date().setDate(new Date().getDate() - 7)),
          end: new Date()
        },
        {
          text: "La semaine dernière",
          start: new Date(new Date().setDate(new Date().getDate() - 14)),
          end: new Date(new Date().setDate(new Date().getDate() - 7))
        }
      ],
      currentUser: [],
      admin: false,
      employe: false,
      manager: false,
      keepFirst: false,
      users: [],
      entities: [],
      tickets: [],
      dataPoints: null,
      height: 20,
      datacollection: null
    };
  },

  mounted() {
    this.fillData();
  },

  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  },
  created() {
    checkUser(this.$root);
    if (!this.$root.user) this.$router.push("/404");
    getSingleUser(this.$root.user._id).then(user => {
      this.currentUser = user;

      if (user.role === "Admin" || user.role === "Directeur") {
        this.admin = true;
      } else if (user.role === "Vendeur") {
        this.employe = true;
      } else if (user.role === "Manager") {
        this.manager = true;
      }
    });
    getUsers().then(users => {
      this.users = users;
    });
    getEntities().then(entities => {
      this.entities = entities;
    });
    getTickets().then(tickets => {
      this.tickets = tickets;
    });
  },
  filters: {
    moment: function(date) {
      return moment(date).format("DD MM YYYY");
    }
  }
};
</script>

<style scoped>
.result-search {
  border: 1px solid black;
  text-align: center;
  background-color: #192b41;
  color: white;
  width: 20%;
  border-radius: 5px;
}

.container {
  margin: 0 auto;
}
h1 {
  font-family: "Helvetica", Arial;
  color: #464646;
  text-transform: uppercase;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 15px;
  font-size: 28px;
  margin-top: 0;
}
.Chart {
  padding: 20px;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  margin: 50px 0;
}
</style>