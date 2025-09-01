<script setup lang="ts">
import MemberView from '../views/MemberView.vue'
import Placeholder from './Placeholder.vue'
const props = defineProps({
  member: Object,
})
</script>

<template>
  <div class="commentItem">
    <div class="commentItem--meta">
      <MemberView :member="member"></MemberView>
    </div>
    <div class="commentItem--content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.commentItem {
  display: flex;
  gap: var(--prim-space-xl);
  margin-bottom: 1rem;
  padding: var(--prim-space-xs) 0;
}

.commentItem--meta {
  flex: 1;
}

.commentItem--content {
  flex: 3;
  padding: var(--prim-space-sm);
  background: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}
</style>
