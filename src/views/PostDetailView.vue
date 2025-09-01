<script setup lang="ts">
import { useRoute } from 'vue-router'
import data from '../gathr-01-data.json'
import Placeholder from '@/components/Placeholder.vue'
import MemberView from './MemberView.vue'
import CommentList from '@/components/CommentList.vue'

const route = useRoute()
function thisPost(post: any) {
  return post.id == route.params.id
}
const postDetails = data.posts.find(thisPost)
</script>

<template>
  <main v-if="postDetails">
    <article>
      <header class="page-header">
        <h1>{{ postDetails.title }}</h1>
      </header>
      <section class="post--meta">
        <div class="post--meta">
          <div class="post--pubdate">
            <placeholder>Post Pubdate</placeholder>
          </div>
          <div class="post--author">
            <MemberView></MemberView>
          </div>
        </div>
      </section>
      <section class="post--description">{{ postDetails.description }}</section>
      <section class="post--comments">
        <CommentList
          :enable-comments="postDetails.comments.enabled"
          :comment-list="postDetails.comments.list"
        >
        </CommentList>
      </section>
    </article>
  </main>
  <main v-else="postDetails">Bad Post ID</main>
</template>

<style scoped>
.post--meta {
  display: flex;
  gap: var(--prim-space-xl);
}

.post--pubdate {
  flex: 1;
}

.post--author {
  flex: 1;
}

.post--description {
  padding-block: var(--prim-space-xl);
}

.post--comments {
  padding-block: var(--prim-space-xl);
  border-block-start: 1px solid var(--color-border);
}
</style>
