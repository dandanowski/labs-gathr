import PostListItem from '../PostListItem.vue'
import { vueRouter } from 'storybook-vue3-router'

export default {
  component: PostListItem,
  title: 'PostListItem',
  //   tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {},
}

export const Default = {
  args: {
    postDetail: {
      id: 1,
      title: 'Motivational Message',
      description:
        'Great job, team! I want to take a moment to recognize everyone’s hard work and dedication at practice this week. Each of you has shown tremendous effort and a willingness to improve, which truly makes a difference for the whole group. Let’s keep encouraging and supporting one another, both on and off the field. Remember, our strength lies in our unity and teamwork—when we work together, we can achieve so much more. Keep up the fantastic work, stay positive, and let’s continue striving for our goals. See you all at the next session, ready to give it your all!',
      author: {
        name: 'Coach Sam',
        type: 'Coach',
      },
      pubdate: '2025-08-30T10:00Z',
      comments: {
        list: [],
        enabled: true,
      },
    },
  },
}

const noRoute = {}

const customRoutes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'postView',
    component: noRoute,
  },
]

Default.decorators = [vueRouter(customRoutes)]
