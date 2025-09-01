<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import data from '../gathr-01-data.json'
import CommentList from '@/components/CommentList.vue'
import MemberView from '@/views/MemberView.vue'
import Placeholder from '@/components/Placeholder.vue'

const route = useRoute()
function thisEvent(event: any) {
  return event.id == route.params.id
}
const eventDetails = data.events.find(thisEvent)
</script>

<template>
  <main v-if="eventDetails">
    <article>
      <header class="page-header">
        <h1>{{ eventDetails.title }}</h1>
      </header>
      <section class="event--meta">
        <div class="event--meta">
          <div class="event--details">
            <placeholder>Event Date/Time</placeholder>
          </div>
          <div class="event--owner">
            <MemberView :member="eventDetails.owner"></MemberView>
          </div>
        </div>
      </section>
      <section class="event--description">{{ eventDetails.description }}</section>
      <section class="event--comments">
        <CommentList
          :enable-comments="eventDetails.comments.enabled"
          :commentList="eventDetails.comments.list"
        >
        </CommentList>
      </section>
    </article>
  </main>
  <main v-else="eventDetails">Bad Event ID</main>
</template>

<style scoped>
.event--meta {
  display: flex;
  gap: var(--prim-space-xl);
}

.event--details {
  flex: 1;
}

.event--owner {
  flex: 1;
}

.event--description {
  padding-block: var(--prim-space-xl);
}

.event--comments {
  padding-block: var(--prim-space-xl);
  border-block-start: 1px solid var(--color-border);
}
</style>
