<template>
  <div class="x-password">
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
        v-model="password"
        :type="'password'"
        :float-label="floatLabel">
      </q-input>
    
    </q-field>
    
    <q-input
      v-if="!field"
      v-model="password"
      :type="'password'"
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
    name: 'x-password',
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
      password: null,
      errorLabel: '',
      floatLabel: ''
    }),
    created () {
      this.password = this.value
    },
    validations: {
      password: {
        required
      }
    },
    watch: {
      password (value) {
        this.$emit('input', value)
      }
    },
    computed: {
      ...mapGetters(['lang']),
      map () {
        this.errorLabel = this.lang.components.XPassword.errorLabel
        this.floatLabel = this.lang.components.XPassword.floatLabel
        return true
      },
      hasError () {
        return this.$v.$invalid && this.required
      }
    }
  }
  F
</script>
<style lang="stylus">

</style>
