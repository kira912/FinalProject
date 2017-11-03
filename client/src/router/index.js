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
import Page404 from "./Page404";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Login
      /*       beforeEnter: (to, from, next) => {
        if (router.app.$root.user) next("/dashboard");
        else next();
      } */
    },
    {
      path: "/dashboard",
      component: Dashboard
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
      /*       beforeEnter: (to, from, next) => {
        if (router.app.$root.user.role === "Admin") next("/entity/:id");
        else next("/404");
      } */
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
      /*       beforeEnter: (to, from, next) => {
        if (router.app.$root.user.role === "Admin") next("/user/:id");
        else next("/404");
      } */
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
      path: "/404",
      component: Page404
    }
  ]
});

export default router;
