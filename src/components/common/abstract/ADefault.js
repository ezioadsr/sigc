export default {
  props: {
    label: String,
    icon: String,
    helper: String,
    count: [Number, Boolean],
    inset: String,
    dark: Boolean,
    labelWidth: Number
  },
  data: () => ({
    data: null,
    errorLabel: '',
    floatLabel: ''
  }),
  mounted () {
    this.data = this.value
    const name = this.toName(this.$options.name)
    this.errorLabel = this.lang.components[name].errorLabel
    this.floatLabel = this.lang.components[name].floatLabel
  },
  methods: {
    toName (str) {
      return str
        .replace('-', ' ')
        .replace(/\s(.)/g, function ($1) { return $1.toUpperCase() })
        .replace(/\s/g, '')
        .replace(/^(.)/, function ($1) { return $1.toUpperCase() })
    }
  }
}
