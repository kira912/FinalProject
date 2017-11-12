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
  data() {
    return {
      sortBy: "firstname",
      sortDesc: false,
      fields: {
        firstname: { label: "Prénom", sortable: true }
      }
    };
  }
};
</script>

<style>

</style>
