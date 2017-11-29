<template>
  <div class="card-test">
    <q-card>
    
    </q-card>
  </div>
</template>

<script>
  import { QCard } from 'quasar-framework'
  import 'quasar-extras/animate/slideInUp.css'

  export default {
    name: 'x-card-test',
    components: {
      QCard
    }
  }
</script>

<style lang="stylus" scoped>
  .card-test
    overflow hidden
    .q-card
      height 150px
      width: 150px
</style>
