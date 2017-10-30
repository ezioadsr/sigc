import lang from 'src/assets/locale'
import drawer from './layout/drawer'
import toolbar from './layout/toolbar'

const defaultLang = 'PtBr'
const supported = Object.keys(lang)

let selected = defaultLang

if (!lang.hasOwnProperty(defaultLang)) {
  selected = Object.keys(lang)[0]
}

export default {
  title: '',
  token: '',
  locale: {
    supported: supported,
    lang: selected
  },
  layout: {
    drawer: drawer,
    toolbar: toolbar
  }
}
