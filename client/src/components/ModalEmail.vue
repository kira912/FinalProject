<template>
  <div class="modal fade" id="test" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <transition name="modal">
        <div class="modal-mask" v-show="show">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>New Post</h3>
                </div>
                <div class="modal-body">
                    <label class="form-label">
                        Title
                        <input class="form-control">
                    </label>
                    <label class="form-label">
                        Body
                        <textarea rows="5" class="form-control"></textarea>
                    </label>
                </div>
                <div class="modal-footer text-right">
                    <button class="modal-default-button" @click="savePost()">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </transition>
  </div>  
</template>

<script>
export default {
  props: ["show"],
  methods: {
    savePost: function() {
      this.$emit("close");
    }
  }
};
</script>

<style>

</style>
