import Line from "./Line";
import reactiveData from "./reactiveData";
import { getUsers } from "@/api/auth";
export default {
  extends: Line,
  mixins: [reactiveData],
  data() {
    return {
      chartData: ""
    };
  },
  created() {
    this.fillData();
  },

  mounted() {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false
    });

    setInterval(() => {
      this.fillData();
    }, 5000);
  },

  methods: {
    fillData() {
      this.chartData = {
        labels: [
          "Lunid",
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
    },

    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
