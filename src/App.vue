<template>
  <router-view v-slot="{ Component, route }">
    <component v-if="isRouterLoaded" :is="layout">
      <component :is="Component" :key="route.path" />
    </component>
  </router-view>
</template>

<script setup lang="js">
import { useThemeStore } from './stores/themeStore';
import { watchEffect, computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isRouterLoaded = ref(false);
const layout = computed(() => {
  return 'LayoutDefault';
});

const themeStore = useThemeStore();

watchEffect(() => {
  document.body.setAttribute('bq-mode', themeStore?.currentTheme);
  document.body.setAttribute('bq-theme', 'beeq');
});

onMounted(async () => {
  await router.isReady();
  isRouterLoaded.value = true;
});
</script>
