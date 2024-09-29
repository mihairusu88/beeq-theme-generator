<script setup lang="js">
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

const emit = defineEmits(['toggle']);
</script>

<template>
  <div class="card">
    <div class="card__header">
      <h1 class="card__title">{{ title }}</h1>
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
    <div v-if="isExpanded" class="card__content">
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
