<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Status" class="card-wrapper">
    <bq-status type="alert">Alert status</bq-status>
    <bq-status type="danger">Danger status</bq-status>
    <bq-status type="info">Information status</bq-status>
    <bq-status>Neutral status</bq-status>
    <bq-status type="success">Success status</bq-status>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
}

.card-wrapper :deep(.card__content) bq-status {
  text-align: center;
}
</style>
