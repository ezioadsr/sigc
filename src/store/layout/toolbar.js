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
            component.$emit('logout')
          }
        },
        {
          label: 'Ajuda',
          handler: (component) => {
            component.$emit('help')
          }
        }
      ]
    }
  ]
}
