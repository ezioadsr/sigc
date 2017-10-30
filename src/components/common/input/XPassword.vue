<template>
  <div class="x-password">
    <q-input
      :type="password"
      :float-label="lang.password.label"
    ></q-input>
  </div>
</template>
<script>
  import { required } from 'vuelidate/lib/validators'
  import { AInput } from 'src/components'
  import { QInput } from 'quasar-framework'
  import { mapState } from 'vuex'

  export default {
    name: 'x-password',
    mixin: [AInput],
    components: {
      QInput
    },
    inject: ['__field'],
    data: () => ({
      password: null
    }),
    created () {
      const {XPassword} = this.lang.components
      this.password = this.value
      this.lang = XPassword
      console.log(required)
    },
    validations: {
      required
    },
    watch: {
      password (value) {
        this.$emit('input', value)
      }
    },
    computed: {
      ...mapState('locale', ['lang'])
    }
  }
</script>
<style lang="stylus">

</style>
