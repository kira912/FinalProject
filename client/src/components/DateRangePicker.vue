<template>
  <div>
    <select class="form-control" v-model="selectedRangeTypes" @change="(event) => {
      dateRangeChanged(event.target.value) }">
      <option v-for="(option, value) in rangeTypeOptions" :value="value">
        {{ option }}
      </option>
    </select>
    <div v-if="selectedRangeTypes === 'custom'">
      <label>
        Du:
        <input type="date" class="form-control" v-model="fromPickedDate">
      </label>
      <label>
        Au:
        <input type="date" class="form-control" v-model="toPickedDate">
      </label>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      props: {
        value: {
          type: Object,
          validator: function(value) {
            if (value === null) {
              return true;
            }

            return (
              "from" in value &&
              value.hasOwnProperty("from") &&
              "to" in value &&
              value.hasOwnProperty("to") &&
              typeof value.from === "Date" &&
              typeof value.to === "Date"
            );
          }
        }
      },
      rangeTypeOptions: {
        yesterday: "Hier",
        today: "Aujourd'hui",
        thisWeek: "Cette semaine",
        lastWeek: "Dernière semaine",
        thisMonth: "Mois actuel",
        lastMonth: "Dernier mois",
        last3Months: "3 derniers mois",
        last6Months: "6 derniers mois",
        custom: "Choisir dates"
      },
      selectedRangeTypes: null,
      fromPickedDate: null,
      toPickedDate: null
    };
  },
  mounted() {
    this.updateComponentWithValue(this.value);
  },
  watch: {
    value: function(newValue) {
      this.updateComponentWithValue(newValue);
    }
  },

  methods: {
    calculateRangeForType(rangeType) {
      switch (this.value.rangeType) {
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
              .endOf("day")
              .toDate()
          };
        case "thisWeek":
          return {
            from: moment()
              .startOf("week")
              .toDate(),
            to: moment()
              .endOf("week")
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
              .endOf("week")
              .toDate()
          };
        case "thisMonth":
          return {
            from: moment()
              .startOf("month")
              .toDate(),
            to: moment()
              .endOf("month")
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
              .endOf("month")
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
              .endOf("month")
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
              .endOf("month")
              .toDate()
          };
        default:
          return null;
      }
    },
    updateComponentWithValue(newValue) {
      if (newValue === null) {
        this.selectedRangeTypes = null;
        this.fromPickedDate = null;
        this.toPickedDate = null;
      } else {
        this.selectedRangeTypes = "custom";
        this.fromPickedDate = newValue.from;
        this.toPickedDate = newValue.to;
      }
    },
    dateRangeChanged(rangeType) {
      var dateRange = this.calculateRangeForType(rangeType);

      this.$emit("input", dateRange);
    }
  }
};
</script>