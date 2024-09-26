<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Badge" class="card-wrapper">
    <div>
      <bq-badge background-color="ui--brand"></bq-badge>
      <bq-badge background-color="ui--brand" size="small"></bq-badge>
      <bq-badge background-color="ui--brand" size="medium"></bq-badge>
    </div>
    <div>
      <bq-badge background-color="ui--danger"></bq-badge>
      <bq-badge size="small" background-color="ui--danger"></bq-badge>
      <bq-badge size="medium" background-color="ui--danger"></bq-badge>
    </div>
    <div>
      <bq-badge background-color="ui--warning"></bq-badge>
      <bq-badge background-color="ui--warning" size="small"></bq-badge>
      <bq-badge background-color="ui--warning" size="medium"></bq-badge>
    </div>
    <div>
      <bq-badge background-color="ui--success"></bq-badge>
      <bq-badge background-color="ui--success" size="small"></bq-badge>
      <bq-badge background-color="ui--success" size="medium"></bq-badge>
    </div>
    <div>
      <bq-badge background-color="ui--info"></bq-badge>
      <bq-badge background-color="ui--info" size="small"></bq-badge>
      <bq-badge background-color="ui--info" size="medium"></bq-badge>
    </div>
    <div>
      <bq-badge background-color="ui--brand">9</bq-badge>
      <bq-badge background-color="ui--brand">25</bq-badge>
      <bq-badge background-color="ui--brand">130</bq-badge>
    </div>
    <div>
      <bq-badge background-color="ui--danger">9</bq-badge>
      <bq-badge background-color="ui--danger">25</bq-badge>
      <bq-badge background-color="ui--danger">130</bq-badge>
    </div>
    <div>
      <bq-badge background-color="ui--warning">9</bq-badge>
      <bq-badge background-color="ui--warning">25</bq-badge>
      <bq-badge background-color="ui--warning">130</bq-badge>
    </div>
    <div>
      <bq-badge background-color="ui--success">9</bq-badge>
      <bq-badge background-color="ui--success">25</bq-badge>
      <bq-badge background-color="ui--success">130</bq-badge>
    </div>
    <div>
      <bq-badge background-color="ui--info">9</bq-badge>
      <bq-badge background-color="ui--info">25</bq-badge>
      <bq-badge background-color="ui--info">130</bq-badge>
    </div>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
