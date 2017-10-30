import { Ripple } from 'quasar-framework'

export default {
  props: {
    dark: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    ripple: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  directives: {
    Ripple
  }
}
