import Line from "./Line";
import reactiveData from "./reactiveData";
import { getUsers } from "@/api/auth";
export default {
  extends: Line,
  mixins: [reactiveData],
  data() {
    return {
      businessUsers: 0,
      chartData: "",
      totalUsers: 0
    };
  },
  created() {
    this.fillData();
    getUsers().then(users => {
      users.forEach(user => {
        this.totalUsers++;
        if (user.totalBusiness) {
          this.businessUsers += user.totalBusiness;
        }
      });
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
          new Date(Date.now()),
          new Date(Date.now()),
          new Date(Date.now()),
          new Date(Date.now()),
          new Date(Date.now()),
          new Date(Date.now()),
          new Date(Date.now())
        ],
        datasets: [
          {
            label: "Business",
            backgroundColor: "#f87979",
            data: [
              {
                x: new Date(),
                y: 0
              },
              {
                t: new Date(),
                y: this.businessUsers / this.totalUsers
              }
            ]
          }
        ]
      };
    }
  }
};
