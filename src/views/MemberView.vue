<script setup lang="ts">
import { ref } from 'vue'
import Placeholder from '@/components/Placeholder.vue'
import IconAvatar from '@/components/icons/IconAvatar.vue'

const props = defineProps({
  size: {
    type: String,
    default: 'small',
  },
  member: {
    type: Object,
    default: { name: 'Bob', type: 'Builder' },
  },
})
</script>

<template>
  <div v-if="size == 'small'" class="memberInfo">
    <div class="avatar">
      <IconAvatar :class="'icon--lg'"></IconAvatar>
    </div>
    <div class="info">
      <span class="member-name --typo--title-small">{{ member.name }}</span>
      <span class="member-level --typo--label-large">{{ member.type }}</span>
    </div>
  </div>
</template>

<style scoped>
.memberInfo {
  display: flex;
  gap: var(--prim-space-sm);
}

.avatar {
  /* min-width: 65px; */
  display: grid;
  margin: auto;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.member-name {
}
</style>
