<template>
  <div>
    <div class="classement">
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
      fields: {
        totalTicket: { label: 'Billets vendu', sortable: true },
        totalBusiness: { label: "Chiffre d'affaire", sortable: true },
        firstname: { label: "Prénom", sortable: true }
      }
    };
  }
};
</script>

