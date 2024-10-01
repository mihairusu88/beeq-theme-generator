<script setup lang="js">
import CommonPicker from './CommonPicker.vue';
import { useThemeStore } from '../stores/themeStore';
import Card from './Card.vue';
import { ref } from 'vue';

const themeStore = useThemeStore();
const isExpandedSpacingValues = ref(false);
const isExpandedBoxShadowValues = ref(false);
const isExpandedFontSizeValues = ref(false);
const isExpandedFontWeightValues = ref(false);
const isExpandedLineHeightValues = ref(false);
const isExpandedTypographyValues = ref(false);
const isExpandedRadiusValues = ref(false);
const isExpandedStrokeValues = ref(false);
</script>

<template>
  <div class="theme-common">
    <Card
      title="Spacing"
      class="theme-common__section"
      showToggleButton
      @toggle="(value) => (isExpandedSpacingValues = value)"
      :isExpanded="isExpandedSpacingValues"
      toggleButtonId="spacing-toggle-button"
    >
      <div class="theme-common__section-options">
        <CommonPicker
          title="spacing-xs3"
          v-model="themeStore.common.spacingXs3"
          @update:modelValue="(value) => (themeStore.common.spacingXs3 = value)"
        />
        <CommonPicker
          title="spacing-xs2"
          v-model="themeStore.common.spacingXs2"
          @update:modelValue="(value) => (themeStore.common.spacingXs2 = value)"
        />
        <CommonPicker
          title="spacing-xs"
          v-model="themeStore.common.spacingXs"
          @update:modelValue="(value) => (themeStore.common.spacingXs = value)"
        />
        <CommonPicker
          title="spacing-s"
          v-model="themeStore.common.spacingS"
          @update:modelValue="(value) => (themeStore.common.spacingS = value)"
        />
        <CommonPicker
          title="spacing-m"
          v-model="themeStore.common.spacingM"
          @update:modelValue="(value) => (themeStore.common.spacingM = value)"
        />
        <CommonPicker
          title="spacing-l"
          v-model="themeStore.common.spacingL"
          @update:modelValue="(value) => (themeStore.common.spacingL = value)"
        />
        <CommonPicker
          title="spacing-xl"
          v-model="themeStore.common.spacingXl"
          @update:modelValue="(value) => (themeStore.common.spacingXl = value)"
        />
        <CommonPicker
          title="spacing-xxl"
          v-model="themeStore.common.spacingXxl"
          @update:modelValue="(value) => (themeStore.common.spacingXxl = value)"
        />
        <CommonPicker
          title="spacing-xxl2"
          v-model="themeStore.common.spacingXxl2"
          @update:modelValue="(value) => (themeStore.common.spacingXxl2 = value)"
        />
        <CommonPicker
          title="spacing-xxl3"
          v-model="themeStore.common.spacingXxl3"
          @update:modelValue="(value) => (themeStore.common.spacingXxl3 = value)"
        />
        <CommonPicker
          title="spacing-xxl4"
          v-model="themeStore.common.spacingXxl4"
          @update:modelValue="(value) => (themeStore.common.spacingXxl4 = value)"
        />
      </div>
    </Card>
    <Card
      title="Box shadow"
      class="theme-common__section"
      showToggleButton
      @toggle="(value) => (isExpandedBoxShadowValues = value)"
      :isExpanded="isExpandedBoxShadowValues"
      toggleButtonId="box-shadow-toggle-button"
    >
      <div class="theme-common__section-options">
        <CommonPicker
          title="box-shadow--xs"
          v-model="themeStore.common.boxShadowXs"
          @update:modelValue="(value) => (themeStore.common.boxShadowXs = value)"
        />
        <CommonPicker
          title="box-shadow--s"
          v-model="themeStore.common.boxShadowS"
          @update:modelValue="(value) => (themeStore.common.boxShadowS = value)"
        />
        <CommonPicker
          title="box-shadow--m"
          v-model="themeStore.common.boxShadowM"
          @update:modelValue="(value) => (themeStore.common.boxShadowM = value)"
        />
        <CommonPicker
          title="box-shadow--l"
          v-model="themeStore.common.boxShadowL"
          @update:modelValue="(value) => (themeStore.common.boxShadowL = value)"
        />
      </div>
    </Card>
    <Card
      title="Font size"
      class="theme-common__section"
      showToggleButton
      @toggle="(value) => (isExpandedFontSizeValues = value)"
      :isExpanded="isExpandedFontSizeValues"
      toggleButtonId="font-size-toggle-button"
    >
      <div class="theme-common__section-options">
        <CommonPicker
          title="font-size--xs"
          v-model="themeStore.common.fontSizeXs"
          @update:modelValue="(value) => (themeStore.common.fontSizeXs = value)"
        />
        <CommonPicker
          title="font-size--s"
          v-model="themeStore.common.fontSizeS"
          @update:modelValue="(value) => (themeStore.common.fontSizeS = value)"
        />
        <CommonPicker
          title="font-size--m"
          v-model="themeStore.common.fontSizeM"
          @update:modelValue="(value) => (themeStore.common.fontSizeM = value)"
        />
        <CommonPicker
          title="font-size--l"
          v-model="themeStore.common.fontSizeL"
          @update:modelValue="(value) => (themeStore.common.fontSizeL = value)"
        />
        <CommonPicker
          title="font-size--xl"
          v-model="themeStore.common.fontSizeXl"
          @update:modelValue="(value) => (themeStore.common.fontSizeXl = value)"
        />
        <CommonPicker
          title="font-size--xxl"
          v-model="themeStore.common.fontSizeXxl"
          @update:modelValue="(value) => (themeStore.common.fontSizeXxl = value)"
        />
        <CommonPicker
          title="font-size--xxl2"
          v-model="themeStore.common.fontSizeXxl2"
          @update:modelValue="(value) => (themeStore.common.fontSizeXxl2 = value)"
        />
        <CommonPicker
          title="font-size--xxl3"
          v-model="themeStore.common.fontSizeXxl3"
          @update:modelValue="(value) => (themeStore.common.fontSizeXxl3 = value)"
        />
        <CommonPicker
          title="font-size--xxl4"
          v-model="themeStore.common.fontSizeXxl4"
          @update:modelValue="(value) => (themeStore.common.fontSizeXxl4 = value)"
        />
        <CommonPicker
          title="font-size--xxl5"
          v-model="themeStore.common.fontSizeXxl5"
          @update:modelValue="(value) => (themeStore.common.fontSizeXxl5 = value)"
        />
      </div>
    </Card>
    <Card
      title="Font weight"
      class="theme-common__section"
      showToggleButton
      @toggle="(value) => (isExpandedFontWeightValues = value)"
      :isExpanded="isExpandedFontWeightValues"
      toggleButtonId="font-weight-toggle-button"
    >
      <div class="theme-common__section-options">
        <CommonPicker
          title="font-weight--thin"
          v-model="themeStore.common.fontWeightThin"
          @update:modelValue="(value) => (themeStore.common.fontWeightThin = value)"
        />
        <CommonPicker
          title="font-weight--light"
          v-model="themeStore.common.fontWeightLight"
          @update:modelValue="(value) => (themeStore.common.fontWeightLight = value)"
        />
        <CommonPicker
          title="font-weight--regular"
          v-model="themeStore.common.fontWeightRegular"
          @update:modelValue="(value) => (themeStore.common.fontWeightRegular = value)"
        />
        <CommonPicker
          title="font-weight--semibold"
          v-model="themeStore.common.fontWeightSemibold"
          @update:modelValue="(value) => (themeStore.common.fontWeightSemibold = value)"
        />
        <CommonPicker
          title="font-weight--medium"
          v-model="themeStore.common.fontWeightMedium"
          @update:modelValue="(value) => (themeStore.common.fontWeightMedium = value)"
        />
        <CommonPicker
          title="font-weight--bold"
          v-model="themeStore.common.fontWeightBold"
          @update:modelValue="(value) => (themeStore.common.fontWeightBold = value)"
        />
      </div>
    </Card>
    <Card
      title="Line height"
      class="theme-common__section"
      showToggleButton
      @toggle="(value) => (isExpandedLineHeightValues = value)"
      :isExpanded="isExpandedLineHeightValues"
      toggleButtonId="line-height-toggle-button"
    >
      <div class="theme-common__section-options">
        <CommonPicker
          title="font-line-height--small"
          v-model="themeStore.common.fontLineHeightSmall"
          @update:modelValue="(value) => (themeStore.common.fontLineHeightSmall = value)"
        />
        <CommonPicker
          title="font-line-height--regular"
          v-model="themeStore.common.fontLineHeightRegular"
          @update:modelValue="(value) => (themeStore.common.fontLineHeightRegular = value)"
        />
        <CommonPicker
          title="font-line-height--large"
          v-model="themeStore.common.fontLineHeightLarge"
          @update:modelValue="(value) => (themeStore.common.fontLineHeightLarge = value)"
        />
      </div>
    </Card>
    <Card
      title="Typography"
      class="theme-common__section"
      showToggleButton
      @toggle="(value) => (isExpandedTypographyValues = value)"
      :isExpanded="isExpandedTypographyValues"
      toggleButtonId="typography-toggle-button"
    >
      <div class="theme-common__section-options">
        <CommonPicker
          title="font-family"
          v-model="themeStore.typography.fontFamily"
          @update:modelValue="(value) => (themeStore.typography.fontFamily = value)"
        />
      </div>
    </Card>
    <Card
      title="Radius"
      class="theme-common__section"
      showToggleButton
      @toggle="(value) => (isExpandedRadiusValues = value)"
      :isExpanded="isExpandedRadiusValues"
      toggleButtonId="radius-toggle-button"
    >
      <div class="theme-common__section-options">
        <CommonPicker
          title="radius--none"
          v-model="themeStore.radius.radiusNone"
          @update:modelValue="(value) => (themeStore.radius.radiusNone = value)"
        />
        <CommonPicker
          title="radius--xs2"
          v-model="themeStore.radius.radiusXs2"
          @update:modelValue="(value) => (themeStore.radius.radiusXs2 = value)"
        />
        <CommonPicker
          title="radius--xs"
          v-model="themeStore.radius.radiusXs"
          @update:modelValue="(value) => (themeStore.radius.radiusXs = value)"
        />
        <CommonPicker
          title="radius--s"
          v-model="themeStore.radius.radiusS"
          @update:modelValue="(value) => (themeStore.radius.radiusS = value)"
        />
        <CommonPicker
          title="radius--m"
          v-model="themeStore.radius.radiusM"
          @update:modelValue="(value) => (themeStore.radius.radiusM = value)"
        />
        <CommonPicker
          title="radius--l"
          v-model="themeStore.radius.radiusL"
          @update:modelValue="(value) => (themeStore.radius.radiusL = value)"
        />
        <CommonPicker
          title="radius--full"
          v-model="themeStore.radius.radiusFull"
          @update:modelValue="(value) => (themeStore.radius.radiusFull = value)"
        />
      </div>
    </Card>
    <Card
      title="Stroke"
      class="theme-common__section"
      showToggleButton
      @toggle="(value) => (isExpandedStrokeValues = value)"
      :isExpanded="isExpandedStrokeValues"
      toggleButtonId="stroke-toggle-button"
    >
      <div class="theme-common__section-options">
        <CommonPicker
          title="stroke-s"
          v-model="themeStore.stroke.strokeS"
          @update:modelValue="(value) => (themeStore.stroke.strokeS = value)"
        />
        <CommonPicker
          title="stroke-m"
          v-model="themeStore.stroke.strokeM"
          @update:modelValue="(value) => (themeStore.stroke.strokeM = value)"
        />
        <CommonPicker
          title="stroke-l"
          v-model="themeStore.stroke.strokeL"
          @update:modelValue="(value) => (themeStore.stroke.strokeL = value)"
        />
      </div>
    </Card>
  </div>
</template>

<style lang="css" scoped>
.theme-common {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #e5e7eb;
}

.theme-common__section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.theme-common__section h3 {
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  margin: 0;
}

.theme-common__section .theme-common__section-options {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 10px;
  max-width: 100%;
}

body[bq-mode='dark'] .theme-common {
  border-color: #2a2c35;
}
</style>
