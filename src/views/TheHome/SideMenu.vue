<script setup lang="js">
import Card from '@/components/Card.vue';
import { ref, watch } from 'vue';

const sideMenuRef = ref(null);
const sideMenuAppearanceRef = ref(null);
const isSideMenuOpen = ref(false);
const isSideMenuAppearanceOpen = ref(false);

const toggleSideMenu = () => {
  isSideMenuAppearanceOpen.value = false;
  isSideMenuOpen.value = !isSideMenuOpen.value;
};

const toggleSideMenuAppearance = () => {
  isSideMenuOpen.value = false;
  isSideMenuAppearanceOpen.value = !isSideMenuAppearanceOpen.value;
};

const closeSideMenu = (event) => {
  event.preventDefault();
  event.stopPropagation();

  isSideMenuOpen.value = false;
  isSideMenuAppearanceOpen.value = false;

  if (sideMenuRef.value) {
    sideMenuRef.value.collapse = false;
  }

  if (sideMenuAppearanceRef.value) {
    sideMenuAppearanceRef.value.collapse = false;
  }
};

const addCloseSideMenuButtonEventListener = () => {
  const button = document.querySelector('.close-button');

  if (!button) return;

  button.addEventListener('click', closeSideMenu);
};

const removeCloseSideMenuButtonEventListener = () => {
  const button = document.querySelector('.close-button');
  if (!button) return;

  button.removeEventListener('click', closeSideMenu);
};

watch(isSideMenuOpen, (newValue) => {
  setTimeout(() => {
    if (newValue) {
      addCloseSideMenuButtonEventListener();
    } else {
      removeCloseSideMenuButtonEventListener();
    }
  }, 250);
});

watch(isSideMenuAppearanceOpen, (newValue) => {
  setTimeout(() => {
    if (newValue) {
      addCloseSideMenuButtonEventListener();
    } else {
      removeCloseSideMenuButtonEventListener();
    }
  }, 250);
});
</script>

