/** Inputs Locales */
const XPassword = {
  floatLabel: 'Senha',
  errorLabel: 'Senha inválida'
}

const XLogin = {
  floatLabel: 'Login',
  errorLabel: 'Login inválido'
}

const AuthLogin = {
  submit: 'Entrar',
  remember: 'Lembre-me'
}

const XDrawerList = {
  main: {
    header: false,
    main: {
      label: 'Principal',
      sublabel: 'Geral'
    },
    today: {
      label: 'Hoje',
      sublabel: ''
    }
  },
  posting: {
    header: 'Lançamentos',
    posting: {
      label: 'Lançamentos',
      sublabel: ''
    },
    calendar: {
      label: 'Calendário',
      sublabel: ''
    }
  },
  help: {
    header: false,
    settings: {
      label: 'Configurações',
      sublabel: ''
    },
    help: {
      label: 'Ajuda',
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
