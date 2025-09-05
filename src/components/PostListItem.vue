<script setup lang="ts">
import Placeholder from './Placeholder.vue'
import IconComment from './icons/IconComment.vue'

const props = defineProps({
  postDetail: {
    id: Number,
    title: String,
    description: String,
    author: {
      name: String,
      type: String,
    },
    pubdate: Date,
    comments: {
      list: Array,
      enabled: Boolean,
    },
  },
})
var thisPostPubDate = new Date(Date.now())
if (props.postDetail) {
  thisPostPubDate = new Date(props.postDetail.pubdate)
}
</script>

<template>
  <RouterLink v-if="postDetail" class="postListItem surface" :to="{ name: 'postView', params: { id: postDetail.id } }">
    <Placeholder class="post--icon">Post icon</Placeholder>
    <span class="post--pubdate --typo--label-large">{{ thisPostPubDate.toDateString() }}</span>
    <span class="post--title --typo--title-small">{{ postDetail.title }}</span>
    <p class="post--description">{{ postDetail.description }}</p>
    <div class="event--meta --typo--label-large">
      <IconComment :class="'icon--sm'"></IconComment>
      <span v-if="postDetail.comments && postDetail.comments.list">{{ postDetail.comments.list.length }}</span>
      <span v-else>0</span>
      Comments
    </div>
  </RouterLink>
  <div v-else>Bad Post ID</div>
</template>

<script lang="ts">
export default {
  name: 'PostListItem',
  compProps: {
    postDetail: {
      type: Object,
      required: true,
      default: () => ({ id: '', description: '', title: '', pubdate: '', comments: '' }),
      validator: (postDetail: Object) => ['id', 'description', 'title', 'pubdate', 'comments'].every((key) => key in postDetail)
    }
  }
}
</script>

<style scoped>
.postListItem {
  display: grid;
  gap: var(--prim-space-sm);
  column-gap: var(--prim-space-2xl);
  grid-template-areas:
    'icon pubdate pubdate pubdate'
    'icon title title title'
    'icon desc desc desc'
    'icon meta meta meta';
  margin-block-end: var(--prim-space-sm);
  padding: var(--sem-card-md);
}

.post--icon {
  grid-area: icon;
  width: 120px;
}

.post--pubdate {
  grid-area: pubdate;
}

.post--description {
  grid-area: desc;
}

.post--meta {
  grid-area: meta;
}

.post--title {
  grid-area: title;
  display: block;
}
</style>
