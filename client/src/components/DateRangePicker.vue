<template>
  <div>
    <select @change="(event) => {
      dateRangeChanged(event.target.value) }">
      <option v-for="(option, value) in rangeTypeOptions" :value="value">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      from: [Date],
      to: [Date],
      rangeTypeOptions: {
        yesterday: "Hier",
        today: "Aujourd'hui",
        thisWeek: "Cette semaine",
        lastWeek: "Dernière semaine",
        thisMonth: "Mois actuel",
        lastMonth: "Dernier mois",
        last3Months: "3 derniers mois",
        last6Months: "6 derniers mois"
      }
    };
  },

  mrthods: {
    calculateRangeForType(rangeType) {
      switch (value.rangeType) {
        case "yesterday":
          return {
            from: moment()
              .subtract(1, "day")
              .startOf("day")
              .toDate(),
            to: moment()
              .subtract(1, "day")
              .startOf("day")
              .toDate()
          };
        case "today":
          return {
            from: moment()
              .startOf("day")
              .toDate(),
            to: moment()
              .startOf("day")
              .toDate()
          };
        case "thisWeek":
          return {
            from: moment()
              .startOf("week")
              .toDate(),
            to: moment()
              .startOf("week")
              .toDate()
          };
        case "lastWeek":
          return {
            from: moment()
              .subtract(1, "week")
              .startOf("week")
              .toDate(),
            to: moment()
              .subtract(1, "week")
              .startOf("week")
              .toDate()
          };
        case "thisMonth":
          return {
            from: moment()
              .startOf("month")
              .toDate(),
            to: moment()
              .startOf("month")
              .toDate()
          };
        case "lastMonth":
          return {
            from: moment()
              .subtract(1, "month")
              .startOf("month")
              .toDate(),
            to: moment()
              .subtract(1, "month")
              .startOf("month")
              .toDate()
          };
        case "last3Months":
          return {
            from: moment()
              .subtract(3, "month")
              .startOf("month")
              .toDate(),
            to: moment()
              .subtract(3, "month")
              .startOf("month")
              .toDate()
          };
        case "last6Months":
          return {
            from: moment()
              .subtract(6, "month")
              .startOf("month")
              .toDate(),
            to: moment()
              .subtract(6, "month")
              .startOf("month")
              .toDate()
          };
        default:
          return null;
      }
    },
    dateRangeChanged(rangeType) {
      let dateRange = this.calculateRangeForType(rangeType);

      this.$emit("input", dateRange);
    }
  }
};
</script>