<template>
  <div class="x-finger-print">
    <q-icon v-if="active" :name="'fingerprint'" :size="'5em'"/>
  </div>
</template>
<script>
  import { QIcon } from 'quasar-framework'
  
  export default {
    name: 'x-finger-print',
    components: {QIcon},
    props: {
      active: {
        type: Boolean
      }
    },
    data: () => ({}),
    methods: {},
    computed: {}
  }
</script>
<style lang="stylus" scoped>

</style>
