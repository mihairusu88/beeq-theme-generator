<script setup lang="js">
import Card from '@/components/Card.vue';
import { ref } from 'vue';

const isDrawerOpen = ref(false);
</script>

<template>
  <Card title="Drawer" class="card-wrapper">
    <bq-button @click="isDrawerOpen = true">Open Drawer</bq-button>
    <bq-drawer position="right" enable-backdrop :open="isDrawerOpen">
      <div class="drawer-title" slot="title">Title</div>
      <div class="drawer-description">Content</div>
      <div class="drawer-footer" slot="footer">
        <bq-button appearance="primary" block="" size="small">Save</bq-button>
        <bq-button appearance="link" block="" size="small" @click="isDrawerOpen = false">Close</bq-button>
      </div>
    </bq-drawer>
  </Card>
</template>
