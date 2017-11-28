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
         :style="style">
      <div class="posting-header">
        <div>
          <q-btn flat>
            <q-icon name="done_all"></q-icon>
          </q-btn>
        </div>
        <div class="item">
          <span v-for="n in radios" :key="'horairo'">
          {{n}}º
          </span>
        </div>
        <q-option-group
          class="no-margin"
          left-label
          inline
          type="checkbox"
          color="positive"
          v-model="checked"
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
      
      <div v-for="n in items" :key="'colchao'" class="posting-item">
        <q-option-group
          class="no-margin"
          left-label
          inline
          type="checkbox"
          color="positive"
          v-model="checked"
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
      checked: [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      position: 0,
      duration: 0,
      style: {}
    }),
    created () {
      this.min = 30
      this.max = 80
    },
    mounted () {},
    methods: {
      onPan (evt) {
        console.log(evt)
        const {x} = evt.delta
        if (x === 0) {
          return null
        }
        const delta = this.position + x
        // const duration = evt.duration > 300 ? 300 : evt.duration
        if (!(delta > 0 && delta < 200)) {
          return null
        }
        this.style = {
          'transform': `translateX(${delta}px)`// ,
          // '-webkit-transition-duration': `${duration}ms`
        }
        this.position = delta
      }
    }
  }
</script>
<style lang="stylus">
  .x-container-posting
    overflow hidden
    .posting-header
      height 100px
      background-color: #00b0ff
      .item > span
        width: 21px
        margin 6px
    .posting-item
      height 3em
    .static-container-posting
      background-color: purple
    .floating-container-posting
      display: inline-block
      background-color #f1f1f1
      -webkit-transition-timing-function: ease-out, ease-in, linear, ease-in-out;
  
  /*-webkit-transition-property: -webkit-transform*/
  
  /*-webkit-transition-delay: 0, 0, 0, 1000ms*/
  /*-webkit-transition-property: left, top, background, -webkit-transform;*/

</style>
