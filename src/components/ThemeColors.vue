<script setup lang="js">
import ColorPicker from './ColorPicker.vue';
import { useThemeStore } from '../stores/themeStore';
import Card from './Card.vue';
import { ref, computed } from 'vue';

const themeStore = useThemeStore();
const { resetToDefault, getThemeStyle } = themeStore;
const isExpandedBrandColors = ref(false);
const isExpandedAccentColors = ref(false);
const isExpandedSystemColors = ref(false);
const isExpandedDataColors = ref(false);
const isExpandedNeutralColors = ref(false);
const isDialogOpen = ref(false);
const themeStyle = computed(() => {
  return getThemeStyle(themeStore.colors, true);
});
const isLightTheme = computed(() => {
  return themeStore.currentTheme === 'light';
});

const openDialog = () => {
  isDialogOpen.value = true;
};
</script>

<template>
  <div class="theme-colors__buttons">
    <button type="button" class="reset-button" @click="resetToDefault">Reset to Default</button>
    <button type="button" class="export-button" @click="openDialog">Export</button>
    <bq-dialog class="export-dialog" :open="isDialogOpen" hide-close-button>
      <h5 slot="title">Export Theme CSS Global Variables</h5>
      <p style="margin-bottom: 20px">Copy and paste this code into your CSS</p>
      <VCodeBlock
        :code="themeStyle"
        highlightjs
        persistentCopyButton
        maxHeight="500px"
        lang="css"
        :theme="isLightTheme ? 'default' : 'github-dark'"
        codeBlockRadius="10px"
      />
      <div slot="footer">
        <button class="export-dialog__button" type="button" @click="isDialogOpen = false">Close</button>
      </div>
    </bq-dialog>
  </div>
  <div class="theme-colors">
    <Card
      title="Brand colors"
      class="theme-colors__color-section"
      showToggleButton
      @toggle="(value) => (isExpandedBrandColors = value)"
      :isExpanded="isExpandedBrandColors"
    >
      <div class="theme-colors__color-section-colors">
        <ColorPicker
          title="brand"
          v-model="themeStore.colors.brand"
          @update:pureColor="(color) => (themeStore.colors.brand = color)"
        />
        <ColorPicker
          title="brand-light"
          v-model="themeStore.colors.brandLight"
          @update:pureColor="(color) => (themeStore.colors.brandLight = color)"
        />
        <ColorPicker
          title="brand-dark"
          v-model="themeStore.colors.brandDark"
          @update:pureColor="(color) => (themeStore.colors.brandDark = color)"
        />
      </div>
    </Card>
    <Card
      title="Accent colors"
      class="theme-colors__color-section"
      showToggleButton
      @toggle="(value) => (isExpandedAccentColors = value)"
      :isExpanded="isExpandedAccentColors"
    >
      <div class="theme-colors__color-section-colors">
        <ColorPicker
          title="accent"
          v-model="themeStore.colors.accent"
          @update:pureColor="(color) => (themeStore.colors.accent = color)"
        />
        <ColorPicker
          title="accent-light"
          v-model="themeStore.colors.accentLight"
          @update:pureColor="(color) => (themeStore.colors.accentLight = color)"
        />
        <ColorPicker
          title="accent-dark"
          v-model="themeStore.colors.accentDark"
          @update:pureColor="(color) => (themeStore.colors.accentDark = color)"
        />
      </div>
    </Card>
    <Card
      title="System colors"
      class="theme-colors__color-section"
      showToggleButton
      @toggle="(value) => (isExpandedSystemColors = value)"
      :isExpanded="isExpandedSystemColors"
    >
      <div class="theme-colors__color-section-colors">
        <ColorPicker
          title="success"
          v-model="themeStore.colors.success"
          @update:pureColor="(color) => (themeStore.colors.success = color)"
        />
        <ColorPicker
          title="success-light"
          v-model="themeStore.colors.successLight"
          @update:pureColor="(color) => (themeStore.colors.successLight = color)"
        />
        <ColorPicker
          title="success-dark"
          v-model="themeStore.colors.successDark"
          @update:pureColor="(color) => (themeStore.colors.successDark = color)"
        />
        <ColorPicker
          title="danger"
          v-model="themeStore.colors.danger"
          @update:pureColor="(color) => (themeStore.colors.danger = color)"
        />
        <ColorPicker
          title="danger-light"
          v-model="themeStore.colors.dangerLight"
          @update:pureColor="(color) => (themeStore.colors.dangerLight = color)"
        />
        <ColorPicker
          title="danger-dark"
          v-model="themeStore.colors.dangerDark"
          @update:pureColor="(color) => (themeStore.colors.dangerDark = color)"
        />
        <ColorPicker
          title="warning"
          v-model="themeStore.colors.warning"
          @update:pureColor="(color) => (themeStore.colors.warning = color)"
        />
        <ColorPicker
          title="warning-light"
          v-model="themeStore.colors.warningLight"
          @update:pureColor="(color) => (themeStore.colors.warningLight = color)"
        />
        <ColorPicker
          title="warning-dark"
          v-model="themeStore.colors.warningDark"
          @update:pureColor="(color) => (themeStore.colors.warningDark = color)"
        />
        <ColorPicker
          title="info"
          v-model="themeStore.colors.info"
          @update:pureColor="(color) => (themeStore.colors.info = color)"
        />
        <ColorPicker
          title="info-light"
          v-model="themeStore.colors.infoLight"
          @update:pureColor="(color) => (themeStore.colors.infoLight = color)"
        />
        <ColorPicker
          title="info-dark"
          v-model="themeStore.colors.infoDark"
          @update:pureColor="(color) => (themeStore.colors.infoDark = color)"
        />
      </div>
    </Card>
    <Card
      title="Data colors"
      class="theme-colors__color-section"
      showToggleButton
      @toggle="(value) => (isExpandedDataColors = value)"
      :isExpanded="isExpandedDataColors"
    >
      <div class="theme-colors__color-section-colors">
        <ColorPicker
          title="data-1"
          v-model="themeStore.colors.data1"
          @update:pureColor="(color) => (themeStore.colors.data1 = color)"
        />
        <ColorPicker
          title="data-2"
          v-model="themeStore.colors.data2"
          @update:pureColor="(color) => (themeStore.colors.data2 = color)"
        />
        <ColorPicker
          title="data-3"
          v-model="themeStore.colors.data3"
          @update:pureColor="(color) => (themeStore.colors.data3 = color)"
        />
        <ColorPicker
          title="data-4"
          v-model="themeStore.colors.data4"
          @update:pureColor="(color) => (themeStore.colors.data4 = color)"
        />
        <ColorPicker
          title="data-5"
          v-model="themeStore.colors.data5"
          @update:pureColor="(color) => (themeStore.colors.data5 = color)"
        />
        <ColorPicker
          title="data-6"
          v-model="themeStore.colors.data6"
          @update:pureColor="(color) => (themeStore.colors.data6 = color)"
        />
        <ColorPicker
          title="data-7"
          v-model="themeStore.colors.data7"
          @update:pureColor="(color) => (themeStore.colors.data7 = color)"
        />
        <ColorPicker
          title="data-8"
          v-model="themeStore.colors.data8"
          @update:pureColor="(color) => (themeStore.colors.data8 = color)"
        />
        <ColorPicker
          title="data-9"
          v-model="themeStore.colors.data9"
          @update:pureColor="(color) => (themeStore.colors.data9 = color)"
        />
        <ColorPicker
          title="data-10"
          v-model="themeStore.colors.data10"
          @update:pureColor="(color) => (themeStore.colors.data10 = color)"
        />
        <ColorPicker
          title="data-11"
          v-model="themeStore.colors.data11"
          @update:pureColor="(color) => (themeStore.colors.data11 = color)"
        />
        <ColorPicker
          title="data-12"
          v-model="themeStore.colors.data12"
          @update:pureColor="(color) => (themeStore.colors.data12 = color)"
        />
      </div>
    </Card>
    <Card
      title="Neutrals colors"
      class="theme-colors__color-section"
      showToggleButton
      @toggle="(value) => (isExpandedNeutralColors = value)"
      :isExpanded="isExpandedNeutralColors"
    >
      <div class="theme-colors__color-section-colors">
        <ColorPicker
          title="neutral-50"
          v-model="themeStore.colors.neutral50"
          @update:pureColor="(color) => (themeStore.colors.neutral50 = color)"
        />
        <ColorPicker
          title="neutral-100"
          v-model="themeStore.colors.neutral100"
          @update:pureColor="(color) => (themeStore.colors.neutral100 = color)"
        />
        <ColorPicker
          title="neutral-200"
          v-model="themeStore.colors.neutral200"
          @update:pureColor="(color) => (themeStore.colors.neutral200 = color)"
        />
        <ColorPicker
          title="neutral-300"
          v-model="themeStore.colors.neutral300"
          @update:pureColor="(color) => (themeStore.colors.neutral300 = color)"
        />
        <ColorPicker
          title="neutral-400"
          v-model="themeStore.colors.neutral400"
          @update:pureColor="(color) => (themeStore.colors.neutral400 = color)"
        />
        <ColorPicker
          title="neutral-500"
          v-model="themeStore.colors.neutral500"
          @update:pureColor="(color) => (themeStore.colors.neutral500 = color)"
        />
        <ColorPicker
          title="neutral-600"
          v-model="themeStore.colors.neutral600"
          @update:pureColor="(color) => (themeStore.colors.neutral600 = color)"
        />
        <ColorPicker
          title="neutral-700"
          v-model="themeStore.colors.neutral700"
          @update:pureColor="(color) => (themeStore.colors.neutral700 = color)"
        />
        <ColorPicker
          title="neutral-800"
          v-model="themeStore.colors.neutral800"
          @update:pureColor="(color) => (themeStore.colors.neutral800 = color)"
        />
        <ColorPicker
          title="neutral-900"
          v-model="themeStore.colors.neutral900"
          @update:pureColor="(color) => (themeStore.colors.neutral900 = color)"
        />
        <ColorPicker
          title="neutral-950"
          v-model="themeStore.colors.neutral950"
          @update:pureColor="(color) => (themeStore.colors.neutral950 = color)"
        />
        <ColorPicker
          title="neutral-1000"
          v-model="themeStore.colors.neutral1000"
          @update:pureColor="(color) => (themeStore.colors.neutral1000 = color)"
        />
      </div>
    </Card>
  </div>
</template>

<style lang="css" scoped>
.theme-colors {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #e5e7eb;
}

.theme-colors__color-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.theme-colors__color-section h3 {
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  margin: 0;
}

.theme-colors__color-section .theme-colors__color-section-colors {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.theme-colors__buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.theme-colors__buttons .reset-button {
  width: 150px;
  padding: 10px;
  background-color: #181545;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.theme-colors__buttons .export-button {
  width: 150px;
  padding: 10px;
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.export-dialog::part(dialog) {
  width: 600px;
}

.export-dialog .export-dialog__button {
  width: 150px;
  padding: 10px;
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

body[bq-mode='dark'] .theme-colors {
  border-color: #2a2c35;
}
</style>
