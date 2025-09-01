<script setup lang="ts">
import data from '../gathr-01-data.json'
import IconAvatar from './icons/IconAvatar.vue'
import IconChat from './icons/IconChat.vue'
import IconNotifications from './icons/IconNotifications.vue'
import GathrLogo from './Logo/LogoGathr.vue'
import Placeholder from './Placeholder.vue'
</script>

<template>
  <header class="siteHeader">
    <div class="siteHeader--identity">
      <RouterLink class="logo-link" to="/">
        <GathrLogo :which="'full'"></GathrLogo>
      </RouterLink>
    </div>
    <nav class="siteHeader--mainNav --typo--body-small">
      <!-- <RouterLink to="/">Home</RouterLink> -->
      <RouterLink to="/events">Events</RouterLink>
      <RouterLink to="/posts">Posts</RouterLink>
      <RouterLink to="/communities">Communities</RouterLink>
    </nav>
    <nav class="siteHeader--userTools">
      <RouterLink to="/chats">
        <IconChat></IconChat>
      </RouterLink>
      <RouterLink to="/notifications">
        <IconNotifications></IconNotifications>
      </RouterLink>
      <RouterLink v-if="data.user.signedIn" to="/user-profile">
        <IconAvatar></IconAvatar>
      </RouterLink>
      <button v-else="data.user.signedIn">Sign in</button>
    </nav>
  </header>
</template>

<style>
.siteHeader {
  display: flex;
  gap: var(--prim-space-lg);
  align-items: center;
  padding-block: var(--prim-space-sm);
  border-block-end: 1px solid var(--color-border);
}

.siteHeader--identity {
  flex: 0;
}

.siteHeader--mainNav {
  flex: 3;
  display: flex;
}

.siteHeader--mainNav a {
  padding: var(--prim-space-sm) var(--prim-space-md);
  font-weight: var(--prim-font-weight-xl);
  text-transform: uppercase;
}

.siteHeader--userTools {
  flex: 2;
  display: flex;
  justify-content: end;
  gap: 1rem;
  flex-wrap: nowrap;
}

.logo-link {
  display: block;
  padding: 0;
}

.logo-link:hover {
  background-color: transparent;
}

.logo-link:hover svg {
  fill: var(--sem-color-link-hover);
}
</style>
