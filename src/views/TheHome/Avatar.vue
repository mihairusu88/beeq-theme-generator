<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Avatar">
    <div class="card__content-wrapper">
      <div>
        <bq-avatar initials="BQ" label="Avatar component label" size="xsmall"></bq-avatar>
        <bq-avatar initials="BQ" label="Avatar component label" size="small"></bq-avatar>
        <bq-avatar initials="BQ" label="Avatar component label" size="medium"></bq-avatar>
        <bq-avatar initials="BQ" label="Avatar component label" size="large"></bq-avatar>
      </div>
      <div>
        <bq-avatar
          alt-text="User profile"
          image="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
          label="Avatar component label"
          size="xsmall"
        ></bq-avatar>

        <bq-avatar
          alt-text="User profile"
          image="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
          label="Avatar component label"
          size="small"
        ></bq-avatar>

        <bq-avatar
          alt-text="User profile"
          image="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
          label="Avatar component label"
          size="medium"
        ></bq-avatar>

        <bq-avatar
          alt-text="User profile"
          image="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
          label="Avatar component label"
          size="large"
        ></bq-avatar>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="css">
.card .card__content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
