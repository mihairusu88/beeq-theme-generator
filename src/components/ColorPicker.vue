<script setup lang="js">
import { toRefs } from 'vue';
import { ColorPicker } from 'vue3-colorpicker';
import 'vue3-colorpicker/style.css';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:pureColor']);

const { modelValue } = toRefs(props);

const onUpdatePureColorDo = (color) => {
  emit('update:pureColor', color);
};
</script>

<template>
  <div class="base-color-picker">
    <span class="title">{{ title }}</span>
    <color-picker
      :pureColor="modelValue"
      shape="circle"
      format="hex"
      :disableHistory="true"
      :disableAlpha="true"
      @update:pureColor="onUpdatePureColorDo"
    />
    <span class="text-sm ml-1">{{ modelValue }}</span>
  </div>
</template>

<style lang="css" scoped>
.base-color-picker {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  border: 1px solid #e7e8eb;
  padding: 10px 20px;
  border-radius: 5px;
  background: #f1f2f4;
  min-width: 150px;
  flex-grow: 1;
}

.base-color-picker .title {
  font-weight: 700;
}

.base-color-picker :deep(.vc-color-wrap) {
  height: 30px;
  width: 30px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
}

body[bq-mode='dark'] .base-color-picker {
  border-color: #2a2c35;
  background: #2a2c35;
}
</style>
