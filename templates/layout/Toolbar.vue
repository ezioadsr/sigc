<template>
  <!--<q-toolbar>-->
    <!--<q-btn flat @click="layout()">-->
      <!--<q-icon :name="icon"/>-->
    <!--</q-btn>-->
    <!--<q-toolbar-title>-->
      <!--Quasar App-->
      <!--<div slot="subtitle">Running on Quasar v{{$q.version}}</div>-->
    <!--</q-toolbar-title>-->
  <!--</q-toolbar>-->
</template>
<script>
  import {
    QToolbar, QBtn, QToolbarTitle, QIcon
  } from 'quasar-framework'

  export default {
    name: 'toolbar',
    components: {
      QToolbar, QBtn, QToolbarTitle, QIcon
    },
    props: {
      handler: {
        required: true
      },
      icon: {
        required: true
      }
    },
    created () {
      console.log(this.layout)
    }
  }
</script>
<style lang="stylus">

</style>
