<template>
  <div>
  <div>
    <b-table :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :items="users"
             :fields="fields">
    </b-table>
  </div>
</div>
</template>

<script>
export default {
  props: ["users"],
  data() {
    return {
      sortBy: "totalTicket",
      sortDesc: false,
      fields: [
        { key: "totalTicket", sortable: true },
        { key: "totalBusiness", sortable: true },
        { key: "firstname", sortable: true }
      ]
    };
  }
};
</script>

