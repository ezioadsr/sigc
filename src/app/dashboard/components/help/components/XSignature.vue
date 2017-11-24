<template>
  <div class="x-signature">
    
    <div class="signature-item row">
      
      <div class="col-sm-3 col-xs-12 row justify-center">
        <q-icon size="5em" name="fa-github"></q-icon>
      </div>
      
      <div class="col-sm-9 col-xs-12 items-center">
        
        <div class="signature-line">
          <span v-html="component.project"></span>
          <a href="https://github.com/ezioadsr/sigc" target="_blank">@ezioadsr</a>
        </div>
        <div class="signature-line">
          <span v-html="component.suggestion"></span>
        </div>
      
      </div>
    </div>
    
    <div class="signature-item row">
      
      <div class="col-sm-3 col-xs-12 row justify-center">
        <img class="icon" :src="quasarLogo"/>
      </div>
      
      <div class="col-sm-9 col-xs-12 items-center justify-center">
        
        <div class="signature-line row items-center">
          <a href="https://github.com/ezioadsr/sigc" target="_blank">Quasar</a>
        </div>
      
      </div>
    </div>
    
    
    <div class="signature-item row">
      
      <div class="col-sm-3 col-xs-12 row justify-center">
        <img class="icon" :src="vueLogo"/>
      </div>
      
      <div class="col-sm-9 col-xs-12 items-center justify-center">
        
        <div class="signature-line row items-center">
          <a href="https://github.com/ezioadsr/sigc" target="_blank">Vuejs</a>
        </div>
      
      </div>
    </div>
    
    
    <div>
      <span>{webpack}<br>{babel}<br></span>
    </div>
  
  
  </div>


</template>
<script>
  import { ADefault } from 'src/components/common/abstract'
  import { QIcon } from 'quasar-framework'
  import vueLogo from 'src/assets/logos/vue.png'
  import quasarLogo from 'src/assets/logos/quasar.svg'
  import 'quasar-extras/fontawesome'
  
  export default {
    mixins: [ADefault],
    name: 'x-signature',
    components: {QIcon},
    data: () => ({
      vueLogo,
      quasarLogo
    }),
    methods: {},
    computed: {}
  }
</script>
<style lang="stylus" scoped>
  .x-signature
    .signature-line
      padding: .5em
    .icon
      height 5em
      width 5em
</style>
