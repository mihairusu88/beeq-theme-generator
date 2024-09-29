<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Radio Button" class="card-wrapper">
    <bq-radio-group disabled value="option1">
      <span slot="label"></span>
      <bq-radio value="option1">Radio option 1</bq-radio>
      <bq-radio value="option2">Radio option 2</bq-radio>
      <bq-radio value="option3">Radio option 3</bq-radio>
    </bq-radio-group>
    <bq-radio-group value="option1">
      <span slot="label"></span>
      <bq-radio value="option1">Radio option 1</bq-radio>
      <bq-radio value="option2" disabled> Radio option 2 </bq-radio>
      <bq-radio value="option3">Radio option 3</bq-radio>
    </bq-radio-group>
    <bq-radio-group fieldset value="option1">
      <span slot="label">radio group</span>
      <bq-radio value="option1">Radio option 1</bq-radio>
      <bq-radio value="option2">Radio option 2</bq-radio>
      <bq-radio value="option3">Radio option 3</bq-radio>
    </bq-radio-group>
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
