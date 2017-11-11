<template>
  <div class="auth-index">
    <div class="container-login row fullscreen justify-center items-center">
      <div class="login" @submit.prevent="submit">
        <div class="logo">
          <img src="../../assets/logo.svg">
        </div>
        <c-auth-form
          
          @submit="submit">
        </c-auth-form>
      </div>
    </div>
  </div>
</template>
<script>
  import { XPassword, XField, XLayout } from 'src/components'
  //  import XPassword from 'src/components/common/input/XPassword.vue'
  //  import XField from 'src/components/common/field/XField.vue'
  //  import XLayout from 'src/components/common/layout/XLayout.vue'
  
  import { QField, QInput, QCheckbox, QBtn, QToolbar, QToolbarTitle, QIcon } from 'quasar-framework'
  import { mapActions } from 'vuex'
  import CAuthForm from './components/form.vue'
  
  export default {
    name: 'login',
    components: {
      CAuthForm,
      XPassword,
      XField,
      QField,
      QInput,
      QCheckbox,
      QBtn,
      QToolbar,
      QToolbarTitle,
      QIcon,
      XLayout
    },
    data: () => ({
      login: 'ezioadsr',
      password: '123456',
      remember: true,
      digital: false,
      error: false
    }),
    created () {},
    methods: {
      ...mapActions('auth', ['login']),
      submit (credentials) {
        if (this.validateInputLogin()) {
          this.validateInputPassword()
        }
        this.login(credentials)
          .then((response) => {
            this.$router.push({name: 'dashboard.index'})
          })
          .catch((error) => {
            this.error = error
          })
        debugger
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .auth-index
    .container-login
      padding: 10vw
      .login
        width: 100%
        max-width: 300px
        .logo
          width 100%
          position relative
        .form > div > div
          margin: 4vh 0
</style>
