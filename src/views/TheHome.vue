<script setup lang="js">
import Buttons from './TheHome/Buttons.vue';
import IconButtons from './TheHome/IconButtons.vue';
import Accordions from './TheHome/Accordions.vue';
import AccordionsGhost from './TheHome/AccordionsGhost.vue';
import Alert from './TheHome/Alert.vue';
import AlertInfo from './TheHome/AlertInfo.vue';
import AlertSuccess from './TheHome/AlertSuccess.vue';
import AlertWarning from './TheHome/AlertWarning.vue';
import AlertError from './TheHome/AlertError.vue';
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
import { computed, onMounted, watch } from 'vue';

const themeStore = useThemeStore();
const { getThemeStyle } = themeStore;

const themeStyle = computed(() => {
  return getThemeStyle(themeStore.colors);
});

onMounted(() => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
    :root {
      ${themeStyle.value}
    }
  `;
  document.head.appendChild(styleElement);
});

watch(themeStyle, (newStyle) => {
  document.documentElement.style.cssText = newStyle;
});
</script>

<template>
  <main class="home relative flex overflow-hidden" :style="themeStyle">
    <div class="container">
      <h2>BEEQ Theme Generator</h2>
      <p>Choose your colors from the sections below and customize your themes as you want.</p>
      <ThemeColors />
      <Buttons />
      <IconButtons />
      <Accordions />
      <AccordionsGhost />
      <Alert />
      <AlertInfo />
      <AlertSuccess />
      <AlertWarning />
      <AlertError />
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
  gap: 30px;
  padding-bottom: 40px;
}

.home .container h2 {
  text-align: center;
  margin: 40px 0 0 0;
}

.home .container p {
  font-size: 20px;
  text-align: center;
  margin: 0;
}
</style>
