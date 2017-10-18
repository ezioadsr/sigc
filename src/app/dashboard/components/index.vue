<template>
  <layout>
    <div slot="modal">
      <q-modal ref="maximizedModal" maximized>
        <q-modal-layout>
          <q-toolbar slot="header">
            <q-btn flat @click="$refs.maximizedModal.close()">
              <q-icon ios="chevron_left" mat="arrow_back"/>
            </q-btn>
            <q-toolbar-title>
              Some Another Title
            </q-toolbar-title>
          </q-toolbar>
          <div class="layout-padding">
            <h1>Modal</h1>

            <q-btn color="primary" @click="$refs.layoutModal.close()">Close</q-btn>
            <p class="caption" v-for="n in 15">This is a Modal presenting a Layout.</p>
          </div>
        </q-modal-layout>
      </q-modal>
      <q-btn @click="$refs.maximizedModal.open()">Vutão</q-btn>
    </div>
  </layout>
</template>
<script>
  import Layout from '../../../../templates/layout.vue'
  import Toolbar from '../../../../templates/layout/Toolbar.vue'
  import {QModal, QBtn, QToolbar, QIcon, QToolbarTitle, QModalLayout} from 'quasar-framework'

  export default {
    name: 'app',
    components: {
      Layout,
      Toolbar,
      QModal,
      QBtn,
      QToolbar,
      QIcon,
      QToolbarTitle,
      QModalLayout
    }
  }
</script>
<style lang="stylus">

</style>
