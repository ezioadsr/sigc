<template>
  <div class="x-drawer-list">
    <q-list no-border link inset-delimiter>
      <div v-for="_item in drawer">
        <q-card-separator v-if="_item.separator"></q-card-separator>
        <q-list-header v-if="component[_item.section].header">{{component[_item.section].header}}</q-list-header>
        <q-item :key="_item.id" v-for="_sub_item in _item.items" @click="launch('http://quasar-framework.org')">
          <q-item-side :icon="_sub_item.icon"/>
          <q-item-main :label="component[_item.section][_sub_item.menu].label" :sublabel="component[_item.section][_sub_item.menu].sublabel"/>
        </q-item>
      </div>
    </q-list>
  </div>
</template>
<script>
  import { QList, QCardSeparator, QListHeader, QItem, QItemSide, QItemMain } from 'quasar-framework'
  import { ALayout } from 'src/components'
  
  export default {
    name: 'x-drawer-list',
    components: {QList, QCardSeparator, QListHeader, QItem, QItemSide, QItemMain},
    mixins: [ALayout],
    props: {
      drawer: {
        type: Array,
        required: true
      }
    }
  }
</script>
<style lang="stylus">

</style>
