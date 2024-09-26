<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Alert (Default)">
    <bq-alert open>
      <bq-icon name="star" slot="icon"></bq-icon>
      Title
    </bq-alert>

    <bq-alert open>
      <bq-icon name="star" slot="icon"></bq-icon>
      Title
      <span slot="body">
        Description
        <a class="bq-link" href="https://example.com">Link</a>
      </span>
    </bq-alert>

    <bq-alert open>
      <bq-icon name="star" slot="icon"></bq-icon>
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
