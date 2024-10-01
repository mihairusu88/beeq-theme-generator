<script setup lang="js">
import { ref, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isExpanded: {
    type: Boolean,
    default: true,
  },
  showToggleButton: {
    type: Boolean,
    default: false,
  },
  toggleButtonId: {
    type: String,
    default: '',
  },
});

const cardRef = ref(null);
const isCardExpanded = ref(props.isExpanded);
const emit = defineEmits(['toggle']);

watch(
  () => props.isExpanded,
  (newValue) => {
    isCardExpanded.value = newValue;
  },
);

const toggleCardContentVisibility = ($event) => {
  isCardExpanded.value = !isCardExpanded.value;
};

const addCardTitleButtonEventListener = () => {
  const button = cardRef.value.querySelector('.card__title-toggle-button');

  if (!button) return;

  button.addEventListener('click', toggleCardContentVisibility);
};

const removeCardTitleButtonEventListener = () => {
  if (!cardRef.value) return;

  const button = cardRef.value.querySelector('.card__title-toggle-button');

  if (!button) return;

  button.removeEventListener('click', toggleCardContentVisibility);
};

onMounted(() => {
  setTimeout(() => {
    addCardTitleButtonEventListener();
  }, 100);
});

onUnmounted(() => {
  removeCardTitleButtonEventListener();
});
</script>

<template>
  <div ref="cardRef" class="card">
    <div class="card__header">
      <h1 class="card__title">
        {{ title }}
        <bq-button
          class="card__title-toggle-button"
          v-if="!showToggleButton"
          appearance="secondary"
          :border="`m`"
          href=""
          justify-content="center"
          size="small"
          target=""
          type="button"
          variant="standard"
        >
          <bq-icon v-if="!isCardExpanded" name="caret-down"></bq-icon>
          <bq-icon v-else name="caret-up"></bq-icon>
        </bq-button>
      </h1>
      <div
        v-if="showToggleButton"
        :id="toggleButtonId"
        class="toggle-button"
        :class="{ inactive: !isExpanded }"
        @click="emit('toggle', !isExpanded)"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div v-if="isCardExpanded" class="card__content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  overflow: hidden;
}

.card__title {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.card__title .card__title-toggle-button {
  --bq-button--border-radius: 0.75rem;
  --bq-button--border-color: transparent;
  --bq-button--border-radius: 0.75rem;
  --bq-button--border-style: solid;
  --bq-button--border-width: 0;
  --bq-button--small-height: 32px;
  --bq-button--small-paddingX: 0.5rem;
  --bq-button--small-paddingY: 0.25rem;
  --bq-button--small-font-size: 1rem;
  --bq-button--medium-height: 48px;
  --bq-button--medium-paddingX: 1rem;
  --bq-button--medium-paddingY: 0.75rem;
  --bq-button--medium-font-size: 1rem;
  --bq-button--large-height: 56px;
  --bq-button--large-paddingX: 1.5rem;
  --bq-button--large-paddingY: 1rem;
  --bq-button--large-font-size: 1rem;
}

.card__content {
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;
  padding: 20px;
  border: 1px solid #e7e8eb;
  border-radius: 5px;
  overflow: hidden;
}

.card .card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card .card__header .toggle-button {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.card .card__header .toggle-button div:nth-child(1) {
  background-color: #e1172f;
  border: 1px solid #ffffff;
}

.card .card__header .toggle-button div:nth-child(2) {
  background-color: #4f46e5;
  border: 1px solid #ffffff;
}

.card .card__header .toggle-button div:nth-child(3) {
  background-color: #f2d412;
  border: 1px solid #ffffff;
}

.card .card__header .toggle-button div:nth-child(4) {
  background-color: #1eb3db;
  border: 1px solid #ffffff;
}

.card .card__header .toggle-button.inactive div:nth-child(1) {
  opacity: 0.5;
}

.card .card__header .toggle-button.inactive div:nth-child(2) {
  opacity: 0.5;
}

.card .card__header .toggle-button.inactive div:nth-child(3) {
  opacity: 0.5;
}

.card .card__header .toggle-button.inactive div:nth-child(4) {
  opacity: 0.5;
}

body[bq-mode='dark'] .card__content {
  border-color: #2a2c35;
}

body[bq-mode='dark'] .card .card__header .toggle-button div:nth-child(1),
body[bq-mode='dark'] .card .card__header .toggle-button div:nth-child(2),
body[bq-mode='dark'] .card .card__header .toggle-button div:nth-child(3),
body[bq-mode='dark'] .card .card__header .toggle-button div:nth-child(4) {
  border-color: #2a2c35;
}
</style>
