<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Input" class="card-wrapper">
    <bq-input placeholder="Placeholder">
      <div slot="label">
        <label>Input label</label>
      </div>
      <span slot="helper-text"> Helper text </span>
    </bq-input>
    <bq-input placeholder="Placeholder" validation-status="error">
      <label slot="label">Input label</label>
      <span slot="helper-text"> Helper text </span>
    </bq-input>

    <bq-input placeholder="Placeholder" validation-status="success">
      <label slot="label">Input label</label>
      <span slot="helper-text"> Helper text </span>
    </bq-input>

    <bq-input placeholder="Placeholder" validation-status="warning">
      <label slot="label">Input label</label>
      <span slot="helper-text"> Helper text </span>
    </bq-input>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
}
</style>
