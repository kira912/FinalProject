<template>
  <section>
            <b-table
            :data="users"
            :default-sort-direction="defaultSortDirection"
            default-sort="users.totalTicket">

            <template scope="props">
                <b-table-column field="id" label="ID" width="40" sortable numeric>
                    {{ users.totalTIcket }}
                </b-table-column>

                <b-table-column field="users.firstname" label="First Name" sortable>
                    {{ props.row.users.firstname }}
                </b-table-column>

                <b-table-column label="Gender">
                    <b-icon pack="fa"
                        :icon="props.row.users.civility === 'Male' ? 'mars' : 'venus'">
                    </b-icon>
                    {{ props.row.users.civility }}
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
