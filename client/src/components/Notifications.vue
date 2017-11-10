<template>
  
</template>

<script>
const NotificationStore = {
  state: [], // here the notifications will be added

  addNotification: function(notification) {
    this.state.push(notification);
  },
  removeNotification: function(notification) {
    this.state.$remove(notification);
  }
};
export default {
  props: ["notification"],
  data() {
    return {
      timer: null
    };
  },

  ready: function() {
    let timeout = this.notification.hasOwnProperty("timeout")
      ? this.notification.timeout
      : true;
    if (timeout) {
      let delay = this.notification.delay || 3000;
      this.timer = setTimeout(
        function() {
          this.triggerClose(this.notification);
        }.bind(this),
        delay
      );
    }
  },

  methods: {
    triggerClose: function(notification) {
      clearTimeout(this.timer);
      this.$dispatch("close-notification", notification);
    }
  }
};
</script>

<style>

</style>
