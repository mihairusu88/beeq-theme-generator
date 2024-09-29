<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Textarea" class="card-wrapper">
    <bq-textarea placeholder="Placeholder...">
      <label slot="label">Label</label>
      <span slot="helper-text">
        <bq-icon name="star"></bq-icon>
        Helper text
      </span>
    </bq-textarea>

    <bq-textarea
      disabled
      placeholder="Placeholder..."
      value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nulla. Ab non odio facere enim, voluptatum voluptates quod molestias suscipit fugiat et expedita accusamus quidem nostrum maxime illo recusandae ratione?"
    >
      <label slot="label">Label</label>
      <span slot="helper-text">
        <bq-icon name="star"></bq-icon>
        Helper text
      </span>
    </bq-textarea>
    <bq-textarea
      placeholder="Placeholder..."
      readonly
      value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, nulla. Ab non odio facere enim, voluptatum voluptates quod molestias suscipit fugiat et expedita accusamus quidem nostrum maxime illo recusandae ratione?"
    >
      <label slot="label">Label</label>
      <span slot="helper-text">
        <bq-icon name="star"></bq-icon>
        Helper text
      </span>
    </bq-textarea>
    <bq-textarea
      maxlength="100"
      placeholder="Placeholder..."
      validation-status="error"
      value="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    >
      <label slot="label">Label</label>
      <span slot="helper-text">
        <bq-icon name="star"></bq-icon>
        Helper text
      </span>
    </bq-textarea>
    <bq-textarea
      maxlength="100"
      placeholder="Placeholder..."
      validation-status="warning"
      value="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    >
      <label slot="label">Label</label>
      <span slot="helper-text">
        <bq-icon name="star"></bq-icon>
        Helper text
      </span>
    </bq-textarea>
    <bq-textarea
      maxlength="100"
      placeholder="Placeholder..."
      validation-status="success"
      value="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    >
      <label slot="label">Label</label>
      <span slot="helper-text">
        <bq-icon name="star"></bq-icon>
        Helper text
      </span>
    </bq-textarea>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @apply md:grid-cols-3;
}
</style>
