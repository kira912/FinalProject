<template>
  <aside class="aside-menu scroll container">
    <b-button @click="showTimelineUsers()">Utilisateur</b-button>
    <b-button @click="showTimelineEntities()">Entités</b-button>
    <b-button @click="showTimelineTickets()">Billets</b-button>
    <timeline-creation-users v-if="isTimelineUsersOpen"></timeline-creation-users>
    <timeline-creation-entities v-if="isTimelineEntitiesOpen"></timeline-creation-entities>
    <timeline-creation-tickets v-if="isTimelineTicketsOpen"></timeline-creation-tickets>
  </aside>
</template>

<script>
import TimelineCreationUsers from "@/components/TimelineCreationUsers";
import TimelineCreationEntities from "@/components/TimelineCreationEntities";
import TimelineCreationTickets from "@/components/TimelineCreationTickets";
import { getUsers } from "@/api/auth";
export default {
  components: {
    TimelineCreationUsers,
    TimelineCreationEntities,
    TimelineCreationTickets
  },
  name: "aside",
  data() {
    return {
      users: [],
      currentUser: null,
      isTimelineUsersOpen: false,
      isTimelineEntitiesOpen: false,
      isTimelineTicketsOpen: false
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
    },
    showTimelineTickets() {
      this.isTimelineUsersOpen = false;
      this.isTimelineEntitiesOpen = false;
      this.isTimelineTicketsOpen = true;
    }
  }
};
</script>

<style scoped>
.scroll {
  overflow-y: auto;
}
</style>
