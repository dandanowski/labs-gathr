import SiteHeader from '../SiteHeader.vue'
import { vueRouter } from 'storybook-vue3-router'

export default {
  component: SiteHeader,
  title: 'SiteHeader',
  // tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {},
}

export const Default = {
  args: {},
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
