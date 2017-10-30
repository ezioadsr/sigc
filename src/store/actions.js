import { Platform } from 'quasar-framework'

const navigation = (context, name, router) => {
  debugger
  router.push({name})
}

const goBack = (context, component, ref) => {
  let value = ref.value
  let modifiers = ref.modifiers

  let ctx = {value: value, position: window.history.length - 1, single: modifiers.single}

  if (Platform.is.cordova) {
    ctx.goBack = function () {
      component.$router.go(ctx.single ? -1 : ctx.position - window.history.length)
    }
  }
  else {
    ctx.goBack = function () {
      component.$router.replace(ctx.value)
    }
  }
  debugger
}

export default {
  navigation, goBack
}
