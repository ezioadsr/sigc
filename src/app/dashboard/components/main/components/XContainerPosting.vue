<template>
  <div class="x-container-posting relative-position"
       v-touch-pan.horizontal="onPan">
    
    <div class="static-container-posting">
      <div class="posting-header"></div>
      
      <div v-for="n in items" :key="'colchao'" class="posting-item row">
        <div style="width: 2em"><span v-html="n"></span></div>
        <div style="width: calc(100% - 2em)">
          <span>FERNANDO MANOEL DA SILVA BOLTELHO</span>
        </div>
      </div>
    </div>
    
    <div ref="floatingContainer" class="floating-container-posting absolute-top-right"
         :style="{'transform': `translateX(${position}px)`}">
      <div class="posting-header">
        <q-btn flat>
          <q-icon name="done_all"></q-icon>
        </q-btn>
      </div>
      
      <div v-for="n in items" :key="'colchao'" class="posting-item">
        <q-option-group
          class="no-margin"
          left-label
          inline
          type="checkbox"
          color="positive"
          v-model="checked[n]"
          :options="[
          { label: '', value: 'bucharest' },
          { label: '', value: 'bucharest' },
          { label: '', value: 'bucharest' },
          { label: '', value: 'bucharest' },
          { label: '', value: 'london' },
          { label: '', value: 'paris' }
        ]"
        />
      </div>
    </div>
    
    <!--<q-resize-observable @resize="onResize"/>  -->
  </div>
</template>
<script>
  import { QBtn, QIcon, QCheckbox, QOptionGroup, TouchPan, TouchSwipe } from 'quasar-framework'
  
  export default {
    name: 'x-container-posting',
    components: {
      QBtn, QIcon, QCheckbox, QOptionGroup
    },
    directives: {
      TouchPan, TouchSwipe
    },
    props: {},
    data: () => ({
      toggle: null,
      items: 20,
      radios: 6,
      checked: {
        '1': null,
        '2': null,
        '3': null,
        '4': null,
        '5': null,
        '6': null
      },
      position: 0
    }),
    created () {
      this.min = 30
      this.max = 80
    },
    mounted () {
      this.floatingContainerWidth = this.$refs.floatingContainerWidth.clientHeight
    },
    methods: {
      onPan (evt) {
        if (evt.delta.x === 0) {
          return null
        }
        // this.duration = evt.duration
        const delta = this.position + evt.delta.x
        if (delta > 0 && delta < 200) {
          this.position = delta
        }
      }
    }
  }
</script>
<style lang="stylus">
  .x-container-posting
    overflow hidden
    .posting-header
      height 3.5em
      background-color: #00b0ff
    .posting-item
      height 3em
    .static-container-posting
      background-color: purple
    .floating-container-posting
      display: inline-block
      background-color #f1f1f1
  
  /*-webkit-transition-delay: 0, 0, 0, 1000ms*/
  /*-webkit-transition-property: left, top, background, -webkit-transform;*/
  /*-webkit-transition-timing-function: ease-out, ease-in, linear, ease-in-out;*/

</style>
