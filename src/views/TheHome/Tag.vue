<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Tag" class="card-wrapper">
    <div>
      <bq-tag color="success">Success</bq-tag>
      <bq-tag color="info">Info</bq-tag>
      <bq-tag color="error">Error</bq-tag>
      <bq-tag color="warning">Warning</bq-tag>
      <bq-tag color="gray">Gray</bq-tag>
    </div>
    <div>
      <bq-tag color="success" variant="outline">Success</bq-tag>
      <bq-tag color="info" variant="outline">Info</bq-tag>
      <bq-tag color="error" variant="outline">Error</bq-tag>
      <bq-tag color="warning" variant="outline">Warning</bq-tag>
      <bq-tag color="gray" variant="outline">Gray</bq-tag>
    </div>
    <div>
      <bq-tag removable>Default</bq-tag>
      <bq-tag color="success" removable>Success</bq-tag>
      <bq-tag color="info" removable>Info</bq-tag>
      <bq-tag color="error" removable>Error</bq-tag>
      <bq-tag color="warning" removable>Warning</bq-tag>
      <bq-tag color="gray" removable>Gray</bq-tag>
    </div>
    <div>
      <bq-tag removable size="medium" variant="outline">Default</bq-tag>
      <bq-tag color="success" removable variant="outline">Success</bq-tag>
      <bq-tag color="info" removable variant="outline">Info</bq-tag>
      <bq-tag color="error" removable variant="outline">Error</bq-tag>
      <bq-tag color="warning" removable variant="outline">Warning</bq-tag>
      <bq-tag color="gray" removable variant="outline">Gray</bq-tag>
    </div>
    <div>
      <bq-tag>
        <bq-icon slot="prefix" name="alarm"></bq-icon>
        Default
      </bq-tag>

      <bq-tag color="success">
        <bq-icon slot="prefix" name="check-circle"></bq-icon>
        Success
      </bq-tag>

      <bq-tag color="info">
        <bq-icon slot="prefix" name="info"></bq-icon>
        Info
      </bq-tag>

      <bq-tag color="error">
        <bq-icon slot="prefix" name="warning-diamond"></bq-icon>
        Error
      </bq-tag>

      <bq-tag color="warning">
        <bq-icon slot="prefix" name="warning"></bq-icon>
        Warning
      </bq-tag>

      <bq-tag color="gray">
        <bq-icon slot="prefix" name="video-camera-slash"></bq-icon>
        Gray
      </bq-tag>
    </div>
    <div>
      <bq-tag variant="outline">
        <bq-icon slot="prefix" name="alarm"></bq-icon>
        Default
      </bq-tag>

      <bq-tag color="success" variant="outline">
        <bq-icon slot="prefix" name="check-circle"></bq-icon>
        Success
      </bq-tag>

      <bq-tag color="info" variant="outline">
        <bq-icon slot="prefix" name="info"></bq-icon>
        Info
      </bq-tag>

      <bq-tag color="error" variant="outline">
        <bq-icon slot="prefix" name="warning-diamond"></bq-icon>
        Error
      </bq-tag>

      <bq-tag color="warning" variant="outline">
        <bq-icon slot="prefix" name="warning"></bq-icon>
        Warning
      </bq-tag>

      <bq-tag color="gray" variant="outline">
        <bq-icon slot="prefix" name="video-camera-slash"></bq-icon>
        Gray
      </bq-tag>
    </div>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
}

.card-wrapper :deep(.card__content) div {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
}
</style>
