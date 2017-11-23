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
          route: 'dashboard.index'
        },
        {
          menu: 'today',
          icon: 'today',
          route: 'dashboard.today'
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
          route: 'dashboard.posting'
        },
        {
          menu: 'calendar',
          icon: 'date_range',
          route: 'dashboard.calendar'
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
          route: 'dashboard.settings'
        },
        {
          menu: 'help',
          icon: 'help',
          route: 'dashboard.help'
        }
      ]
    }
  ],
  active: true
}
