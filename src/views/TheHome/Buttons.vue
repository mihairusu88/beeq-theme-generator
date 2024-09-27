<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Button" class="card-wrapper">
    <div>
      <bq-button> Primary button </bq-button>
      <bq-button variant="ghost"> Ghost button </bq-button>
      <bq-button variant="danger"> Danger button </bq-button>
      <bq-button appearance="secondary"> Secondary button </bq-button>
      <bq-button appearance="secondary" variant="ghost"> Secondary button </bq-button>
      <bq-button appearance="link" href="https://www.example.com" target="_blank"> Link button </bq-button>
      <bq-button appearance="text"> Text button </bq-button>
    </div>
    <div>
      <bq-button>
        <bq-icon name="bell-ringing"></bq-icon>
      </bq-button>

      <bq-button variant="ghost">
        <bq-icon name="bell-ringing"></bq-icon>
      </bq-button>

      <bq-button appearance="secondary">
        <bq-icon name="bell-ringing"></bq-icon>
      </bq-button>
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
