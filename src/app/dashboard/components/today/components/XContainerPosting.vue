<template>
  <div class="x-container-posting relative-position"
       v-touch-pan.horizontal="onPan">
    
    <div v-if="wait" class="static-container-posting">
      <div class="posting-header">
        <span class="header-text text-bold">Alunos</span>
        <p>6 aulas consecutivas, de 19:30 as 10:40</p>
      </div>
      
      <div v-for="(_student, index) in data" :key="'colchao'" class="posting-item row items-center">
        <div style="width: 2em"><span v-html="index + 1"></span></div>
        <div style="width: calc(100% - 2em)">
          <span v-html="_student.name"/>
        </div>
      </div>
    </div>
    
    <div v-if="wait" ref="floatingContainer" class="floating-container-posting absolute-top-right"
         :style="{'transform': `translateX(${position}px)`}">
      <div class="posting-header">
        <div class="info">
          <q-btn flat class="animate-pop">
            <q-icon color="warning" name="info"></q-icon>
          </q-btn>
        </div>
        <div class="item">
          <span v-for="(_option, index) in options" :key="'horairo'">
          {{index + 1}}º
          </span>
        </div>
        <q-option-group
          class="no-margin"
          left-label
          inline
          type="checkbox"
          color="warning"
          v-model="autoCheck"
          :options="options"
        />
      
      </div>
      
      <div v-for="_student in data" :key="'colchao'" class="posting-item row items-center">
        <q-option-group
          class="no-margin"
          left-label
          inline
          type="checkbox"
          color="positive"
          v-model="_student.options"
          :options="options"
        />
      </div>
    </div>
    <div style="height: 60px"></div>
    
    <q-fixed-position corner="bottom-right" :offset="[18, 18]">
      <q-btn
        v-back-to-top.animate="{offset: 500, duration: 200}"
        round
        class="animate-pop"
        color="primary"
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
  import union from 'lodash/union'
  import difference from 'lodash/difference'
  
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
      size: 6,
      items: 20,
      autoCheck: [],
      autoCheckPreviously: [],
      options: [],
      data: [],
      position: 0,
      style: {}
    }),
    created () {
      this.min = 30
      this.max = 80
    },
    mounted () {
      this.populate()
    },
    methods: {
      onPan (evt) {
        console.log(evt)
        const {x} = evt.delta
        if (x === 0) {
          return null
        }
        const delta = this.position + x
        if (!(delta > 0 && delta < 200)) {
          return null
        }
        this.style = {
          'transform': `translateX(${delta}px)`
        }
        this.position = delta
      },
      populate (data) {
        this.data = this.changeData(data)
        if (this.data.length) {
          for (let i = 0; i < this.size; i++) {
            this.options.push({label: '', value: i})
          }
        }
      },
      changeData (data) {
        return [
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          },
          {
            name: 'Fernando manoel da Silva',
            options: []
          }
        ]
      }
    },
    watch: {
      autoCheck (value, old) {
        const {autoCheckPreviously} = this
        const check = difference(value, autoCheckPreviously)
        const uncheck = difference(autoCheckPreviously, value)
        this.data.forEach((_student) => {
          _student.options = union(_student.options, check)
          _student.options = difference(_student.options, uncheck)
        })
        this.autoCheckPreviously = [...value]
      }
    }
  }
</script>
<style lang="stylus">
  @import '~variables'
  .x-container-posting
    overflow hidden
    .posting-header
      height 6em
      padding 0 16px
      border-bottom: 1px solid #ddd;
      .info
        text-align end
      .header-text
        font-size 1.5em
      .item > span
        width: 21px
        margin 6px
    .posting-item
      height 3em
      border-bottom: 1px solid #ddd;
      padding 0 16px
    .static-container-posting
      max-heigth 50000px
    .floating-container-posting
      display: inline-block
      background-color #f1f1f1
      -webkit-transition-timing-function: ease-out, ease-in, linear, ease-in-out;

</style>
