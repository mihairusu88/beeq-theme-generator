<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Progress" class="card-wrapper">
    <bq-progress value="30"></bq-progress>
    <bq-progress thickness="large" value="30"></bq-progress>
    <bq-progress type="error" value="30"></bq-progress>
    <bq-progress border-shape="square" value="80"></bq-progress>
    <bq-progress label value="65"></bq-progress>
    <bq-progress enable-tooltip value="45"></bq-progress>
    <bq-progress indeterminate></bq-progress>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
}
</style>
