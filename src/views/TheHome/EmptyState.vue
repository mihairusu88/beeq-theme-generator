<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Empty State" class="card-wrapper">
    <bq-empty-state>Title</bq-empty-state>
    <bq-empty-state>
      Title
      <span slot="body">Description</span>
    </bq-empty-state>
    <bq-empty-state>
      Title
      <span slot="body">
        Description
        <a class="bq-link" href="https://example.com">Link</a>
      </span>
    </bq-empty-state>
    <bq-empty-state size="medium">
      Title
      <span slot="body">
        Description
        <a class="bq-link" href="https://example.com">Link</a>
      </span>
      <div slot="footer">
        <bq-button appearance="primary" size="small">Button</bq-button>
      </div>
    </bq-empty-state>
    <bq-empty-state size="medium">
      Title
      <span slot="body">
        Description
        <a class="bq-link" href="https://example.com">Link</a>
      </span>
      <div slot="footer">
        <bq-button size="small" variant="ghost">Button</bq-button>
      </div>
    </bq-empty-state>
    <bq-empty-state size="medium">
      Title
      <span slot="body">
        Description
        <a class="bq-link" href="https://example.com">Link</a>
      </span>
      <div slot="footer">
        <bq-button size="small" variant="ghost">Button</bq-button>
        <bq-button appearance="primary" size="small">Button</bq-button>
      </div>
    </bq-empty-state>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  @apply flex flex-col items-center gap-[10px] md:flex-row md:justify-between md:items-start;
}
</style>
