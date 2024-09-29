<script setup lang="js">
import Buttons from './TheHome/Buttons.vue';
import Accordions from './TheHome/Accordions.vue';
import Alert from './TheHome/Alert.vue';
import Avatar from './TheHome/Avatar.vue';
import Badge from './TheHome/Badge.vue';
import Breadcrumb from './TheHome/Breadcrumb.vue';
import Cards from './TheHome/Cards.vue';
import Checkbox from './TheHome/Checkbox.vue';
import Dialog from './TheHome/Dialog.vue';
import Divider from './TheHome/Divider.vue';
import DatePicker from './TheHome/DatePicker.vue';
import Drawer from './TheHome/Drawer.vue';
import Dropdown from './TheHome/Dropdown.vue';
import EmptyState from './TheHome/EmptyState.vue';
import Icons from './TheHome/Icons.vue';
import Input from './TheHome/Input.vue';
import Notification from './TheHome/Notification.vue';
import Progress from './TheHome/Progress.vue';
import RadioButton from './TheHome/RadioButton.vue';
import Select from './TheHome/Select.vue';
import SideMenu from './TheHome/SideMenu.vue';
import Slider from './TheHome/Slider.vue';
import Spinner from './TheHome/Spinner.vue';
import Status from './TheHome/Status.vue';
import Stepper from './TheHome/Stepper.vue';
import Switch from './TheHome/Switch.vue';
import Tabs from './TheHome/Tabs.vue';
import Tag from './TheHome/Tag.vue';
import Textarea from './TheHome/Textarea.vue';
import Toast from './TheHome/Toast.vue';
import Tooltip from './TheHome/Tooltip.vue';
import ThemeColors from '../components/ThemeColors.vue';
import { useThemeStore } from '../stores/themeStore';
import { computed, onMounted, watch, ref, onUnmounted } from 'vue';
import { VOnboardingWrapper, useVOnboarding } from 'v-onboarding';
import 'v-onboarding/dist/style.css';

const themeStore = useThemeStore();
const { getThemeStyle } = themeStore;

const themeStyle = computed(() => {
  return getThemeStyle(themeStore.colors);
});

const isOnboarded = computed(() => {
  return localStorage.getItem('beeqThemeGenerator_isOnboarded');
});

const wrapper = ref(null);
const { start } = useVOnboarding(wrapper);
const steps = [
  {
    attachTo: { element: '#brand-colors-toggle-button' },
    content: {
      title: 'Section colors',
      description: 'Click to show section colors and choose them by using the color picker',
    },
  },
  {
    attachTo: { element: '#export-button' },
    content: { title: 'Export CSS', description: 'Copy and paste this code into your CSS' },
  },
  {
    attachTo: { element: '#reset-button' },
    content: { title: 'Reset colors', description: 'Reset all colors to default' },
  },
];

const onCloseOnboarding = () => {
  localStorage.setItem('beeqThemeGenerator_isOnboarded', true);
  setBodyOverflow('auto');
};

const handleDOMContentLoaded = () => {
  if (!isOnboarded.value) {
    setTimeout(() => {
      start();

      setBodyOverflow('hidden');
    }, 200);
  }
};

const setBodyOverflow = (overflow = 'hidden') => {
  const body = document.querySelector('body');
  body.style.overflow = overflow;
};

watch(themeStyle, (newStyle) => {
  document.documentElement.style.cssText = newStyle;
});

onMounted(async () => {
  const styleElement = document.createElement('style');

  styleElement.innerHTML = `
    :root {
      ${themeStyle.value}
    }
  `;
  document.head.appendChild(styleElement);
  document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
});

onUnmounted(() => {
  document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
});
</script>

<template>
  <main class="home relative flex overflow-hidden" :style="themeStyle">
    <div class="container px-[10px] md:px-0 overflow-hidden">
      <h2 class="text-5xl">BEEQ Theme Generator</h2>
      <p class="text-lg">Choose your colors from the sections below and customize your themes as you want.</p>
      <VOnboardingWrapper
        v-if="!isOnboarded"
        ref="wrapper"
        :steps="steps"
        @finish="onCloseOnboarding"
        @exit="onCloseOnboarding"
      />
      <ThemeColors />
      <Buttons />
      <Accordions />
      <Alert />
      <Avatar />
      <Badge />
      <Breadcrumb />
      <Cards />
      <Checkbox />
      <Dialog />
      <Divider />
      <DatePicker />
      <Drawer />
      <Dropdown />
      <EmptyState />
      <Icons />
      <Input />
      <Notification />
      <Progress />
      <RadioButton />
      <Select />
      <SideMenu />
      <Slider />
      <Spinner />
      <Status />
      <Stepper />
      <Switch />
      <Tabs />
      <Tag />
      <Textarea />
      <Toast />
      <Tooltip />
    </div>
  </main>
</template>

<style>
.v-onboarding-item {
  border-radius: 5px;
}

.v-onboarding-item .v-onboarding-item__header-close {
  border: 0;
}

.v-onboarding-item .v-onboarding-btn-primary,
.v-onboarding-item .v-onboarding-btn-secondary {
  border-radius: 10px;
  box-shadow: none;
  padding: 10px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #ffffff;
}

.v-onboarding-item .v-onboarding-btn-primary {
  background: #4f46e5;
}

body[bq-mode='dark'] .v-onboarding-item {
  background: #3f4350;
}

body[bq-mode='dark'] [data-v-onboarding-wrapper] [data-popper-arrow]::before {
  background: #3f4350;
}

body[bq-mode='dark'] .v-onboarding-btn-secondary {
  background: #ffffff;
}

body[bq-mode='dark'] .v-onboarding-item__description {
  color: #ffffff;
}
</style>

<style lang="css" scoped>
.home {
  min-height: 100vh;
}

.home .container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  max-width: 1200px;
  width: 100vw;
  gap: 30px;
  padding-bottom: 40px;
}

.home .container h2 {
  text-align: center;
  margin: 40px 0 0 0;
}

.home .container p {
  text-align: center;
  margin: 0;
}
</style>
