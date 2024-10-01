<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Toast" class="card-wrapper">
    <div>
      <bq-toast type="info" open @bqHide="$event.preventDefault()"> This is a message </bq-toast>
    </div>
    <div>
      <bq-toast type="success" open @bqHide="$event.preventDefault()"> This is a message </bq-toast>
    </div>
    <div>
      <bq-toast type="alert" open @bqHide="$event.preventDefault()"> This is a message </bq-toast>
    </div>
    <div>
      <bq-toast type="error" open @bqHide="$event.preventDefault()"> This is a message </bq-toast>
    </div>
    <div>
      <bq-toast type="loading" open @bqHide="$event.preventDefault()"> This is a message </bq-toast>
    </div>
    <div>
      <bq-toast type="custom" open @bqHide="$event.preventDefault()">
        This is a message
        <bq-icon slot="icon" name="star-bold"></bq-icon>
      </bq-toast>
    </div>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
}

.card-wrapper :deep(.card__content) div {
  display: flex;
  width: 100%;
  justify-content: center;

  @apply flex flex-col items-center w-full md:flex-row md:justify-center md:items-start;
}

.card-wrapper :deep(.card__content) div bq-toast {
  display: block;
}
</style>
