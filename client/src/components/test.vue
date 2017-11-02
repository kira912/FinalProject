<template>
    <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Find a name">
            <b-autocomplete
                v-model="name"
                placeholder="e.g. Anne"
                :keep-first="keepFirst"
                :users="filteredDataObj"
                field="user.firstname"
                @select="option => selected = option">
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
import { getUsers } from "@/api/auth";
export default {
  data() {
    return {
      keepFirst: false,
      name: "",
      selected: null,
      users: []
    };
  },
  created() {
    getUsers().then(user => {
      this.users = user;
    });
  },
  computed: {
    filteredDataObj() {
      return this.users.filter(option => {
        return (
          option.users.firstname
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  }
};
</script>