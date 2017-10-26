<template>
  <div class="animated fadeIn">
    <button type="button" class="btn btn-primary active mt-3" @click.prevent="$router.push('/user/new')">Créer utilisateur</button>
    <div class="row">
      <div class="col-lg-6">
        <b-card>
          <table class="table">
            <thead>
              <tr>
                <th>Prénom</th>
                <th>Nom</th>
              </tr>
            </thead>
            <tbody v-for='(user, index) in users' :key='user.id'>
              <tr>
                <td>{{user.firstname}}</td>
                <td>{{user.lastname}}</td>
                <td><button type="button"
                 @click.prevent='getSingleUser(user._id)'
                  class="btn btn-primary active mt-3">Editer
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import {getUsers, getSingleUser} from '@/api/auth'
export default {
  data () {
    return {
      users: []
    }
  },

  created () {
    getUsers().then(users => {
      console.log('DEBUG users', users)
      this.users = users
    })
  },

  methods: {
    getSingleUser (_id) {
      getSingleUser(_id).then(data => {
        this.$router.push('/user/' + _id)
      })
    }
  }
}
</script>

<style>

</style>
