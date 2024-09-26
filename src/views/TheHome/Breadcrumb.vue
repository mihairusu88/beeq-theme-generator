<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Breadcrumb">
    <bq-breadcrumb>
      <bq-breadcrumb-item aria-label="Home page">
        <bq-icon name="house-line" size="16"></bq-icon>
      </bq-breadcrumb-item>
      <bq-breadcrumb-item aria-label="Men clothing"> Men's Clothing </bq-breadcrumb-item>
      <bq-breadcrumb-item aria-label="Shirts">
        <bq-icon name="shirt-folded" size="16"></bq-icon>
        Shirts
      </bq-breadcrumb-item>
      <bq-breadcrumb-item aria-label="Casual shirts"> Casual shirts </bq-breadcrumb-item>
    </bq-breadcrumb>
  </Card>
</template>
