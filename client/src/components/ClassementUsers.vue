<template>
  <section>
            <b-table
            :data="users"
            :default-sort-direction="defaultSortDirection"
            default-sort="users.totalTicket">

            <template scope="props">
                <b-table-column field="users.totalTicket" label="Billet Vendu" width="40" sortable numeric>
                    {{ props.row.totalTicket }}
                </b-table-column>

                <b-table-column field="users.firstname" label="Prénoms" sortable>
                    {{ props.row.users.firstname }}
                </b-table-column>
            </template>
        </b-table>
  </section>
</template>

<script>
export default {
  props: ["users"],

  data() {
    return {
      defaultSortDirection: "asc"
    };
  }
};
</script>

<style>

</style>
