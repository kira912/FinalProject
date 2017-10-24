<template>
</template>

<script>
import { logout } from '@/api/auth'
export default {
  data () {
    return {
      navItems: []
    }
  },
  methods: {
    logout () {
      logout(this.$root)
      this.$router.push('/')
    },
    entity () {
      this.$router.push('/entity')
    }
  }

}
</script>
