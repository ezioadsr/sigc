<template>
  <q-layout>
    <!--<q-toolbar>-->
    <!--<q-btn flat @click="digital = !digital">-->
    <!--<q-icon name="android"/>-->
    <!--</q-btn>-->
    <!--<q-toolbar-title>-->
    <!--SigC-->
    <!--</q-toolbar-title>-->
    <!--</q-toolbar>-->
    <div class="container-login row fullscreen justify-center items-center">
      <div class="login">
        <div class="logo">
          <img src="../../assets/logo.svg">
        </div>
        <div class="form">
          <div class="digital">
            <q-icon v-show="digital" name="fingerprint" size="5em"></q-icon>
          </div>
          <div :class="digital ? 'disabled' : ''">
            <div>
              <q-field :error="login.error" :error-label="login.errorLabel">
                <q-input
                  @keyup.enter="submit"
                  v-model="login.value"
                  :float-label="lang.login"
                  :type="'text'">
                </q-input>
              </q-field>
              <q-field :error="password.error" :error-label="password.errorLabel">
                <q-input
                  @keyup.enter="submit"
                  v-model="password.value"
                  :float-label="lang.password"
                  :type="'password'">
                </q-input>
              </q-field>
            </div>
            <div>
              <q-checkbox
                v-model="remember"
                :color="'primary'"
                :label="lang.remember">
              </q-checkbox>
            </div>
            <div>
              <q-btn color="primary" class="full-width" @click="submit">{{lang.submit}}</q-btn>
            </div>
            <div>
              <a>
                <small>{{lang.forget}}</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>
<script>
  import { QField, QInput, QLayout, QCheckbox, QBtn, QToolbar, QToolbarTitle, QIcon } from 'quasar-framework'
  import lang from '@lang/index.js'

  export default {
    name: 'login',
    components: {
      QField,
      QInput,
      QLayout,
      QCheckbox,
      QBtn,
      QToolbar,
      QToolbarTitle,
      QIcon
    },
    data: () => ({
      login: {
        value: '',
        error: false,
        errorLabel: 'Some error'
      },
      password: {
        value: '',
        error: false,
        errorLabel: 'Some error'
      },
      remember: true,
      digital: false,
      lang: lang.auth
    }),
    methods: {
      submit (event) {
        if (this.validateLogin() && this.validatePassword()) {
          this.$router.push('/dashboard')
        }
      }
    },
    computed: {
      validateLogin () {
        let login = this.login.value
        if (login.length) {
          this.login.error = false
          return true
        }

        this.login.error = true

        return false
      },
      validatePassword () {
        let password = this.password.value
        if (password.length) {
          this.password.error = false
          return true
        }

        this.password.error = true

        return false
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~variables'
  .q-toolbar
    z-index 1

  // TODO remove this index
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
      .form
        position relative
        .digital
          position absolute
          height 100%
          width 100%
          text-align center
          padding 30px
        .disabled
          opacity .2 !important
</style>
