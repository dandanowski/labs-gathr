<script setup lang="ts">
import data from '../gathr-01-data.json'
import EventListItem from '@/components/EventListItem.vue'
import IconAdd from '@/components/icons/IconAdd.vue'
</script>

<template>
  <main>
    <header class="page-header">
      <h1>Events</h1>
      <RouterLink v-if="data.user.signedIn" :to="{ name: 'eventAdd' }">
        <IconAdd></IconAdd> Add New Event
      </RouterLink>
    </header>
    <EventListItem v-for="event in data.events" :eventDetail="event"></EventListItem>
  </main>
</template>

<style scoped>
button {
  padding: 0 var(--prim-space-xl);
}
</style>
