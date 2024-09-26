<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Divider" class="card-wrapper">
    <bq-divider>
      <p style="margin: 0; white-space: nowrap">Default divider</p>
    </bq-divider>
    <bq-divider orientation="horizontal">
      <p style="margin: 0; white-space: nowrap">Horizontal divider</p>
    </bq-divider>
    <bq-divider orientation="vertical">
      <p style="margin: 0; white-space: nowrap">Vertical divider</p>
    </bq-divider>
    <bq-divider dashed stroke-dash-width="12" stroke-dash-gap="7" stroke-linecap="butt"></bq-divider>
    <bq-divider></bq-divider>
    <bq-divider title-alignment="start">
      <p style="margin: 0; white-space: nowrap">Text Start</p>
    </bq-divider>
    <bq-divider title-alignment="middle">
      <p style="margin: 0; white-space: nowrap">Text Middle</p>
    </bq-divider>
    <bq-divider title-alignment="end">
      <p style="margin: 0; white-space: nowrap">Text End</p>
    </bq-divider>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
}
</style>
