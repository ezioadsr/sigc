export default {
  before: [
    {
      icon: 'menu',
      handler: (component) => {
        component.$emit('toggle')
      }
    }
  ],
  after: [
    {
      icon: 'more_vert',
      handler: (component) => {

      },
      popover: [
        {
          label: 'Sair',
          handler: (component) => {
            const name = 'action.logout'
            component.$router.push({name})
          }
        },
        {
          label: 'Ajuda',
          handler: (component) => {
            const name = 'dashboard.help'
            component.$router.push({name})
          }
        }
      ]
    }
  ]
}
