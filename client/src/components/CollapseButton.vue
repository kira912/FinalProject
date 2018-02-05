<template>
  <div class="item-align">
    <b-btn v-b-toggle.collapse1 variant="primary"> {{type}} </b-btn>
    <b-collapse id="collapse1" class="mt-2">
      <b-card>
        <p class="card-text"> {{content}} </p>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
  props: ["type", "content"]
};
</script>

<style scoped>
.item-align {
  display: inline-block;
}
</style>
