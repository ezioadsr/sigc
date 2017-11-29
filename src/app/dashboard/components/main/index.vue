<template>
  <div class="dashboard-index row">
    
    
      <x-card-test :class="['col-md-3', 'slideInUp', `animate-delay-${n}`] " v-for="n in 30" />
    
  
  </div>
</template>
<script>
  import XModal from 'src/components/common/layout/XModalLayout.vue'
  import { QBtn, QCard, QCardMain, QCardTitle, QCardActions, QIcon, QCardSeparator, Ripple } from 'quasar-framework'
  // import XContainerPosting from './components/XContainerPosting.vue'
  import XCardTest from './components/XCardTest.vue'
  
  export default {
    name: 'dashboard-index',
    components: {
      // XContainerPosting,
      XCardTest,
      XModal,
      QBtn,
      QCard,
      QCardTitle,
      QCardMain,
      QCardActions,
      QIcon,
      QCardSeparator
    },
    directives: {
      Ripple
    },
    data: () => ({
      animate: '',
      classes: []
    }),
    methods: {
      animateScale () {
        this.animate = 'shadow-10 window-height window-width'
        this.$refs.modal.open()
      },
      hover (evt) {
        console.log(evt)
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
  @import '~custom'
  
  .dashboard-index
    .card-container
      overflow hidden
    .q-card
      padding: 0 8px
      @extend .depth-1
      &:hover
        @extend .depth-5
</style>
