<template>
  <div class="x-error">
    <div :class="className" v-if="shouldDisplay">
      <small>{{ message }}</small>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'x-error',
    components: {},
    props: {
      message: {
        type: String,
        default () {
          return 'Algo de arrado ocorreu.'
        }
      },
      error: {
        type: Boolean
      },
      warning: {
        type: Boolean
      }
    },
    data: () => ({}),
    methods: {},
    computed: {
      className () {
        const {error, warning} = this
        if (error) {
          return 'text-negative'
        }
        if (warning) {
          return 'text-warning'
        }
        return ''
      },
      shouldDisplay () {
        const {error, warning} = this
        return error || warning
      }
    }
  }
</script>
<style lang="stylus" scoped>

</style>
