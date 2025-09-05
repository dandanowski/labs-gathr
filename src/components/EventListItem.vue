<script setup lang="ts">
import { ref } from 'vue'
import IconCalendar from './icons/IconCalendar.vue'
import IconComment from './icons/IconComment.vue'

const props = defineProps({
  eventDetail: Object,
})

var thisEventStart = new Date(Date.now())
if (props.eventDetail) {
  thisEventStart = new Date(props.eventDetail.start)
}

</script>

<template>
  <RouterLink v-if="eventDetail" class="eventListItem surface"
    :to="{ name: 'eventView', params: { id: eventDetail.id } }">
    <div class="event--datetime">
      <IconCalendar :class="'icon--xl'"></IconCalendar>
      {{ thisEventStart.toDateString() }}
    </div>
    <span class="event--title --typo--title-small">{{ eventDetail.title }}</span>
    <p class="event--description">{{ eventDetail.description }}</p>
    <div class="event--meta --typo--label-large">
      <IconComment :class="'icon--sm'"></IconComment>
      {{ eventDetail.comments.list.length }} Comments
    </div>
  </RouterLink>
  <div v-else>Bad Event ID</div>
</template>

<script lang="ts">
// For Storybook
export default {
  name: 'EventListItem',
  compProps: {
    eventDetail: {
      type: Object,
      required: true,
      default: () => ({ id: '', description: '', title: '', start: '', end: '', location: '', comments: '' }),
      validator: (eventDetail: Object) => ['id', 'description', 'title', 'start', 'end', 'location', 'comments'].every((key) => key in eventDetail)
    }
  }
}
</script>

<style scoped>
.eventListItem {
  display: grid;
  gap: var(--prim-space-sm);
  column-gap: var(--prim-space-2xl);
  grid-template-areas:
    'date title title tile'
    'date desc desc desc'
    'date meta meta meta';
  margin-block-end: var(--prim-space-sm);
  padding: var(--sem-card-md);
}

.event--datetime {
  grid-area: date;
}

.event--title {
  display: block;
  /* padding-block-end: var(--prim-space-xs); */
  grid-area: title;
}

.event--description {
  grid-area: desc;
}

.event--meta {
  grid-area: meta;
}

.icon {
  /* display: block; */
}
</style>
