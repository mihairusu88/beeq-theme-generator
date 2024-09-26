<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Select" class="card-wrapper">
    <bq-select placeholder="Placeholder">
      <label slot="label">Select label</label>
      <span slot="helper-text"> Helper text </span>
      <bq-option value="1">Option 1</bq-option>
      <bq-option value="2">Option 2</bq-option>
      <bq-option value="3">Option 3</bq-option>
    </bq-select>
    <bq-select autofocus open placeholder="Placeholder" value="2">
      <label slot="label">Select label</label>
      <span slot="helper-text"> Helper text </span>
      <bq-option value="1">Option 1</bq-option>
      <bq-option value="2">Option 2</bq-option>
      <bq-option value="3">Option 3</bq-option>
    </bq-select>
    <bq-select placeholder="Placeholder" value="2" disabled>
      <label slot="label">Select label</label>
      <span slot="helper-text"> Helper text </span>
      <bq-option value="1">Option 1</bq-option>
      <bq-option value="2">Option 2</bq-option>
      <bq-option value="3">Option 3</bq-option>
    </bq-select>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
}
</style>
