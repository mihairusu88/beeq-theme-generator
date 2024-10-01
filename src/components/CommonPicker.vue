<script setup lang="js">
import { onMounted, toRefs, onUnmounted, ref } from 'vue';

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

const baseCommonPickerRef = ref(null);
const { modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const emitInputValue = ($event) => {
  emit('update:modelValue', $event.target.value);
};

const addInputEventListener = () => {
  const input = baseCommonPickerRef.value
    .querySelector('.base-common-picker__input')
    ?.shadowRoot.querySelector('input');

  if (!input) return;

  input.addEventListener('input', emitInputValue);
};

const removeInputEventListener = () => {
  if (!baseCommonPickerRef.value) return;

  const input = baseCommonPickerRef.value
    .querySelector('.base-common-picker__input')
    ?.shadowRoot.querySelector('input');

  if (!input) return;

  input.removeEventListener('input', emitInputValue);
};

onMounted(() => {
  setTimeout(() => {
    addInputEventListener();
  }, 100);
});

onUnmounted(() => {
  removeInputEventListener();
});
</script>

<template>
  <div ref="baseCommonPickerRef" class="base-common-picker">
    <bq-input class="base-common-picker__input" :placeholder="`Enter your value here...`" :value="modelValue">
      <label class="font-bold" for="" slot="label">{{ title }}</label>
    </bq-input>
  </div>
</template>

<style lang="css" scoped>
.base-common-picker {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  border: 1px solid #e7e8eb;
  padding: 10px 20px;
  border-radius: 5px;
  background: #f1f2f4;
  width: 365px;
  flex-grow: 0;
}

.base-common-picker .base-common-picker__input {
  --bq-input--background-color: #4f46e5;
  --bq-input--border-color: #2a2c35;
  --bq-input--border-color-focus: #4f46e5;
  --bq-input--border-radius: 0.5rem;
  --bq-input--border-width: 1px;
  --bq-input--border-style: solid;
  --bq-input--gap: 0.5rem;
  --bq-input--helper-margin-top: 0.5rem;
  --bq-input--helper-text-size: 0.875rem;
  --bq-input--helper-text-color: #2a2c35;
  --bq-input--icon-size: 24px;
  --bq-input--label-margin-bottom: 0.5rem;
  --bq-input--label-text-size: 0.875rem;
  --bq-input--label-text-color: #2a2c35;
  --bq-input--padding-start: 1rem;
  --bq-input--padding-end: 1rem;
  --bq-input--paddingY: 0.75rem;
  --bq-input--text-color: #2a2c35;
  --bq-input--text-size: 1rem;
  --bq-input--text-placeholder-color: #646a77;
}

.base-common-picker .base-common-picker__input::part(control) {
  background: #ffffff;
  min-height: 50px;
}

body[bq-mode='dark'] .base-common-picker {
  border-color: #2a2c35;
  background: #2a2c35;
}

body[bq-mode='dark'] .base-common-picker .base-common-picker__input {
  --bq-input--label-text-color: #ffffff;
  --bq-input--text-color: #ffffff;
  --bq-input--helper-text-color: #ffffff;
}

body[bq-mode='dark'] .base-common-picker .base-common-picker__input::part(control) {
  background: #3f4350;
  border-color: #3f4350;
}
</style>
