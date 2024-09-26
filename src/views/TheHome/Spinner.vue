<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Spinner" class="card-wrapper">
    <bq-spinner size="large" text-position="bellow">
      <span>Loading...</span>
    </bq-spinner>
    <bq-spinner animation text-position="bellow">
      <span>Loading...</span>
    </bq-spinner>
    <bq-spinner animation size="small" text-position="bellow">
      <span>Loading...</span>
    </bq-spinner>
    <bq-spinner animation size="large" text-position="bellow">
      <bq-icon name="spinner-gap" slot="icon"></bq-icon>
      <span>Loading...</span>
    </bq-spinner>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
}
</style>
