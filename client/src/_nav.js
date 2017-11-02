export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard"
    },
    {
      name: "Entités",
      url: "/entities",
      role: "Admin"
    },
    {
      name: "Utilisateurs",
      url: "/users"
    },
    {
      name: "Tickets",
      url: "/tickets"
    }
  ],

  methods: {
    logout() {
      logout(this.$root);
      this.$router.push("/");
    }
  }
};
