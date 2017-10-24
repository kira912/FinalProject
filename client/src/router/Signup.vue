<template>

</template>

<script>
import { signup } from '@/api/auth'
export default {
  data: () => ({
    valid: true,
    name: '',
    username: '',
    password: '',
    e1: false,
    nameRules: [v => !!v || 'Name is required']
    /*       email: '',
            emailRules: [
              (v) => !!v || 'E-mail is required',
              (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ], */
    // checkbox: false
  }),
  methods: {
    signup () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        signup({
          name: this.name,
          username: this.username,
          password: this.password
          // email: this.email,
          // checkbox: this.checkbox
        })
          .then(() => {
            this.$router.push('/login')
          })
          .catch(err => {
            this.error = err.response.data.error
            console.error('Signup err', err)
          })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
.test {
  width: 50%;
}
</style>