import Line from "./Line";
import reactiveData from "./reactiveData";
import { getUsers } from "@/api/auth";
export default {
  extends: Line,
  mixins: [reactiveData],
  data() {
    return {
      businessUsers: [],
      chartData: ""
    };
  },
  created() {
    this.fillData();
    getUsers().then(users => {
      this.businessUsers = users.totalBusiness;
    });
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
          "Lundi" + this.getRandomInt(),
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
              {
                x: new Date(),
                y: 1
              },
              {
                t: new Date(),
                y: 10
              }
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
