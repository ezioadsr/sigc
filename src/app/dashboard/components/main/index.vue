<template>
  <div class="dashboard-index">
    <x-modal title="modal" ref="modal">
      
      something
    
    </x-modal>
    
    <x-container-posting/>
    
    <q-btn @click="$refs.modal.open()">
      open
    </q-btn>
  </div>
</template>
<script>
  import XModal from 'src/components/common/layout/XModalLayout.vue'
  import { QBtn } from 'quasar-framework'
  import XContainerPosting from './components/XContainerPosting.vue'
  
  export default {
    name: 'dashboard-index',
    components: {
      XContainerPosting,
      XModal,
      QBtn
    },
    data: () => ({}),
    methods: {},
    computed: {}
  }
</script>
<style lang="stylus" scoped>

</style>
