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
      <div class="login" @submit.prevent="submit">
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
                  v-model="login.value"
                  :float-label="lang.login.label"
                  :type="'text'">
                </q-input>
              </q-field>

              <x-field>
                <x-password v-model="pass"></x-password>
              </x-field>

              <q-field :error="password.error" :error-label="password.errorLabel">
                <q-input
                  @submit="submit"
                  v-model="password.value"
                  :float-label="lang.password.label"
                  :type="'password'">
                </q-input>
              </q-field>
            </div>
            <div class="text-negative" v-if="error">
              <small>{{ error }}</small>
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
  import { XPassword, XField } from 'src/components'
  import { QField, QInput, QLayout, QCheckbox, QBtn, QToolbar, QToolbarTitle, QIcon } from 'quasar-framework'
  import lang from '@lang/index'
  import LocalForage from 'localforage'

  export default {
    name: 'login',
    components: {
      XPassword,
      XField,
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
        value: 'ezioadsr',
        error: false,
        errorLabel: lang.auth.login.errorLabel
      },
      pass: '',
      password: {
        value: '123456',
        error: false,
        errorLabel: lang.auth.password.errorLabel
      },
      remember: true,
      digital: false,
      error: false,
      lang: lang.auth
    }),
    methods: {
      submit (event) {
        if (this.validateInputLogin()) {
          this.validateInputPassword()
        }

        const {login, password} = this

        let error = login.error || password.error

        // SIMULATE LOGIN
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IjEyMzQ1Njc4OTAiLCJwYXNzd29yZCI6IkpvaG4gRG9lIiwicHJldmlsZWdlIjp0cnVlfQ.PMblP1Nu4nyvm7LUZdvRSXKg3OcP7imTmLf20lFTEl8'

        if (!error && login.value === 'ezioadsr' && password.value === '123456') {
          LocalForage.setItem('token', token)

          this.$router.push({name: 'dashboard.index'})

          return
        }

        error = !error ? 'Usuário ou senha inválidos' : false

        this.error = error
      },
      validateInputLogin () {
        let login = this.login.value
        if (login.length) {
          this.login.error = false
          return true
        }

        this.login.error = true

        return false
      },
      validateInputPassword () {
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
