<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Icon" class="card-wrapper">
    <!-- Thin style -->
    <bq-icon name="bell-ringing-thin" size="64" color="stroke--brand"></bq-icon>
    <!-- Light style -->
    <bq-icon name="bell-ringing-light" size="64" color="stroke--brand"></bq-icon>
    <!-- Regular style (default) -->
    <bq-icon name="bell-ringing" size="64" color="stroke--brand"></bq-icon>
    <!-- Bold style -->
    <bq-icon name="bell-ringing-bold" size="64" color="stroke--brand"></bq-icon>
    <!-- Fill style -->
    <bq-icon name="bell-ringing-fill" size="64" color="stroke--brand"></bq-icon>
    <!-- Duotone style -->
    <bq-icon name="bell-ringing-duotone" size="64" color="stroke--brand"></bq-icon>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
