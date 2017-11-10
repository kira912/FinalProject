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
      name: "Billets",
      url: "/tickets"
    },
    {
      name: "Ressources Humaines",
      url: "/human-ressources"
    }
  ],

  methods: {
    logout() {
      logout(this.$root);
      this.$router.push("/");
    }
  }
};
