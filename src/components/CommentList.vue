<script setup lang="ts">
import { computed, ref } from 'vue'
import data from '../gathr-01-data.json'
import CommentItem from './CommentListItem.vue'
const props = defineProps({
  commentList: {
    type: Object,
    default: {},
  },
  enableComments: {
    type: Boolean,
    default: true,
  },
})
const thisCommentList = ref(props.commentList)
const thisCommentListLength = computed(() => thisCommentList.value.length)
const newComment = ref('')

function addComment() {
  thisCommentList.value.push({
    member: { name: data.user.details.fullName, type: data.user.details.memberType },
    comment: newComment.value,
  })
  newComment.value = ''
}
</script>

<template>
  <div class="commentList">
    <CommentItem
      v-if="thisCommentListLength > 0"
      v-for="comment in thisCommentList"
      :key="comment.id"
      :member="comment.member"
      >{{ comment.comment }}
    </CommentItem>
    <div v-else>No comments.</div>
    <div v-if="enableComments && data.user.signedIn" class="new-comment">
      <form @submit.prevent="addComment">
        <textarea v-model="newComment" required></textarea>
        <button>Add comment</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.commentList p:last-of-type {
  padding-block-end: 0;
}

.new-comment {
  padding: var(--prim-space-md) 0;
  border-block-start: 1px solid var(--color-border);
}
.new-comment form {
  display: flex;
  justify-content: end;
  gap: var(--prim-space-md);
}
.new-comment textarea {
  width: 60%;
  height: 3rem;
  padding: var(--prim-space-xs);
  color: var(--color-text);
  border-color: var(--color-border);
  background-color: var(--color-background);
}

.new-comment button {
  padding: 0 var(--prim-space-md);
}
</style>
