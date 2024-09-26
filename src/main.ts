import '@/assets/styles/tailwind.css';
import '@/assets/styles/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { BeeqVue } from '@beeq/vue';

import App from './App.vue';
import router from './router';
import { useThemeStore } from './stores/themeStore';
import LayoutDefault from './layouts/LayoutDefault.vue';
import { createVCodeBlock } from '@wdns/vue-code-block';

const app = createApp(App);
const pinia = createPinia();
const VCodeBlock = createVCodeBlock({});

app.use(router);
app.use(pinia);
app.use(BeeqVue);
app.use(VCodeBlock);

app.component('LayoutDefault', LayoutDefault);

const themeStore = useThemeStore();
themeStore.setTheme(themeStore.currentTheme);

app.mount('#app');
