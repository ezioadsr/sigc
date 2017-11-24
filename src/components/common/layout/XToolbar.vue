<template>
  <div class="x-toolbar">
    <q-toolbar slot="header">
      <q-btn v-for="_before in before" :key="_before.id" flat @click="click(_before)">
        <q-icon
          v-if="_before.hasOwnProperty('icon')"
          :name="icon(_before.icon)"
          :ios="ios(_before.icon)"
          :mat="mat(_before.icon)"/>
        <q-popover v-if="_before.hasOwnProperty('popover')" ref="_leftPopover">
          <q-list item-separator link>
            <q-item v-for="_popover in _before.popover" @click="click(_popover, 'before')" :key="_popover.id">
              {{_popover.label}}
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
      <q-toolbar-title>
        {{title}}
      </q-toolbar-title>
      <q-btn v-for="_after in after" :key="_after.id" flat @click="click(_after)">
        <q-icon
          v-if="_after.hasOwnProperty('icon')"
          :name="icon(_after.icon)"
          :ios="ios(_after.icon)"
          :mat="mat(_after.icon)"/>
        <q-popover v-if="_after.hasOwnProperty('popover')" ref="_rightPopover">
          <q-list item-separator link>
            <q-item v-for="_popover in _after.popover" @click="click(_popover, 'after')" :key="_popover.id">
              {{_popover.label}}
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
    </q-toolbar>
  </div>
</template>
<script>
  import { QToolbar, QToolbarTitle, QItem, QPopover, QBtn, QIcon, QList, QSideLink } from 'quasar-framework'
  import { isEmpty } from 'lodash'
  
  export default {
    name: 'x-toolbar',
    components: {QToolbar, QToolbarTitle, QItem, QPopover, QBtn, QIcon, QList, QSideLink},
    props: {
      title: {
        type: String,
        required: true
      },
      before: {
        type: Array,
        default: () => [
          {
            icon: {
              ios: 'navigate_before',
              mat: 'arrow_back'
            },
            handler: (component) => {
              component.$router.back()
            }
          }
        ]
      },
      after: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      click (item, scope) {
        let popover = false
        if (scope === 'before') {
          popover = this.$refs._leftPopover
        }
        if (scope === 'after') {
          popover = this.$refs._rightPopover
        }
        const {handler} = item
        handler(this)
        if (!isEmpty(popover)) {
          // TODO CHANGE THIS LINE ASAP
          popover[0].close()
          // TODO CHANGE THIS LINE ABOVE
        }
      },
      icon (icon) {
        if (typeof icon === 'object') {
          return null
        }
        return icon
      },
      ios (icon) {
        if (typeof icon === 'object' && icon.hasOwnProperty('ios')) {
          return icon.ios
        }
        return null
      },
      mat (icon) {
        if (typeof icon === 'object' && icon.hasOwnProperty('mat')) {
          return icon.mat
        }
        return null
      }
    }
  }
</script>
<style>

</style>
