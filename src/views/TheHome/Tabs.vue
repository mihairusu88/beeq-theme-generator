<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Tabs" class="card-wrapper">
    <bq-tab-group value="5">
      <bq-tab tab-id="1">Tab</bq-tab>
      <bq-tab tab-id="2">Tab</bq-tab>
      <bq-tab tab-id="3">Long Tab name</bq-tab>
      <bq-tab tab-id="4" disabled>Tab</bq-tab>
      <bq-tab tab-id="5" active>Tab</bq-tab>
      <bq-tab tab-id="6">Tab</bq-tab>
      <bq-tab tab-id="7">Tab</bq-tab>
      <bq-tab tab-id="8">Tab</bq-tab>
    </bq-tab-group>
    <bq-tab-group value="5" size="small">
      <bq-tab tab-id="1">
        <bq-icon name="pulse" slot="icon"></bq-icon>
        Tab
      </bq-tab>
      <bq-tab tab-id="2">
        <bq-icon name="bell" slot="icon"></bq-icon>
        Tab
      </bq-tab>
      <bq-tab tab-id="3">
        <bq-icon name="airplane-in-flight" slot="icon"></bq-icon>
        Long Tab name
      </bq-tab>
      <bq-tab tab-id="4" disabled>
        <bq-icon name="airplane-title" slot="icon"></bq-icon>
        Tab
      </bq-tab>
      <bq-tab tab-id="5" active>
        <bq-icon name="align-right-simple" slot="icon"></bq-icon>
        Tab
      </bq-tab>
      <bq-tab tab-id="6">
        <bq-icon name="anchor" slot="icon"></bq-icon>
        Tab
      </bq-tab>
      <bq-tab tab-id="7">
        <bq-icon name="anchor-simple" slot="icon"></bq-icon>
        Tab
      </bq-tab>
      <bq-tab tab-id="8">
        <bq-icon name="android-logo" slot="icon"></bq-icon>
        Tab
      </bq-tab>
    </bq-tab-group>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 60px;
}
</style>
