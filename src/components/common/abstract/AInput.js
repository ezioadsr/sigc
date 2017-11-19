import ADefault from './ADefault'

export default {
  mixins: [ADefault],
  props: {
    label: String,
    icon: String,
    helper: String,
    count: [Number, Boolean],
    inset: String,
    dark: Boolean,
    labelWidth: Number,
    value: [String, Number, Boolean, Array, Object]
  },
  data: () => ({
    input: null
  }),
  watch: {
    value (value) {
      this.input = value
    }
  }
}
