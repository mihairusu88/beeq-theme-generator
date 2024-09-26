<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Stepper" class="card-wrapper">
    <bq-steps type="dot">
      <bq-step-item>
        <bq-icon slot="prefix" name="circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>

      <bq-step-item status="error">
        <bq-icon slot="prefix" name="x-circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>

      <bq-step-item status="completed">
        <bq-icon slot="prefix" name="check-circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>

      <bq-step-item status="current">
        <bq-icon slot="prefix" name="circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>

      <bq-step-item status="disabled">
        <bq-icon slot="prefix" name="circle"></bq-icon>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
    </bq-steps>
    <bq-steps type="numeric">
      <bq-step-item>
        <span slot="prefix">1</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>

      <bq-step-item status="completed">
        <span slot="prefix">2</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>

      <bq-step-item status="error">
        <span slot="prefix">3</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>

      <bq-step-item status="current">
        <span slot="prefix">4</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>

      <bq-step-item status="disabled">
        <span slot="prefix">4</span>
        <span>Title</span>
        <span slot="description">Description</span>
      </bq-step-item>
    </bq-steps>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 60px;
}
</style>
