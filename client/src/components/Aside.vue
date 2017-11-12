<template>
  <aside class="aside-menu scroll container">
    <ul>
      <li><a variant="primary" @click="showTimelineUsers()">Utilisateur</a></li>
      <li><a variant="primary" @click="showTimelineEntities()">Entités</a></li>
      <li><a variant="primary" @click="showTimelineTickets()">Billets</a></li>
      <li><a variant="primary" @click="showContactsAside()">Contacts</a></li>
    </ul>
    <timeline-creation-users v-if="isTimelineUsersOpen"></timeline-creation-users>
    <timeline-creation-entities v-if="isTimelineEntitiesOpen"></timeline-creation-entities>
    <timeline-creation-tickets v-if="isTimelineTicketsOpen"></timeline-creation-tickets>
    <contacts-aside v-if="isContactsAsideOpen"></contacts-aside>
  </aside>
</template>

<script>
import TimelineCreationUsers from "@/components/TimelineCreationUsers";
import TimelineCreationEntities from "@/components/TimelineCreationEntities";
import TimelineCreationTickets from "@/components/TimelineCreationTickets";
import ContactsAside from "@/components/ContactsAside";
import { getUsers } from "@/api/auth";
export default {
  components: {
    TimelineCreationUsers,
    TimelineCreationEntities,
    TimelineCreationTickets,
    ContactsAside
  },
  name: "aside",
  data() {
    return {
      users: [],
      currentUser: null,
      isTimelineUsersOpen: false,
      isTimelineEntitiesOpen: false,
      isTimelineTicketsOpen: false,
      isContactsAsideOpen: false
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
      this.isTimelineTicketsOpen = false;
      this.isTimelineEntitiesOpen = false;
      this.isContactsAsideOpen = false;
      this.isTimelineUsersOpen = true;
    },
    showTimelineEntities() {
      this.isTimelineTicketsOpen = false;
      this.isContactsAsideOpen = false;
      this.isTimelineUsersOpen = false;
      this.isTimelineEntitiesOpen = true;
    },
    showTimelineTickets() {
      this.isTimelineUsersOpen = false;
      this.isContactsAsideOpen = false;
      this.isTimelineEntitiesOpen = false;
      this.isTimelineTicketsOpen = true;
    },
    showContactsAside() {
      this.isTimelineUsersOpen = false;
      this.isTimelineEntitiesOpen = false;
      this.isTimelineTicketsOpen = false;
      this.isContactsAsideOpen = true;
    }
  }
};
</script>

<style scoped>
.scroll {
  padding: 2em 1em;
  overflow-y: auto;
  background-color: #333;
}
ul {
  display: table;
  width: 30em;
  padding: 0;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
}
ul li {
  display: table-cell;
  color: white;
}

ul li a {
  display: block;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
  padding: 5% 0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: all 0.3s;
}

ul li:first-child a {
  border-radius: 3px 0 0 3px;
}
ul li:last-child a {
  border-radius: 0 3px 3px 0;
}

ul li a:hover,
ul li a:focus {
  background: rgba(255, 255, 255, 0.2);
}

ul li a:active {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3) inset;
}
</style>
