<template>
  <div class="x-drawer-list">
    <q-list no-border link inset-delimiter>
      <div
        v-for="_item in drawer">
        
        <q-card-separator
          v-if="_item.separator"/>
        
        <q-list-header
          v-if="component[_item.section].header">
          
          {{component[_item.section].header}}
        
        </q-list-header>
        
        <q-side-link
          item
          v-for="_sub_item in _item.items"
          :to="{name: _sub_item.route}"
          :key="_item.id"
          @click="go(_sub_item.route)">
          
          <q-item-side :icon="_sub_item.icon"/>
          
          <q-item-main
            :label="component[_item.section][_sub_item.menu].label"
            :sublabel="component[_item.section][_sub_item.menu].sublabel"/>
        </q-side-link>
      
      </div>
    </q-list>
  </div>
</template>
<script>
  import { QList, QCardSeparator, QListHeader, QItem, QItemSide, QSideLink, QItemMain } from 'quasar-framework'
  import { ALayout } from 'src/components'
  
  export default {
    name: 'x-drawer-list',
    components: {QList, QCardSeparator, QListHeader, QItem, QItemSide, QSideLink, QItemMain},
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
