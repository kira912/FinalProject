<template>
<div>
  <widgets-admin v-if="admin"></widgets-admin>
  <widgets-users v-else-if="employe"></widgets-users>
  <auto-complete :options="users"   @select="onOptionSelect">
    <template slot="item" scope="option">
      <article class="media">
         <router-link :to="'/profile/' + option._id">
      <p>
        <strong>{{ option.firstname }}</strong>
        {{ option.lastname }}
        </p>
        <img class="rounded-circle" :src="option.profilePic" width="20%" />
         </router-link>
      </article>
    </template>
  </auto-complete>
  <classement-users :users="users"></classement-users>
    <div class="container">
          <div class="Chart">
      <h1 style="text-align:center;">Linechart</h1>
      <line-charts></line-charts>
    </div>
      <!-- <canvas id="myChart" width="400" height="400"></canvas> -->
    </div>

</div>
</template>

<script>
import LineCharts from "@/components/charts/LineCharts";

import AutoComplete from "@/components/AutoComplete";
import WidgetsAdmin from "@/components/WidgetsAdmin";
import WidgetsUsers from "@/components/WidgetsUsers";
import ClassementUsers from "@/components/ClassementUsers";
import { getSingleUser, getUsers, getEntities, getTickets } from "@/api/auth";
export default {
  components: {
    WidgetsAdmin,
    WidgetsUsers,
    ClassementUsers,
    AutoComplete,
    LineCharts
  },
  data() {
    return {
      navItems: [],
      admin: false,
      employe: false,
      keepFirst: false,
      users: [],
      entities: [],
      tickets: [],
      dataPoints: null,
      height: 20
    };
  },

  mounted() {
    setInterval(() => {
      this.fillData();
    }, 2000);
  },

  methods: {
    // Autocomplete
    onOptionSelect(option) {
      console.log("Selected option:", option);
    },
    onInput(value) {
      this.isOpen = !!value;
      this.highlightedPosition = 0;
    },

    // Charts
    increaseHeight() {
      this.height += 10;
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    fillData() {
      this.dataPoints = {
        labels: [
          "January" + this.getRandomInt(),
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          }
        ]
      };
    }
  },
  computed: {
    myStyles() {
      return {
        height: `${this.height}px`,
        position: "relative"
      };
    }
  },
  created() {
    getSingleUser(this.$root.user._id).then(user => {
      if (user.role === "Admin") {
        this.admin = true;
      } else if (user.role === "Vendeur" || user.role === "Directeur") {
        this.employe = true;
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
  max-width: 800px;
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