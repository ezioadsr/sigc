import lang from 'src/assets/locale'

export default {
  lang (state) {
    return lang[state.locale.lang]
  },
  drawer (state) {
    return state.layout.drawer
  },
  toolbar (state) {
    return state.layout.toolbar
  }
}
