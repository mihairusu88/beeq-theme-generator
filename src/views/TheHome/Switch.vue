<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Switch" class="card-wrapper">
    <bq-switch>Toggle me!</bq-switch>
    <bq-switch checked>Toggle me!</bq-switch>
    <bq-switch disabled>Toggle me!</bq-switch>
    <bq-switch inner-label="icon">Toggle me!</bq-switch>
    <bq-switch reverse-order>Toggle me!</bq-switch>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}
</style>
