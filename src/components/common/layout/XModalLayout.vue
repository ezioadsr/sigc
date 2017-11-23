<template>
  <div class="x-modal">
    <q-modal ref="_modal" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
      <q-modal-layout>
        
        <x-toolbar
          slot="header"
          v-bind="bind"
          :title="title"/>
        
        <div class="layout-padding">
          <slot></slot>
        </div>
      
      </q-modal-layout>
    </q-modal>
  </div>
</template>
<script>
  import { QModal, QModalLayout } from 'quasar-framework'
  import XToolbar from './XToolbar.vue'
  
  export default {
    name: 'x-modal-layout',
    components: {
      XToolbar,
      QModalLayout,
      QModal
    },
    props: {
      title: {
        type: String,
        required: true
      },
      after: {
        type: [Array, Boolean],
        default: () => false
      },
      before: {
        type: [Array, Boolean],
        default: () => false
      }
    },
    data: () => ({}),
    methods: {
      open () {
        this.$refs._modal.open()
      },
      close () {
        this.$refs._modal.close()
      }
    },
    computed: {
      bind () {
        const {after, before} = this
        let bind = {}
        if (Array.isArray(after) && Array.isArray(before)) {
          return {after, before}
        }
        if (Array.isArray(after)) {
          bind = after
        }
        if (Array.isArray(before)) {
          bind = before
        }
        return bind
      },
      active () {
        return this.$refs._modal.active
      }
    }
  }
</script>
<style lang="stylus" scoped>

</style>
