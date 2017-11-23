<template>
  <div class="dashboard-help">
    <x-modal-layout title="modal" ref="modal">
      
      something
    
    </x-modal-layout>
    
    <x-signature/>
  </div>
</template>
<script>
  import { XModalLayout } from 'src/components/common/layout/index'
  import XSignature from './components/XSignature.vue'
  
  export default {
    name: 'dashboard-help',
    components: {
      XSignature,
      XModalLayout
    },
    data: () => ({}),
    mounted () {
      // this.$refs.modal.open()
    },
    methods: {},
    computed: {}
  }
</script>
<style lang="stylus" scoped>

</style>
