<template>
  <div>
    <div class="filter">
      <date-range-picker v-model="selectedDateRange"></date-range-picker>
    </div>
    <div class="result">
      Selected range: <strong v-if="selectedDateRange"> {{selectedDateRange.from}} ~ {{selectedDateRange.to}} </strong>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import DateRangePicker from "@/components/DateRangePicker";
export default {
  components: {
    DateRangePicker
  },

  data() {
    return {
      selectedDateRange: null
    };
  },

  computed: {
    selectedDateRangeFormatted() {
      if (this.selectedDateRange) {
        return (
          moment(this.selectedDateRange.from).format("LLT") +
          " - " +
          moment(this.selectedDateRange.to).format("LLT")
        );
      } else {
        return "None";
      }
    }
  }
};
</script>

<style>

</style>
