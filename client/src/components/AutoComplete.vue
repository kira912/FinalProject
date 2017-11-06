<template>
<div class="appAuto">
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
      placeholder="Rechercher un utilisateur"
      class="form-control"
      aria-describedby="sizing-addon1"
      >
    </p>
    <ul v-show="isOpen" class="options-list">
      <li v-for="(option, index) in fOptions" :key="option._id"
        :class="{
          'highlighted': index === highlightedPosition
        }">
        <slot name="item"
          :firstname="option.firstname" :lastname="option.lastname" :profilePic="option.profilePic">
        </slot>
      </li>
    </ul>
  </div>
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


<style scoped>
#appAuto {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  height: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

input {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.autocomplete-input {
  position: relative;
  width: 400px;
}

ul.options-list {
  display: flex;
  flex-direction: column;
  margin-top: -12px;
  border: 1px solid #dbdbdb;
  border-radius: 0 0 3px 3px;
  position: absolute;
  width: 100%;
  overflow: hidden;
}

ul.options-list li {
  width: 100%;
  flex-wrap: wrap;
  background: white;
  margin: 0;
  border-bottom: 1px solid #eee;
  color: #363636;
  padding: 7px;
  cursor: pointer;
}

ul.options-list li.highlighted {
  background: #f8f8f8;
}
</style>
