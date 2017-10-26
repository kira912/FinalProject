<template>
  <div>  
    <nav class="navbar navbar-inverse bg-inverse">
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/entities" tag="button">Entités</router-link>
        </li>
        <li class="nav-item">
        <router-link to="/users" tag="button">Utilisateurs</router-link>

        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'app',

  components: {
    Sidebar
  }
}
</script>

<style>
/* Import Font Awesome Icons Set */
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/css/font-awesome.min.css";
/* Import Simple Line Icons Set */
$simple-line-font-path: "~simple-line-icons/fonts/";
@import "~simple-line-icons/css/simple-line-icons.css";
/* Import Bootstrap Vue Styles */
@import "~bootstrap-vue/dist/bootstrap-vue.css";
</style>
<style lang="scss">
// Import Main styles for this application
@import "./scss/style";
</style>
