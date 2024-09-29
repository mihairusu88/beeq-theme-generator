<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Checkbox" class="card-wrapper">
    <bq-checkbox>Checkbox label</bq-checkbox>
    <bq-checkbox> By clicking here, I state that I have read and understood the terms and conditions. </bq-checkbox>
    <bq-checkbox background-on-hover>Checkbox label</bq-checkbox>
    <bq-checkbox checked>Checkbox label</bq-checkbox>
    <bq-checkbox disabled>Checkbox label</bq-checkbox>
    <bq-checkbox indeterminate>Checkbox label</bq-checkbox>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  @apply md:grid-cols-3;
}
</style>
