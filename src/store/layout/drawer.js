export default {
  options: [
    {
      section: 'main',
      separator: false,
      header: false,
      items: [
        {
          menu: 'main',
          icon: 'school',
          route: '/dashboard/test1'
        },
        {
          menu: 'today',
          icon: 'today',
          route: '/dashboard/test2'
        }
      ]
    },
    {
      section: 'posting',
      separator: true,
      header: 'Lançamentos',
      items: [
        {
          menu: 'posting',
          icon: 'done_all',
          route: '/dashboard/test3'
        },
        {
          menu: 'calendar',
          icon: 'date_range',
          route: '/dashboard/test3'
        }
      ]
    },
    {
      section: 'help',
      separator: true,
      header: false,
      items: [
        {
          menu: 'settings',
          icon: 'settings',
          route: '/dashboard/test1'
        },
        {
          menu: 'help',
          icon: 'help',
          route: '/dashboard/test2'
        }
      ]
    }
  ],
  active: true
}
