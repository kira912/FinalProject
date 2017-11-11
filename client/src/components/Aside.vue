<template>
  <aside class="aside-menu container">
    <b-button @click="showTimelineUsers()">Utilisateur</b-button>
    <b-button @click="showTimelineEntities()">Entités</b-button>
    <timeline-creation-users v-if="isTimelineUsersOpen"></timeline-creation-users>
    <timeline-creation-entities v-if="isTimelineEntitiesOpen"></timeline-creation-entities>
  </aside>
</template>

<script>
import TimelineCreationUsers from "@/components/TimelineCreationUsers";
import TimelineCreationEntities from "@/components/TimelineCreationEntities";
import { getUsers } from "@/api/auth";
export default {
  components: {
    TimelineCreationUsers,
    TimelineCreationEntities
  },
  name: "aside",
  data() {
    return {
      users: [],
      currentUser: null,
      isTimelineUsersOpen: false,
      isTimelineEntitiesOpen: false
    };
  },
  created() {
    getUsers().then(users => {
      this.users = users;
    });
  },

  methods: {
    goToProfile(_id) {
      this.$router.push("/profile/" + _id);
    },
    showTimelineUsers() {
      this.isTimelineEntitiesOpen = false;
      this.isTimelineUsersOpen = true;
    },
    showTimelineEntities() {
      this.isTimelineUsersOpen = false;
      this.isTimelineEntitiesOpen = true;
    }
  }
};
</script>

<style scoped>
.scroll {
  overflow-y: auto;
}
</style>
