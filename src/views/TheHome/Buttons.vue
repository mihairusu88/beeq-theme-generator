<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Buttons">
    <bq-button> Primary button </bq-button>
    <bq-button variant="ghost"> Ghost button </bq-button>
    <bq-button variant="danger"> Danger button </bq-button>
    <bq-button appearance="secondary"> Secondary button </bq-button>
    <bq-button appearance="secondary" variant="ghost"> Secondary button </bq-button>
    <bq-button appearance="link" href="https://www.example.com" target="_blank"> Link button </bq-button>
    <bq-button appearance="text"> Text button </bq-button>
  </Card>
</template>
