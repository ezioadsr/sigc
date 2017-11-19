/** Inputs Locales */
const XPassword = {
  floatLabel: 'Password',
  errorLabel: 'Wrong password'
}

const XLogin = {
  floatLabel: 'Login',
  errorLabel: 'Wrong user'
}

const AuthLogin = {
  submit: 'Login',
  remember: 'Remember-me'
}

const XDrawerList = {
  main: {
    header: false,
    main: {
      label: 'Main',
      sublabel: 'General'
    },
    today: {
      label: 'Today',
      sublabel: ''
    }
  },
  posting: {
    header: 'Posting data',
    posting: {
      label: 'Post',
      sublabel: ''
    },
    calendar: {
      label: 'Calendar',
      sublabel: ''
    }
  },
  help: {
    header: false,
    settings: {
      label: 'Settings',
      sublabel: ''
    },
    help: {
      label: 'Help',
      sublabel: ''
    }
  }
}

const components = {XPassword, XLogin, AuthLogin, XDrawerList}

const app = {}

export default {components, app}
//
// export default {
//   auth: {
//     login: {
//       label: 'Login',
//       errorLabel: 'Login inválido'
//     },
//     password: {
//       label: 'Senha',
//       errorLabel: 'Senha inválida'
//     },
//     remember: 'Lembrar',
//     submit: 'Entrar',
//     forget: 'Esqueci minha senha'
//   }
// }
