<template>
  <div class="x-field">
    <q-field
      :label="label",
      :icon="icon",
      :helper="helper",
      :error="exposed.error"
      :error-label="errorLabel"
      :count="count",
      :inset="inset",
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
      exposed: {
        error: false
      }
    }),
    provide: function provide () {
      return {
        __field: this.exposed
      }
    }
  }
</script>
