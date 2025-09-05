import EventListItem from '../EventListItem.vue'
import { vueRouter } from 'storybook-vue3-router'

export default {
  component: EventListItem,
  title: 'EventListItem',
  // tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {},
}

export const Default = {
  args: {
    eventDetail: {
      id: 1,
      title: 'Weekly Practice: Offensive Drills',
      description:
        "Focus on offensive plays, passing accuracy, and coordinated attacks. We'll be running through different set plays and working on team chemistry in the final third. Please arrive 15 minutes early for warm-ups. Bring your water bottle and shin guards.",
      start: '2025-09-02T18:00Z',
      end: '2025-09-02T19:30Z',
      location: 'Central High School Field',
      comments: {
        list: [],
      },
    },
  },
}

const noRoute = {}

const customRoutes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'eventView',
    component: noRoute,
  },
]

Default.decorators = [vueRouter(customRoutes)]
