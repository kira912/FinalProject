<template>
      <div class="form-group container-fluid">
      <label for="name" class="col-2 col-form-label"> {{label}} </label>
      <div class="col-10">
        <input class="form-control" type="text" @input="$emit('input', $event.target.value)">
      </div>
    </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>

</style>
