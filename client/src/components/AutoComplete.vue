<template>
  <div class="autocomplete-input">
    <p class="control has-icon has-icon-right">
      <input 
      v-model="keyword"
      class="input is-large"
      placeholder="Search..."
      @input="onInput($event.target.value)"
      @keyup.esc="isOpen = false"
      @blur="isOpen = false"
      @keydown.down="moveDown"
      @keydown.up="moveUp"
      @keydown.enter="select"
      >
      <i class="fa fa-angle-down"></i>
    </p>
    <ul v-show="isOpen" class="options-list">
      <li v-for="(option, index) in fOptions"
        :class="{
          'highlighted': index === highlightedPosition
        }">
        <slot name="item"
          :firstname="option.firstname">
        </slot>
      </li>
    </ul>
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
      this.keyword = selectedOption.title;
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

<style>

</style>
