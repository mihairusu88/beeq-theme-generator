<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Notification" class="card-wrapper">
    <div>
      <bq-notification open>Title</bq-notification>
      <bq-notification open>
        Title
        <span slot="body">
          This is some description text text
          <a class="bq-link" href="https://example.com">Link</a>
        </span>
      </bq-notification>
      <bq-notification open>
        Title
        <span slot="body">
          This is some description text text
          <a class="bq-link" href="https://example.com">Link</a>
        </span>
        <div slot="footer">
          <bq-button size="small">Button</bq-button>
          <bq-button appearance="link" size="small"> Button </bq-button>
        </div>
      </bq-notification>
    </div>
    <div>
      <bq-notification open type="error">Title</bq-notification>
      <bq-notification open type="error">
        Title
        <span slot="body">
          This is some description text text
          <a class="bq-link" href="https://example.com">Link</a>
        </span>
      </bq-notification>
      <bq-notification open type="error">
        Title
        <span slot="body">
          This is some description text text
          <a class="bq-link" href="https://example.com">Link</a>
        </span>
        <div slot="footer">
          <bq-button size="small">Button</bq-button>
          <bq-button appearance="link" size="small"> Button </bq-button>
        </div>
      </bq-notification>
    </div>
    <div>
      <bq-notification open type="neutral">Title</bq-notification>
      <bq-notification open type="neutral">
        Title
        <span slot="body">
          This is some description text text
          <a class="bq-link" href="https://example.com">Link</a>
        </span>
      </bq-notification>
      <bq-notification open type="neutral">
        Title
        <span slot="body">
          This is some description text text
          <a class="bq-link" href="https://example.com">Link</a>
        </span>
        <div slot="footer">
          <bq-button size="small">Button</bq-button>
          <bq-button appearance="link" size="small"> Button </bq-button>
        </div>
      </bq-notification>
    </div>
    <div>
      <bq-notification open type="success">Title</bq-notification>
      <bq-notification open type="success">
        Title
        <span slot="body">
          This is some description text text
          <a class="bq-link" href="https://example.com">Link</a>
        </span>
      </bq-notification>
      <bq-notification open type="success">
        Title
        <span slot="body">
          This is some description text text
          <a class="bq-link" href="https://example.com">Link</a>
        </span>
        <div slot="footer">
          <bq-button size="small">Button</bq-button>
          <bq-button appearance="link" size="small"> Button </bq-button>
        </div>
      </bq-notification>
    </div>
    <div>
      <bq-notification open type="warning">Title</bq-notification>
      <bq-notification open type="warning">
        Title
        <span slot="body">
          This is some description text text
          <a class="bq-link" href="https://example.com">Link</a>
        </span>
      </bq-notification>
      <bq-notification open type="warning">
        Title
        <span slot="body">
          This is some description text text
          <a class="bq-link" href="https://example.com">Link</a>
        </span>
        <div slot="footer">
          <bq-button size="small">Button</bq-button>
          <bq-button appearance="link" size="small"> Button </bq-button>
        </div>
      </bq-notification>
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
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.card-wrapper :deep(.card__content) div bq-notification {
  width: 100%;
}
</style>
