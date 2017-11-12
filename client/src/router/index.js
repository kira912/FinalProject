import Vue from "vue";
import Router from "vue-router";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Entities from "./Entities";
import NewEntity from "./NewEntity";
import EntityPage from "./EntityPage";
import Users from "./Users";
import NewUser from "./NewUser";
import UserPage from "./UserPage";
import Tickets from "./Tickets";
import NewTicket from "./NewTicket";
import ProfilePage from "./ProfilePage";
import HumanRessources from "./HumanRessources";
import DirectoryUsersPage from "./DirectoryUsersPage";
import PersonnalSpace from "./PersonnalSpace";
import EditProfile from "./EditProfile";
import Page404 from "./Page404";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Login,
      beforeEnter: (to, from, next) => {
        if (router.app.$root.user) next("/dashboard");
        else next();
      }
    },
    {
      path: "/dashboard",
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: "/entities",
      component: Entities
    },
    {
      path: "/entity/new",
      component: NewEntity
    },
    {
      path: "/entity/:id",
      component: EntityPage
    },
    {
      path: "/users",
      component: Users
    },
    {
      path: "/user/new",
      component: NewUser
    },
    {
      path: "/user/:id",
      component: UserPage
    },
    {
      path: "/tickets",
      component: Tickets
    },
    {
      path: "/ticket/new",
      component: NewTicket
    },
    {
      path: "/profile/:id",
      component: ProfilePage
    },
    {
      path: "/human-ressources",
      component: HumanRessources
    },
    {
      path: "/directory-users",
      component: DirectoryUsersPage
    },
    {
      path: "/perso",
      component: PersonnalSpace
    },
    {
      path: "/perso/:id",
      component: EditProfile
    },
    {
      path: "/404",
      component: Page404
    }
  ]
});

export default router;
