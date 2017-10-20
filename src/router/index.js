import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },

  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/containers/Home'),
    },
    {
      path: '/code_of_conduct',
      name: 'CodeOfConduct',
      component: () => import('@/containers/CodeOfConduct'),
    },
    {
      path: '/why_attend/developers',
      name: 'WhyAttendForDevelopers',
      component: () => import('@/containers/WhyAttendForDevelopers'),
    },
    {
      path: '/why_attend/company',
      name: 'WhyAttendForCompany',
      component: () => import('@/containers/WhyAttendForCompany'),
    },
    {
      path: '/why_attend/general',
      name: 'WhyAttendForGeneral',
      component: () => import('@/containers/WhyAttendForGeneral'),
    },
    {
      path: '/schedule/conference',
      name: 'ScheduleConference',
      component: () => import('@/containers/ScheduleConference'),
    },
    {
      path: '/schedule/hackathon',
      name: 'ScheduleHackathon',
      component: () => import('@/containers/ScheduleHackathon'),
    },
    {
      path: '/schedule/speed_dating',
      name: 'ScheduleSpeedDating',
      component: () => import('@/containers/ScheduleSpeedDating'),
    },
    {
      path: '/venue',
      name: 'VenueMap',
      component: () => import('@/containers/VenueMap'),
    },
    {
      path: '/accommodation',
      name: 'Accommodation',
      component: () => import('@/containers/Accommodation'),
    },
    {
      path: '/sponsor',
      name: 'Sponsor',
      component: () => import('@/containers/Sponsor'),
    },
    {
      path: '/media',
      name: 'Media',
      component: () => import('@/containers/Media'),
    },
    {
      path: '/get_tickets',
      name: 'GetTickets',
      component: () => import('@/containers/GetTickets'),
    },
  ],
})
