<template>
  <div class="row d-flex justify-content-around">
  <div class="col-6 col-lg-3">
    <div class="card height">
      <div class="card-block p-1 clearfix">
        <i class="fa fa-cogs bg-primary p-1 font-2xl mr-1 float-left"></i>
        <div class="h5 text-primary mb-0 mt-h">{{data}} €</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs"> {{text}} </div>
      </div>
    </div>
  </div><!--/.col-->
</div><!--/.row-->
</template>

<script>
export default {
  props: ["data", "text"]
};
</script>

<style scoped>
.height {
  padding: 9%;
}
</style>
