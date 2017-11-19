<template>
  <div class="x-drawer-avatar">
    <div class="section-avatar">
      <img :src="avatar"/>
    </div>
    <div class="section-description">
      <div class="description-name">
        <span>{{name}}</span>
      </div>
      <div class="description-email">
        <span>{{email}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'x-drawer-avatar',
    data: () => ({}),
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
      }
    }
  }
</script>
<style lang="stylus">
  @import '~variables'
  .x-drawer-avatar
    height 11em
    background: $primary
    .section-avatar
      height 70%
      padding 1.3em
      img
        max-height 5em
        border-radius 50%
    .section-description
      color $light
      padding .6em
      height: 30%
</style>
