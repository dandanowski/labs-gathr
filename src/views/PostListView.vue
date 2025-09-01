<script setup lang="ts">
import IconAdd from '@/components/icons/IconAdd.vue'
import data from '../gathr-01-data.json'
import PostListItem from '@/components/PostListItem.vue'
</script>

<template>
  <main>
    <header class="page-header">
      <h1>Posts</h1>
      <RouterLink v-if="data.user.signedIn" :to="{ name: 'postAdd' }">
        <IconAdd></IconAdd> Add New Post
      </RouterLink>
    </header>
    <PostListItem v-for="post in data.posts" :postDetail="post"></PostListItem>
  </main>
</template>

<style scoped></style>
