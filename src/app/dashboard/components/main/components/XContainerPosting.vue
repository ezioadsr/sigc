<template>
  <div class="x-container-posting">
    
    <div
      class="row"
      v-touch-hold="hold"
      v-touch-pan="pan"
      v-touch-swipe="swipe">
      <div class="container-left" :style="`width: ${left}%`">
        <div class="posting-header">
        
        </div>
        <div v-for="n in items" class="posting-item">
          <span>FERNANDO MANOEL DA SILVA BOLTELHO</span>
        </div>
      </div>
      
      <div class="container-right" :style="`width: ${right}%`">
        <div class="posting-header">
        
        </div>
        
        <div v-for="n in items" class="posting-item">
          <q-checkbox v-for="n in radios" v-model="checked[n]" />
        </div>
      
      </div>
    </div>
  
  
  </div>
</template>
<script>
  import { QCheckbox, TouchHold, TouchPan, TouchSwipe } from 'quasar-framework'
  
  export default {
    name: 'x-container-posting',
    components: {
      QCheckbox
    },
    directives: {
      TouchHold, TouchPan, TouchSwipe
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
      position: 50,
      max: null,
      min: null
    }),
    created () {
      this.min = 30
      this.max = 80
    },
    methods: {
      swipe (evt) {
        // console.log(' ~> swiped', evt)
      },
      hold (evt) {
        // console.log(' ~> holded', evt)
      },
      pan (evt) {
        this.position += evt.delta.x
      }
    },
    computed: {
      left () {
        const {position, $el, min, max} = this
        if (!$el) {
          return 70
        }
        const {clientWidth} = $el
        const percent = 100 * position / clientWidth
        if (percent < min) {
          return min
        }
        if (percent > max) {
          return max
        }
        return percent
      },
      right () {
        const {position, $el, min, max} = this
        if (!$el) {
          return 30
        }
        const {clientWidth} = $el
        const percent = 100 - 100 * position / clientWidth
        if (percent < 100 - max) {
          return 100 - max
        }
        if (percent > 100 - min) {
          return 100 - min
        }
        return percent
      }
    }
  }
</script>
<style lang="stylus">
  .x-container-posting
    .container-left, .container-right
      height 100vh
      .posting-header
        height 3.5em
        background-color: #00b0ff
        margin 2px
      .posting-item
        height 3em
        margin 2px
        div
          padding 7px 3px
          display block
          float: left
        > *
          margin 0
        background-color: greenyellow
    .container-left
      background-color: purple
    .container-right
      background-color: darkorange
</style>
