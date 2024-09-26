<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Icon Buttons">
    <bq-button>
      <bq-icon name="bell-ringing"></bq-icon>
    </bq-button>

    <bq-button variant="ghost">
      <bq-icon name="bell-ringing"></bq-icon>
    </bq-button>

    <bq-button appearance="secondary">
      <bq-icon name="bell-ringing"></bq-icon>
    </bq-button>
  </Card>
</template>
