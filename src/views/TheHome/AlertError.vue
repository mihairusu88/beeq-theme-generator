<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Alert Error">
    <bq-alert open type="error">Title</bq-alert>
    <bq-alert open type="error">
      Title
      <span slot="body">
        Description
        <a class="bq-link" href="https://example.com">Link</a>
      </span>
    </bq-alert>

    <bq-alert open type="error">
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
