<template>
  <div class="x-drawer">
    <x-drawer-avatar :name="name" :avatar="avatar"></x-drawer-avatar>
    <x-drawer-list :drawer="drawer"></x-drawer-list>
  </div>
</template>
<script>
  import { XDrawerAvatar, XDrawerList } from 'src/components'
  
  export default {
    name: 'x-drawer',
    props: {
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
    },
    components: {
      'x-drawer-avatar': XDrawerAvatar,
      'x-drawer-list': XDrawerList
    }
  }
</script>
<style>

</style>
