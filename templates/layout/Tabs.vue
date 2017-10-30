<template>
  <!--<q-tabs>-->
    <!--<q-route-tab slot="title" icon="view_quilt" to="/test-layout/about" replace hide="icon" label="About"/>-->
    <!--<q-route-tab slot="title" icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="Toolbar"/>-->
    <!--<q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs"/>-->
    <!--<q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer"/>-->
  <!--</q-tabs>-->
</template>
<script>
  import {
    QTabs, QRouteTab
  } from 'quasar-framework'

  export default {
    name: 'tabs',
    components: {
      QTabs, QRouteTab
    }
  }
</script>
<style lang="stylus">

</style>
