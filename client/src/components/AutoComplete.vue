<template>
  <div class="autocomplete-input">
    <p class="control has-icon has-icon-right">
      <input 
      v-model="keyword"
      @input="onInput($event.target.value)"
      @keyup.esc="isOpen = false"
      @blur="isOpen = false"
      @keydown.down="moveDown"
      @keydown.up="moveUp"
      @keydown.enter="select"
      placeholder="Search..."
      class="form-control"
      aria-describedby="sizing-addon1"
      >
    </p>
    <b-list-group v-show="isOpen" class="options-list">
      <b-list-group-item v-for="(option, index) in fOptions" :key="option._id"
        :class="{
          'highlighted': index === highlightedPosition
        }">
        <slot name="item"
          :firstname="option.firstname" :lastname="option.lastname" :profilePic="option.profilePic">
        </slot>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      isOpen: false,
      highlightedPosition: 0,
      keyword: ""
    };
  },

  methods: {
    onInput(value) {
      this.isOpen = !!value;
    },
    moveDown() {
      if (!this.isOpen) {
        return;
      }
      this.highlightedPosition =
        (this.highlightedPosition + 1) % this.fOptions.length;
    },
    moveUp() {
      if (!this.isOpen) {
        return;
      }
      this.highlightedPosition =
        this.highlightedPosition - 1 < 0
          ? this.fOptions.length - 1
          : this.highlightedPosition - 1;
    },
    select() {
      const selectedOption = this.fOptions[this.highlightedPosition];
      this.keyword = selectedOption.firstname;
      this.$router.push("/profile/" + selectedOption._id);
      this.isOpen = false;
      this.$emit("select", selectedOption);
    }
  },
  computed: {
    fOptions() {
      const re = new RegExp(this.keyword, "i");
      return this.options.filter(o => o.firstname.match(re));
    }
  }
};
</script>


