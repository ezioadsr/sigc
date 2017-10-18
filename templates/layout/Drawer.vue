<template>
  <div>
    <q-list no-border link inset-delimiter>
      <div v-for="_item in items">
        <q-card-separator v-if="_item.separator"></q-card-separator>
        <q-list-header v-if="_item.header">{{_item.header}}</q-list-header>
        <q-item v-for="_sub_item in _item.items" @click="launch('http://quasar-framework.org')">
          <q-item-side :icon="_sub_item.icon"/>
          <q-item-main :label="_sub_item.label" :sublabel="_sub_item.sublabel"/>
        </q-item>
      </div>
    </q-list>
  </div>
</template>
<script>
  import { QList, QListHeader, QItem, QItemSide, QItemMain, QCardSeparator } from 'quasar-framework'
  import Drawer from 'src/app/dashboard/router/drawer'

  export default {
    name: 'drawer',
    components: {
      QList, QListHeader, QItem, QItemSide, QItemMain, QCardSeparator
    },
    data: () => ({
      items: Drawer
    })
  }
</script>
<style lang="stylus">

</style>
