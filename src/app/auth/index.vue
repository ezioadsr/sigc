<template>
  <div class="auth-index">
    <div class="layout-padding">
      <div class="row justify-center items-center">
        <form class="c-auth-form" @submit.prevent="submit">
          <x-logo :src="logo"/>
          
          <x-finger-print :active="digital"/>
          
          <div :class="['xs-gutter' , digital ? 'disabled' : '']">
            
            <x-login
              required
              v-model="input.login"/>
            
            <x-password
              required
              v-model="input.password"/>
            
            <x-error
              :message="error"
              :error="hasError"/>
            
            <div>
              <q-checkbox
                v-model="remember"
                :color="'primary'"
                :label="'teste'">
              </q-checkbox>
            </div>
            
            <div>
              <q-btn color="primary" class="full-width" @click="submit">{{}}</q-btn>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { XLayout, XError, XLogo } from 'src/components/common/layout'
  import { XLogin, XPassword, XFingerPrint } from 'src/components/common/input'
  import { QField, QInput, QCheckbox, QBtn, QToolbar, QToolbarTitle, QIcon } from 'quasar-framework'
  import logo from 'src/assets/logo.svg'
  import { mapActions } from 'vuex'
  
  export default {
    name: 'login',
    components: {
      XLogin,
      XPassword,
      XFingerPrint,
      XLogo,
      XError,
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
      input: {
        login: 'ezioadsr',
        password: '123456'
      },
      logo,
      remember: true,
      digital: false,
      error: 'Someghint'
    }),
    created () {},
    methods: {
      ...mapActions('auth', ['login']),
      submit () {
        const {login, password} = this.input
        this.login({login, password})
          .then((response) => {
            this.$router.push({name: 'dashboard.index'})
          })
          .catch((error) => {
            this.error = error
          })
        debugger
      }
    },
    computed: {
      hasError () {
        return true
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .auth-index
    padding: 10vw
    .c-auth-form
      position relative
      width: 100%
      max-width: 300px
      .digital
        position absolute
        height 100%
        width 100%
        text-align center
        padding 30px
      .disabled
        opacity .2 !important
      .login
        .logo
          width 100%
          position relative
        .form > div > div
          margin: 4vh 0
</style>
