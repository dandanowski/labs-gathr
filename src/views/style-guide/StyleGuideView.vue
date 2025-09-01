<script setup>
const tshirtSizes = ['5xl', '4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs']
const color = {
  palettes: [
    'primary',
    'secondary',
    'tertiary',
    'accent',
    'neutral',
    'feedback-success',
    'feedback-warning',
    'feedback-error',
    'feedback-info',
  ],
  rampCount: 9,
}
</script>

<template>
  <main class="style-guide">
    <header class="page-header">
      <h1>Style Guide</h1>
    </header>
    <section class="page-content">
      <h3>Typography</h3>
      <section class="typography sample">
        <div class="--typo--display-large">Display Large</div>
        <div class="--typo--display-medium">Display Medium</div>
        <div class="--typo--display-small">Display Small</div>

        <div class="--typo--headline-large">Headline Large</div>
        <div class="--typo--headline-medium">Headline Medium</div>
        <div class="--typo--headline-small">Headline Small</div>

        <div class="--typo--title-large">Title Large</div>
        <div class="--typo--title-medium">Title Medium</div>
        <div class="--typo--title-small">Title Small</div>

        <div class="--typo--body-large">Body Large</div>
        <div class="--typo--body-medium">Body Medium</div>
        <div class="--typo--body-small">Body Small</div>

        <div class="--typo--label-large">Label Large</div>
        <div class="--typo--label-medium">Label Medium</div>
        <div class="--typo--label-small">Label Small</div>
      </section>

      <h3>Font Properties</h3>
      <section class="sample font-size">
        <div v-for="size in tshirtSizes" :class="'--prim-font-size-' + size">
          --prim-font-size-{{ size }}
        </div>
      </section>
      <section class="sample lineHeight dimension">
        <div v-for="size in tshirtSizes">
          --prim-lineHeight-{{ size }}
          <div :class="'swatch --prim-lineHeight-' + size"></div>
        </div>
      </section>

      <h3>Color Palette</h3>
      <section
        v-for="palette in color.palettes"
        :class="'sample color-swatch ' + palette + '-color'"
      >
        <span>{{ palette }}</span>
        <div v-for="n in color.rampCount" :class="'--prim-color-' + palette + '-' + n + '00'"></div>
      </section>
    </section>
  </main>
</template>
