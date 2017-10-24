<template>
  <div class="animated fadeIn" v-if='entity'>
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
            <tbody>
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
export default {
  props: {
    entity: Object
  }
}
</script>
