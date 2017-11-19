<template>
  <div class="x-drawer">
    <x-drawer-avatar :name="name" :avatar="avatar" :email="email"></x-drawer-avatar>
    <x-drawer-list :drawer="drawer"></x-drawer-list>
  </div>
</template>
<script>
  // import { XDrawerAvatar, XDrawerList } from 'src/components'
  import XDrawerAvatar from 'src/components/common/layout/XDrawerAvatar.vue'
  import XDrawerList from 'src/components/common/layout/XDrawerList.vue'
  
  import { QInput } from 'quasar-framework'
  
  export default {
    name: 'x-drawer',
    components: {
      XDrawerList, XDrawerAvatar, QInput
    },
    props: {
      email: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      avatar: {
        type: String,
        required: true
      },
      drawer: {
        type: Array,
        required: true
      }
    }
  }
</script>
<style>

</style>
