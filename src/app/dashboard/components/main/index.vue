<template>
  <div class="dashboard-index">
    
    <q-card v-ripple :class="['relative-position']" v-for="n in 10">
      <q-card-title @click="animateScale">
        Tumar U Undefined
      </q-card-title>
      <q-card-main @click="animateScale">
      
      </q-card-main>
      <q-card-actions :align="'end'">
        <q-btn flat small>
          <span class="gt-lg">Sincronizado</span>
          <q-icon color="green" name="cached"/>
        </q-btn>
        <q-btn flat small>
          <span class="gt-lg">Feita</span>
          <q-icon color="green" name="done"/>
        </q-btn>
        <q-btn flat small>
          <span class="gt-lg">Habilitada</span>
          <q-icon color="blue" name="notifications_active"/>
        </q-btn>
      </q-card-actions>
    </q-card>
    
    <x-modal padding title="Chamada" ref="modal" :after="after">
      <x-container-posting/>
    </x-modal>
  </div>
</template>
<script>
  import XModal from 'src/components/common/layout/XModalLayout.vue'
  import { QBtn, QCard, QCardMain, QCardTitle, QCardActions, QIcon, Ripple } from 'quasar-framework'
  import XContainerPosting from './components/XContainerPosting.vue'
  
  export default {
    name: 'dashboard-index',
    components: {
      XContainerPosting,
      XModal,
      QBtn,
      QCard,
      QCardTitle,
      QCardMain,
      QCardActions,
      QIcon
    },
    directives: {
      Ripple
    },
    data: () => ({
      animate: ''
    }),
    methods: {
      animateScale () {
        this.animate = 'shadow-10 window-height window-width'
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
<style lang="stylus" scoped>
  .dashboard-index
    .q-card
      padding: 0 8px
      transition: height .5s ease-in-out .3s, width .5s ease-in-out .3s, box-shadow 0.8s ease-in-out 1s

</style>
