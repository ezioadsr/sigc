<template>
  <div class="dashboard-index">
    <x-layout padding>
      <x-toolbar
        :before="before"
        :title="title"
        :after="after"
        slot="header"
        @logout="logout()"
        @help="help()"
      
      ></x-toolbar>
      <x-drawer :name="auth.name" :avatar="auth.avatar" :drawer="drawer" slot="left"></x-drawer>
    </x-layout>
  </div>
</template>
<script>
  import { XLayout, XDrawer, XToolbar } from 'src/components'
  import { mapState, mapGetters, mapActions } from 'vuex'
  
  export default {
    name: 'dashboard-index',
    components: {
      XLayout,
      XDrawer,
      XToolbar
    },
    methods: {
      ...mapActions('auth', ['logout']),
      ...mapActions(['navigation']),
      help () {
        let name = 'help.index'
        this.$router.push({name})
      }
    },
    computed: {
      ...mapState(['title']),
      ...mapState(['auth']),
      ...mapGetters(['toolbar', 'drawer']),
      before () {
        const {toolbar} = this
        return toolbar.hasOwnProperty('before') ? toolbar.before : false
      },
      after () {
        const {toolbar} = this
        return toolbar.hasOwnProperty('after') ? toolbar.after : false
      }
    }
  }
</script>
<style>

</style>
