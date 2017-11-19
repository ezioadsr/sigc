import { Ripple } from 'quasar-framework'
import ADefault from './ADefault'

export default {
  mixins: [ADefault],
  props: {
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
