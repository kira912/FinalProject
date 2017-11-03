import Line from "./Line";
import { getUsers } from "@/api/auth";
export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Lundi",
          "Mardi",
          "Mercredi",
          "Jeudi",
          "Vendredi",
          "Samedi",
          "Dimanche"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: ["1", "45"]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },

  data() {
    return {
      users: []
    };
  },

  created() {
    getUsers().then(user => {
      this.users = user;
    });
  }
};
