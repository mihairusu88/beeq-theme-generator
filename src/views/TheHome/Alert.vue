<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Alert" class="card-wrapper">
    <div>
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
    </div>
    <div>
      <bq-alert open type="info">Title</bq-alert>
      <bq-alert open type="info">
        Title
        <span slot="body">
          Description
          <a class="bq-link" href="https://example.com">Link</a>
        </span>
      </bq-alert>

      <bq-alert open type="info">
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
    </div>
    <div>
      <bq-alert open type="success">Title</bq-alert>
      <bq-alert open type="success">
        Title
        <span slot="body">
          Description
          <a class="bq-link" href="https://example.com">Link</a>
        </span>
      </bq-alert>

      <bq-alert open type="success">
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
    </div>
    <div>
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
    </div>
    <div>
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
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  @apply md:grid-cols-3;
}

.card-wrapper :deep(.card__content) div bq-alert {
  display: block;
}
</style>
