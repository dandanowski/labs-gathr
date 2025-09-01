import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventAddView from '@/views/EventAddView.vue'
import EventListView from '@/views/EventListView.vue'
import EventDetailView from '@/views/EventDetailView.vue'
import PostAddView from '@/views/PostAddView.vue'
import PostListView from '@/views/PostListView.vue'
import PostDetailView from '@/views/PostDetailView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import SampleView from '@/views/style-guide/SampleView.vue'
import ChatsView from '@/views/ChatsView.vue'
import NotificationsView from '@/views/NotificationsView.vue'
import CommunitiesView from '@/views/CommunitiesView.vue'
import StyleGuideView from '@/views/style-guide/StyleGuideView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/events',
      name: 'events',
      component: EventListView,
    },
    {
      path: '/event/:id',
      name: 'eventView',
      component: EventDetailView,
    },
    {
      path: '/event/add',
      name: 'eventAdd',
      component: EventAddView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostListView,
    },
    {
      path: '/post/:id',
      name: 'postView',
      component: PostDetailView,
    },
    {
      path: '/post/add',
      name: 'postAdd',
      component: PostAddView,
    },
    {
      path: '/communities',
      name: 'communitiesView',
      component: CommunitiesView,
    },
    {
      path: '/chats',
      name: 'chatView',
      component: ChatsView,
    },
    {
      path: '/notifications',
      name: 'notificationsView',
      component: NotificationsView,
    },
    {
      path: '/user-profile',
      name: 'userProfile',
      component: UserProfileView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/sample',
      name: 'sampleView',
      component: SampleView,
    },
    {
      path: '/sample/content',
      name: 'sampleView',
      component: SampleView,
    },
    {
      path: '/sample/style-guide',
      name: 'styleguideView',
      component: StyleGuideView,
    },
  ],
})

export default router
