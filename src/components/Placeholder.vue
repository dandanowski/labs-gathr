<template>
  <div class="placeholder">
    <div class="wrap">
      <span class="title">
        <slot>Placeholder</slot>
      </span>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="100%" height="100%" />
        <rect x="0" y="0" width="100%" height="100%" />
        <line x1="0" y1="0" x2="100%" y2="100%" />
        <line x1="0" y1="100%" x2="100%" y2="0" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.placeholder {
  display: flex;
  height: 100%;
}

.placeholder .wrap {
  container-name: placeholder;
  container-type: inline-size;
  flex: 1;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder .title {
  margin: auto;
  padding: 8px 16px;
  font-size: 2rem;
  font-weight: 700;
  color: var(--sem-color-text, black);
  filter: drop-shadow(2px 2px 0 red) drop-shadow(-2px -2px 0 green);
  /* background-color: var(--color-background-mute); */
  border-radius: 24px;
  z-index: 1;
}

.placeholder svg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

svg rect,
svg line {
  stroke: light-dark(black, white);
  stroke-opacity: 0.15;
  stroke-width: 4;
}

svg rect {
  fill: light-dark(black, white);
  fill-opacity: 0.04;
  stroke-width: 8;
}

@container placeholder (width < 200px) {
  .placeholder .title {
    padding: 0 8px;
    font-size: 0.8rem;
  }
}
</style>
