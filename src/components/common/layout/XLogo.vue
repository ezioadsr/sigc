<template>
  <div class="x-logo">
    <img :src="src">
  </div>
</template>
<script>
  export default {
    name: 'x-logo',
    components: {},
    props: {
      src: {
        type: String,
        required: true
      }
    },
    data: () => ({}),
    methods: {},
    computed: {}
  }
</script>
<style lang="stylus" scoped>

</style>
