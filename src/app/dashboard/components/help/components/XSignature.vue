<template>
  <div class="x-signature">
    <div class="row">
      
      <div class="signature-github">
        
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
      
      <div class="signature-technology">
        
        <div class="row">
          <img :src="vueLogo"/>
        </div>
      
      </div>
    </div>
  
  </div>
</template>
<script>
  import { ADefault } from 'src/components/common/abstract'
  import { QIcon } from 'quasar-framework'
  import vueLogo from 'src/assets/icons/vue.png'
  import 'quasar-extras/fontawesome'
  
  export default {
    mixins: [ADefault],
    name: 'x-signature',
    components: {QIcon},
    data: () => ({
      vueLogo
    }),
    methods: {},
    computed: {}
  }
</script>
<style lang="stylus" scoped>
  .x-signature
    .signature-line
      padding: .5em
</style>
