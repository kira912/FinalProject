<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-lg-6">
        <b-card>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody v-for='(entity, index) in entities' :key='index' v-if='entity' :entity='entity'>
              <tr>
                <td>{{entity.name}}</td>
                <td>{{entity.type}}</td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import {getEntities, getSingleEntity} from '@/api/auth'

export default {
  data () {
    return {
      entities: [],
      entity: null
    }
  },

  created () {
    getEntities().then(entities => {
      this.entities = entities
    })
  },

  created () {
    getSingleEntity(this.$route.params.id).then(entity => {
      if (entity) {
        this.entity = entity
      } else {
        this.$router.push('/entities')
      }
    })
  }
}
</script>

<style>

</style>
