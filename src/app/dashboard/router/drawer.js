export default [
  {
    separator: false,
    header: false,
    items: [
      {
        icon: 'school',
        label: 'Principal',
        sublabel: 'Geral',
        route: '/dashboard/test1'
      },
      {
        icon: 'today',
        label: 'Hoje',
        sublabel: '',
        route: '/dashboard/test2'
      }
    ]
  },
  {
    separator: true,
    header: 'Lançamentos',
    items: [
      {
        icon: 'done_all',
        label: 'Lançamentos',
        sublabel: '',
        route: '/dashboard/test3'
      },
      {
        icon: 'date_range',
        label: 'Calendario',
        sublabel: '',
        route: '/dashboard/test3'
      }
    ]
  },
  {
    separator: true,
    header: false,
    items: [
      {
        icon: 'settings',
        label: 'Configurações',
        sublabel: '',
        route: '/dashboard/test1'
      },
      {
        icon: 'help',
        label: 'Ajuda',
        sublabel: '',
        route: '/dashboard/test2'
      }
    ]
  }
]
