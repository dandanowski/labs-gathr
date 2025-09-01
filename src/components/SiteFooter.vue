<template>
  <footer class="siteFooter">
    <p>Some footer content</p>

    <form id="theme-toggle" class="color-mode">
      <label><input type="radio" name="color-mode" value="light" /> Light</label>
      <label><input type="radio" name="color-mode" value="dark" /> Dark</label>
      <label><input type="radio" name="color-mode" value="auto" /> Auto</label>
    </form>

    <nav>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/sample/content">(Sample Content)</RouterLink>
      <RouterLink to="/sample/style-guide">(Style Guide)</RouterLink>
    </nav>
  </footer>
</template>

<style scoped>
.siteFooter {
  display: flex;
  justify-content: space-between;
  padding-block: var(--prim-space-2xl);
  font-size: 0.8rem;
  border-top: 1px solid var(--color-border);
}

.siteFooter p {
  text-align: center;
}

.siteFooter nav {
  display: flex;
  gap: var(--prim-space-xl);
}
#theme-toggle {
  display: flex;
  gap: 16px;
  input[type='radio'] {
    position: absolute;
    top: -999px;
    left: -999px;
    opacity: 0;
  }
  label {
    display: block;
    color: var(--sem-color-link);
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      color: var(--comp-link--color-hover);
    }
  }
}
</style>
