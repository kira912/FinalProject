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
    },
    {
      name: "Business",
      url: "/business"
    }
  ],

  methods: {
    logout() {
      logout(this.$root);
      this.$router.push("/");
    }
  }
};
