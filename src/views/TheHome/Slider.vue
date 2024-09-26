<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Slider" class="card-wrapper">
    <div>
      <bq-slider max="100" value="30"></bq-slider>
    </div>
    <div>
      <bq-slider type="range" value="[20,70]"></bq-slider>
    </div>
    <div>
      <bq-slider disabled type="range" value="[20,70]"></bq-slider>
    </div>
    <div>
      <bq-slider enable-value-indicator type="range" value="[20,70]"></bq-slider>
    </div>
    <div>
      <bq-slider enable-value-indicator min="0" max="10" step="1.25" type="single" value="3"></bq-slider>
    </div>
    <div>
      <bq-slider enable-value-indicator gap="10" step="5" type="range" value="[30,70]"></bq-slider>
    </div>
    <div>
      <bq-slider enable-value-indicator min="0" max="1" step="0.05" type="range" value="[0.3,0.7]"></bq-slider>
    </div>
    <div>
      <bq-slider enable-tooltip gap="10" type="range" value="[30, 70]"></bq-slider>
    </div>
    <div>
      <bq-slider enable-tooltip tooltip-always-visible gap="10" type="range" value="[30, 70]"></bq-slider>
    </div>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 70px;
}
</style>
