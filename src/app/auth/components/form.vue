<template>
  <div class="c-auth-form">
    <div class="digital">
      <q-icon v-show="digital" name="fingerprint" size="5em"></q-icon>
    </div>
    <div :class="digital ? 'disabled' : ''">
      <div>
        <q-field :error="login.error" :error-label="login.errorLabel">
          <q-input
            v-model="login.value"
            :float-label="'teste'"
            :type="'text'">
          </q-input>
        </q-field>
        
        <x-password v-model="password"></x-password>
        
        <!--<q-field :error="password.error" :error-label="password.errorLabel">-->
        <!--<q-input-->
        <!--@submit="submit"-->
        <!--v-model="password.value"-->
        <!--:float-label="'teste'"-->
        <!--:type="'password'">-->
        <!--</q-input>-->
        <!--</q-field>-->
      </div>
      <div class="text-negative" v-if="error">
        <small>{{ error }}</small>
      </div>
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
      <div>
        <a>
          <small>{{}}</small>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import { QIcon }
  
  export default {
    name: 'c-auth-form'
  }
</script>
<style lang="stylus">
  .c-auth-form
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
