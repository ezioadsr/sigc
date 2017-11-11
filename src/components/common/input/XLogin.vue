<template>
  <div class="x-login">
    <q-field
      v-if="field"
      :label="label"
      :icon="icon"
      :helper="helper"
      :error="hasError"
      :error-label="errorLabel"
      :count="count"
      :inset="inset"
      :dark="dark">
      
      <q-input
        v-model="data"
        :type="'text'"
        :float-label="floatLabel">
      </q-input>
    
    </q-field>
    
    <q-input
      v-if="!field"
      v-model="data"
      :type="'text'"
      :float-label="floatLabel">
    </q-input>
  </div>
</template>
<script>
  import { required } from 'vuelidate/lib/validators'
  import { AInput } from 'src/components'
  import { QInput, QField } from 'quasar-framework'
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'x-login',
    mixins: [AInput],
    props: {
      field: {
        type: Boolean,
        default: false
      },
      required: {
        type: Boolean,
        default: true
      }
    },
    components: {
      QInput, QField
    },
    data: () => ({
      data: null
    }),
    validations: {
      text: {
        required
      }
    },
    watch: {
      text (value) {
        this.$emit('input', value)
      }
    },
    computed: {
      ...mapGetters(['lang']),
      hasError () {
        return this.$v.$invalid && this.required
      }
    }
  }
</script>
<style lang="stylus">

</style>
