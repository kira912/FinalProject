<template>
  <div>
<!--     <v-toolbar dark color="primary" fixed app clipped-left>
     <div class="d-flex flex-row-reverse"> 
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-btn icon @click="seen = !seen">  
        <v-icon>search</v-icon>
      </v-btn>
    <div v-if="seen === true" class="col-lg-6">
      <div class="input-group">
       <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for...">
        <span class="input-group-btn">
          <button class="btn btn-secondary" type="button">Go!</button>
        </span>
      </div>
    </div>  
    </div> -->
  </v-toolbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      seen: false
    };
  }
};
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
