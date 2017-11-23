export default [
  {
    path: '/dashboard',
    component: 'app/dashboard/index.vue',
    children: [
      {
        name: 'dashboard.index',
        path: '',
        component: 'app/dashboard/components/index.vue'
      },
      {
        name: 'dashboard.help',
        path: 'help',
        component: 'app/dashboard/components/help/index.vue'
      },
      {
        name: 'dashboard.settings',
        path: 'settings',
        component: 'app/dashboard/components/Settings.vue'
      },
      {
        name: 'dashboard.calendar',
        path: 'calendar',
        component: 'app/dashboard/components/Calendar.vue'
      },
      {
        name: 'dashboard.posting',
        path: 'posting',
        component: 'app/dashboard/components/Posting.vue'
      },
      {
        name: 'dashboard.today',
        path: 'today',
        component: 'app/dashboard/components/Today.vue'
      }
    ]
  }
]