<template>
  <Card title="Side Menu" class="card-wrapper">
    <div>
      <bq-side-menu ref="sideMenuRef" class="side-menu" v-if="isSideMenuOpen">
        <div slot="logo">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1080 1080" class="logo">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M251.8 942.3c-19.5-14.9-48-20.4-68.6-7.2-30.1 19.8-38.5 60.6-10.6 83.8 40.7 34.7 96 61.2 150.1 61.2 109.9 0 197-74.9 223.7-167 77 51.2 180.8 54 265 2.8l41.8 43.5c21.2 21.5 55.2 21.5 78.1 0 22.3-20.9 24-56.2 3.3-78.2l-41.8-43.5c55.8-82.1 57.5-186.2 10-265.6 93.2-20.4 172.4-105.2 176.9-217.7 6.7-171.4-165.2-277.2-309.1-190.7l-183 110.2c-5.6-7.7-11.7-14.9-18.4-22-49.1-51.8-119.4-72.7-186.4-63.4 0-6.6.6-13.8 1.7-20.9 3.9-27.6 14.5-52.9 35.2-73.3 22.9-21.5 24-56.2 3.3-78.2-21.1-21.5-55.1-21.5-78-.1-44.6 43-63.6 95.3-70.3 140.5-3.9 28.7-3.3 56.2 0 78.8-6.1 4.4-12.3 9.9-18.4 16-6.1 5.5-11.7 11.6-16.7 17.6-22.3-4.4-49.7-6.6-78.7-3.9-45.2 4.4-98.2 20.4-142.8 63.4-22.9 21.5-24 56.2-3.3 78.2 21.2 21.5 55.2 21.5 78.1 0 21.2-19.8 47.4-29.2 74.2-32 7.3 0 14.5-1.1 21.2 0-13.4 67.2 5 138.9 54.1 190.7 5.6 5.5 10.6 10.5 16.7 15.4l-22.3 32c-8.9 13.2-11.7 28.1-8.9 41.9l6.1 30.9c1.7 8.3-.6 17.1-5 23.7-7.3 11-13.9 13.2-24.5 15.4l-36.8 7.7c-16.7 3.3-31.8 13.8-41.8 29.2-20.6 30.9-12.8 71.6 17.3 90.9 30.1 19.3 70.9 9.9 91.5-20.9 10-15.4 13.4-33.1 10-49.6l-7.3-36.4c-2.2-10.5-2.2-18.2 4.5-28.7 4.5-7.2 11.2-12.1 19.5-14.3l30.7-7.2c13.9-3.3 26.2-12.1 34.6-25.3l15.1-23.1 88.2 162c39.1 72.7-18.4 163.7-104.3 163.7-24.8 0-51.6-13.2-73.9-30.3zM494 625.5l38.5 78.2c46.9-9.4 122.8-46.8 157.9-155.9L617.8 507l-61.9 59.5-61.4 59h-.5zm286.2 177.4c-58 55.7-146.2 51.2-194.7-2.8 70.9-25.3 152.9-83.2 198.1-196.2 54.1 51.3 56.3 142.3-3.4 199zM480.6 487.7c45.2-43.5 48.5-113.5 6.7-157-40.7-43.5-111-44.1-156.2-.6-45.2 43.5-48.5 113.5-6.7 157 40.7 43.6 111 44.2 156.2.6zm176.8-132.2L818.7 259c72.5-44.1 158.5 8.8 155.1 95.3-3.3 86.5-94.9 140-163.5 97l-152.9-95.8z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h1>BEEQ</h1>
        </div>
        <bq-side-menu-item active>
          <bq-icon name="diamonds-four" slot="prefix"></bq-icon>
          Dashboard
        </bq-side-menu-item>

        <bq-side-menu-item>
          <bq-icon name="package" slot="prefix"></bq-icon>
          Products
          <bq-badge>5</bq-badge>
        </bq-side-menu-item>

        <bq-side-menu-item disabled>
          <bq-icon name="gauge" slot="prefix"></bq-icon>
          Perfomance
        </bq-side-menu-item>

        <bq-side-menu-item>
          <bq-icon name="truck" slot="prefix"></bq-icon>
          Deliver
        </bq-side-menu-item>

        <bq-side-menu-item>
          <bq-icon name="files" slot="prefix"></bq-icon>
          Documents
        </bq-side-menu-item>

        <bq-side-menu-item>
          <bq-icon name="stack" slot="prefix"></bq-icon>
          Inventory
        </bq-side-menu-item>

        <bq-side-menu-item>
          <bq-icon name="calendar" slot="prefix"></bq-icon>
          Calendar
        </bq-side-menu-item>

        <bq-side-menu-item>
          <bq-icon name="gear" slot="prefix"></bq-icon>
          Settings
        </bq-side-menu-item>

        <bq-side-menu-item class="close-button">
          <bq-icon name="x-circle" slot="prefix"></bq-icon>
          Close
        </bq-side-menu-item>
      </bq-side-menu>
      <main>
        <div>
          <bq-button @click="toggleSideMenu">Toggle Side Menu</bq-button>
        </div>
      </main>
    </div>
    <div>
      <bq-side-menu ref="sideMenuAppearanceRef" class="side-menu" v-if="isSideMenuAppearanceOpen" appearance="brand">
        <div slot="logo">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1080 1080" class="logo">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M251.8 942.3c-19.5-14.9-48-20.4-68.6-7.2-30.1 19.8-38.5 60.6-10.6 83.8 40.7 34.7 96 61.2 150.1 61.2 109.9 0 197-74.9 223.7-167 77 51.2 180.8 54 265 2.8l41.8 43.5c21.2 21.5 55.2 21.5 78.1 0 22.3-20.9 24-56.2 3.3-78.2l-41.8-43.5c55.8-82.1 57.5-186.2 10-265.6 93.2-20.4 172.4-105.2 176.9-217.7 6.7-171.4-165.2-277.2-309.1-190.7l-183 110.2c-5.6-7.7-11.7-14.9-18.4-22-49.1-51.8-119.4-72.7-186.4-63.4 0-6.6.6-13.8 1.7-20.9 3.9-27.6 14.5-52.9 35.2-73.3 22.9-21.5 24-56.2 3.3-78.2-21.1-21.5-55.1-21.5-78-.1-44.6 43-63.6 95.3-70.3 140.5-3.9 28.7-3.3 56.2 0 78.8-6.1 4.4-12.3 9.9-18.4 16-6.1 5.5-11.7 11.6-16.7 17.6-22.3-4.4-49.7-6.6-78.7-3.9-45.2 4.4-98.2 20.4-142.8 63.4-22.9 21.5-24 56.2-3.3 78.2 21.2 21.5 55.2 21.5 78.1 0 21.2-19.8 47.4-29.2 74.2-32 7.3 0 14.5-1.1 21.2 0-13.4 67.2 5 138.9 54.1 190.7 5.6 5.5 10.6 10.5 16.7 15.4l-22.3 32c-8.9 13.2-11.7 28.1-8.9 41.9l6.1 30.9c1.7 8.3-.6 17.1-5 23.7-7.3 11-13.9 13.2-24.5 15.4l-36.8 7.7c-16.7 3.3-31.8 13.8-41.8 29.2-20.6 30.9-12.8 71.6 17.3 90.9 30.1 19.3 70.9 9.9 91.5-20.9 10-15.4 13.4-33.1 10-49.6l-7.3-36.4c-2.2-10.5-2.2-18.2 4.5-28.7 4.5-7.2 11.2-12.1 19.5-14.3l30.7-7.2c13.9-3.3 26.2-12.1 34.6-25.3l15.1-23.1 88.2 162c39.1 72.7-18.4 163.7-104.3 163.7-24.8 0-51.6-13.2-73.9-30.3zM494 625.5l38.5 78.2c46.9-9.4 122.8-46.8 157.9-155.9L617.8 507l-61.9 59.5-61.4 59h-.5zm286.2 177.4c-58 55.7-146.2 51.2-194.7-2.8 70.9-25.3 152.9-83.2 198.1-196.2 54.1 51.3 56.3 142.3-3.4 199zM480.6 487.7c45.2-43.5 48.5-113.5 6.7-157-40.7-43.5-111-44.1-156.2-.6-45.2 43.5-48.5 113.5-6.7 157 40.7 43.6 111 44.2 156.2.6zm176.8-132.2L818.7 259c72.5-44.1 158.5 8.8 155.1 95.3-3.3 86.5-94.9 140-163.5 97l-152.9-95.8z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h1>BEEQ</h1>
        </div>
        <bq-side-menu-item active>
          <bq-icon name="diamonds-four" slot="prefix"></bq-icon>
          Dashboard
        </bq-side-menu-item>

        <bq-side-menu-item>
          <bq-icon name="package" slot="prefix"></bq-icon>
          Products
          <bq-badge>5</bq-badge>
        </bq-side-menu-item>

        <bq-side-menu-item disabled>
          <bq-icon name="gauge" slot="prefix"></bq-icon>
          Perfomance
        </bq-side-menu-item>

        <bq-side-menu-item>
          <bq-icon name="truck" slot="prefix"></bq-icon>
          Deliver
        </bq-side-menu-item>

        <bq-side-menu-item>
          <bq-icon name="files" slot="prefix"></bq-icon>
          Documents
        </bq-side-menu-item>

        <bq-side-menu-item>
          <bq-icon name="stack" slot="prefix"></bq-icon>
          Inventory
        </bq-side-menu-item>

        <bq-side-menu-item>
          <bq-icon name="calendar" slot="prefix"></bq-icon>
          Calendar
        </bq-side-menu-item>

        <bq-side-menu-item>
          <bq-icon name="gear" slot="prefix"></bq-icon>
          Settings
        </bq-side-menu-item>

        <bq-side-menu-item class="close-button">
          <bq-icon name="x-circle" slot="prefix"></bq-icon>
          Close
        </bq-side-menu-item>
      </bq-side-menu>
      <main>
        <div>
          <bq-button @click="toggleSideMenuAppearance">Toggle Side Menu Appearance</bq-button>
        </div>
      </main>
    </div>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
}

.card-wrapper :deep(.card__content) .side-menu::part(base) {
  z-index: 11;
}
</style>
