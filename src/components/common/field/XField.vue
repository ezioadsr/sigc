<template>
  <div class="x-field">
    <q-field
      :label="label"
      :icon="icon"
      :helper="helper"
      :error="hasError"
      :error-label="errorLabel"
      :count="count"
      :inset="inset"
      :dark="dark">
      <slot></slot>
    </q-field>
  </div>
</template>
<script>
  import { AField } from 'src/components'
  import { QField } from 'quasar-framework'
  
  export default {
    name: 'x-field',
    mixins: [AField],
    components: {
      QField
    },
    props: {},
    data: () => ({
      __input: null
    }),
    methods: {
      _register (input) {
        this.__input = input
      }
    },
    computed: {
      hasError () {
        const {__input} = this
        return __input && this.__input.$v.invalid
      }
    }
  }
</script>
