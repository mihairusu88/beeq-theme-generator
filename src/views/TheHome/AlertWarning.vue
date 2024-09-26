<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Alert Warning">
    <bq-alert open type="warning">Title</bq-alert>
    <bq-alert open type="warning">
      Title
      <span slot="body">
        Description
        <a class="bq-link" href="https://example.com">Link</a>
      </span>
    </bq-alert>

    <bq-alert open type="warning">
      Title
      <span slot="body">
        Description
        <a class="bq-link" href="https://example.com">Link</a>
      </span>
      <div slot="footer">
        <bq-button size="small">Button</bq-button>
        <bq-button appearance="link" size="small">Button</bq-button>
      </div>
    </bq-alert>
  </Card>
</template>
