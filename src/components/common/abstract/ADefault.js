import { mapGetters } from 'vuex'

export default {
  props: {
    dark: Boolean
  },
  data: () => ({
    wait: false
  }),
  mounted () {
    this.input = this.value
    setTimeout(() => { this.wait = true }, 100)
  },
  computed: {
    ...mapGetters(['lang']),
    component () {
      const {name} = this
      return this.lang.components[name]
    },
    name () {
      return this.$options.name
        .replace(/(-)/g, ' ')
        .replace(/\s(.)/g, function ($1) { return $1.toUpperCase() })
        .replace(/\s/g, '')
        .replace(/^(.)/, function ($1) { return $1.toUpperCase() })
    }
  }
}
