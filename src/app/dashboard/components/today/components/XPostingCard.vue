<template>
  <div class="x-posting-card">
    <q-card
      v-ripple
      :class="['relative-position']">
      <q-card-title @click="$emit('click')">
        Tumar U Undefined
        <span slot="subtitle">Something here</span>
      </q-card-title>
      <q-card-main @click="$emit('click')">
        Some another thing here
      </q-card-main>
      <q-card-separator/>
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
  </div>
</template>

<script>
  import { QBtn, QCard, QCardMain, QCardTitle, QCardActions, QIcon, QCardSeparator, Ripple } from 'quasar-framework'
  import 'quasar-extras/animate/slideInUp.css'
  
  export default {
    name: 'x-posting-card',
    components: {
      QBtn, QCard, QCardMain, QCardTitle, QCardActions, QIcon, QCardSeparator
    },
    directives: {
      Ripple
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~custom'
  @import '~variables'
  
  .x-posting-card
    overflow hidden
    .q-card
      padding: 0 8px
      @extend .depth-1
      &:hover
        @extend .depth-5
</style>
