<template>
  <div class="dashboard-today">
    
    <x-posting-card
      v-for="n in 5"
      :class="['slideInUp', `animate-delay-${n}`]"
      @click="open"/>
    
    <x-modal-layout padding title="Chamada" ref="modal" :after="after">
      <x-container-posting/>
    </x-modal-layout>
  
  </div>
</template>

<script>
  import XPostingCard from './components/XPostingCard'
  import XModalLayout from 'src/components/common/layout/XModalLayout'
  import XContainerPosting from './components/XContainerPosting'
  
  export default {
    components: {
      XContainerPosting,
      XModalLayout,
      XPostingCard
    },
    name: 'dashboard-today',
    methods: {
      open () {
        this.$refs.modal.open()
      }
    },
    computed: {
      after () {
        return [
          {
            icon: 'send',
            handler: (component) => {
              console.log('sended')
              component.$router.back()
            }
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
