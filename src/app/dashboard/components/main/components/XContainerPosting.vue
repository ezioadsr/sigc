<template>
  <div class="x-container-posting relative-position"
       v-touch-pan.horizontal="onPan">
    
    <div v-if="wait" class="static-container-posting">
      <div class="posting-header">
        <span class="header-text text-bold">Alunos</span>
      </div>
      
      <div v-for="n in items" :key="'colchao'" class="posting-item row items-center">
        <div style="width: 2em"><span v-html="n"></span></div>
        <div style="width: calc(100% - 2em)">
          <span>FERNANDO MANOEL DA SILVA BOLTELHO</span>
        </div>
      </div>
    </div>
    
    <div v-if="wait" ref="floatingContainer" class="floating-container-posting absolute-top-right"
         :style="{'transform': `translateX(${position}px)`}">
      <div class="posting-header">
        <q-btn flat>
          <q-icon name="done_all"></q-icon>
        </q-btn>
      </div>
      
      <div v-for="n in items" :key="'colchao'" class="posting-item row items-center">
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
    
    <q-fixed-position corner="bottom-right" :offset="[18, 18]">
      <q-btn
        v-back-to-top.animate="{offset: 500, duration: 200}"
        round
        class="animate-pop"
        color="primary"
        @click="alert"
        icon="keyboard_arrow_up"
      />
    </q-fixed-position>
    
    <!--<q-resize-observable @resize="onResize"/>  -->
  </div>
</template>
<script>
  import {
    QBtn,
    QIcon,
    QCheckbox,
    QOptionGroup,
    QFixedPosition,
    TouchPan,
    TouchSwipe,
    BackToTop
  } from 'quasar-framework'
  
  import { ADefault } from 'src/components/common/abstract'
  
  export default {
    name: 'x-container-posting',
    mixins: [ADefault],
    components: {
      QBtn, QIcon, QCheckbox, QOptionGroup, QFixedPosition
    },
    directives: {
      TouchPan, TouchSwipe, BackToTop
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
    mounted () { },
    methods: {
      alert () {
        console.log('alert')
      },
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
  @import '~variables'
  .x-container-posting
    overflow hidden
    .posting-header
      height 3.5em
      .header-text
        font-size 1.5em
    .posting-item
      height 3em
      border-bottom: 1px solid #ddd;
      padding 0 16px
    .static-container-posting
      max-heigth 50000px
    .floating-container-posting
      display: inline-block
      background-color #f1f1f1
  
  /*-webkit-transition-delay: 0, 0, 0, 1000ms*/
  /*-webkit-transition-property: left, top, background, -webkit-transform;*/
  /*-webkit-transition-timing-function: ease-out, ease-in, linear, ease-in-out;*/

</style>
