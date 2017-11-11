import lang from 'src/assets/locale'

export default {
  lang (state) {
    return lang[state.locale.lang]
  },
  drawer (state) {
    return state.layout.drawer.options
  },
  toolbar (state) {
    return state.layout.toolbar
  },
  drawerOpen (state) {
    return state.layout.drawer.active
  }
}
