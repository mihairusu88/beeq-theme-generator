<script setup lang="js">
import Card from '@/components/Card.vue';
import { ref } from 'vue';

const drawerRef = ref(null);

const openDrawer = () => {
  drawerRef.value.open = true;
};

const closeDrawer = () => {
  drawerRef.value.open = false;
};
</script>

<template>
  <Card title="Drawer" class="card-wrapper">
    <bq-button @click="openDrawer">Open Drawer</bq-button>
    <bq-drawer ref="drawerRef" position="right" enable-backdrop @bqClose="closeDrawer" @bqAfterClose="closeDrawer">
      <div class="drawer-title" slot="title">Title</div>
      <div class="drawer-description">Content</div>
      <div class="drawer-footer" slot="footer">
        <bq-button appearance="primary" block="" size="small">Save</bq-button>
        <bq-button appearance="link" block="" size="small" @click="closeDrawer">Close</bq-button>
      </div>
    </bq-drawer>
  </Card>
</template>
