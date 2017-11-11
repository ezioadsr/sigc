<template>
  <div class="dashboard-index">
    <x-layout padding ref="layout">
      <x-toolbar
        :before="before"
        :title="title"
        :after="after"
        slot="header"
        @toggle="toggle()"
        @logout="logout()"
        @help="help()">
      </x-toolbar>
      <x-drawer slot="left" @toggle="toggle()" :name="auth.name" :avatar="auth.avatar" :drawer="drawer" >
      </x-drawer>
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
    data: () => ({}),
    methods: {
      ...mapActions('auth', ['logout']),
      ...mapActions(['setDrawerState']),
      ...mapActions(['navigation']),
      help () {
        let name = 'help.index'
        this.$router.push({name})
      },
      toggle () {
        this.$refs.layout.toggleLeft()
      }
    },
    computed: {
      ...mapState(['title']),
      ...mapState(['auth']),
      ...mapGetters(['toolbar', 'drawer', 'drawerOpen']),
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
