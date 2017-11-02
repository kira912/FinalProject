<template>
  <div class="Typeahead">
    <template>
      <i class="fa fa-search" v-show="isEmpty"></i>
      <i class="fa fa-times" v-show="isDirty" @click="reset"></i>
    </template>

    <input type="text"
           class="Typeahead__input"
           autocomplete="on"
           v-model="query"
           @keydown.down="down"
           @keydown.up="up"
           @keydown.enter="hit"
           @keydown.esc="reset"
           @blur="reset"
           @select="option"
           />

    <ul>
      <li v-for="(user, $user, index) in users" :key="user._id" :class="activeClass($user)" @mousedown="hit" @mousemove="setActive($user)">
        <span class="name" v-text="user.firstname"></span>
      </li>
    </ul>
  </div>
</template>



<script>
import { getUsers } from "@/api/auth";
export default {
  data() {
    return {
      users: [],
      query: "",
      current: -1,
      selectFirst: false,
      queryParamName: "q",
      props: {
        suggestions: {
          type: Array,
          required: true
        },

        selection: {
          type: String,
          required: true,
          twoWay: true
        }
      }
    };
  },
  created() {
    getUsers().then(users => {
      this.users = users;
    });
  },
  computed: {
    hasItems() {
      return this.users.length > 0;
    },

    isEmpty() {
      return !this.query;
    },

    isDirty() {
      return !!this.query;
    },
    filteredDataObj() {
      return this.users.filter(option => {
        return (
          option.firstname
            .toString()
            .toLowerCase()
            .indexOf(this.query.toLowerCase()) >= 0
        );
      });
    }
  },
  methods: {
    onHit(user) {
      this.$router.push("/profile/" + user._id);
    },
    /*     update() {
      debugger;
      if (!this.query) {
        return this.reset();
      }

      this.fetch().then(() => {
        this.current = -1;

        if (this.selectFirst) {
          this.down();
        }
      });
    },

    fetch() {
      const params = this.queryParamName
        ? Object.assign({ [this.queryParamName]: this.query }, this.data)
        : this.data;

      let cancel = new Promise(resolve => (this.cancel = resolve));

      return Promise.race([cancel, request]);
    }, */

    reset() {
      this.query = "";
    },

    setActive(index) {
      this.current = index;
    },

    activeClass(index) {
      return {
        active: this.current === index
      };
    },

    hit() {
      if (this.current !== -1) {
        this.onHit(this.users[this.current]);
      }
    },

    up() {
      if (this.current > 0) {
        this.current--;
      } else if (this.current === -1) {
        this.current = this.users.length - 1;
      } else {
        this.current = -1;
      }
    },

    down() {
      if (this.current < this.users.length - 1) {
        this.current++;
      } else {
        this.current = -1;
      }
    }
  }
};
</script>



<style scoped>
.Typeahead {
  position: relative;
}
.Typeahead__input {
  width: 100%;
  font-size: 14px;
  color: #2c3e50;
  line-height: 1.42857143;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.4);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  font-weight: 300;
  padding: 12px 26px;
  border: none;
  border-radius: 22px;
  letter-spacing: 1px;
  box-sizing: border-box;
}
.Typeahead__input:focus {
  border-color: #4fc08d;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #4fc08d;
}
.fa-times {
  cursor: pointer;
}
i {
  float: right;
  position: relative;
  top: 30px;
  right: 29px;
  opacity: 0.4;
}
ul {
  position: absolute;
  padding: 0;
  margin-top: 8px;
  min-width: 100%;
  background-color: #fff;
  list-style: none;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: 1000;
}
li {
  padding: 10px 16px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
li:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
li:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom: 0;
}
span {
  display: block;
  color: #2c3e50;
}
.active {
  background-color: #3aa373;
}
.active span {
  color: white;
}
.name {
  font-weight: 700;
  font-size: 18px;
}
.screen-name {
  font-style: italic;
}
</style>