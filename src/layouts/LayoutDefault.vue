<script setup lang="js">
import { useThemeStore } from '../stores/themeStore';
import { computed, onMounted, onUnmounted } from 'vue';

const themeStore = useThemeStore();
const isLightTheme = computed(() => themeStore.currentTheme === 'light');

const toggleTheme = () => {
  themeStore.setTheme(isLightTheme.value ? 'dark' : 'light');
};

const handleBackToTopButtonClick = (event) => {
  event.preventDefault();
  event.stopPropagation();

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const addBackToTopButtonEventListener = () => {
  const button = document.querySelector('.layout__back-to-top-button');
  if (!button) return;

  button.addEventListener('click', handleBackToTopButtonClick);
};

const removeBackToTopButtonEventListener = () => {
  const button = document.querySelector('.layout__back-to-top-button');
  if (!button) return;

  button.removeEventListener('click', handleBackToTopButtonClick);
};

onMounted(addBackToTopButtonEventListener);
onUnmounted(removeBackToTopButtonEventListener);
</script>

<template>
  <div class="layout">
    <div class="layout__header">
      <a class="logo-wrapper" href="https://www.beeq.design">
        <img
          v-if="isLightTheme"
          src="https://www.beeq.design/api/styleguide/112017/themes/1314/logo?"
          class="logo"
          alt="logo"
        />
        <img v-else src="https://www.beeq.design/api/styleguide/112017/themes/1454/logo?" class="logo" alt="logo" />
      </a>
      <button v-if="isLightTheme" class="toggle-button dark" @click="toggleTheme">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5 text-color-muted"
        >
          <path
            fill-rule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button v-else class="toggle-button light" @click="toggleTheme">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5 text-color-muted"
        >
          <path
            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
          ></path>
        </svg>
      </button>
    </div>
    <slot></slot>
    <div class="layout__footer">
      <div class="footer__description">Made with <img src="../assets/images/heart.svg" alt="heart" /> for Endavans</div>
      <div class="layout__footer-content">
        <div class="footer__links">
          <a href="https://beeq.design" target="_blank" rel="noopener noreferrer" class="footer__link"> BEEQ Design </a>
          <a href="https://storybook.beeq.design" target="_blank" rel="noopener noreferrer" class="footer__link">
            BEEQ Storybook
          </a>
          <a href="https://www.endava.com" target="_blank" rel="noopener noreferrer" class="footer__link"
            >Endava.com
          </a>
        </div>
        <div class="footer__copyright">© 2024 Endava</div>
      </div>
    </div>
    <bq-button
      class="layout__back-to-top-button"
      variant="ghost"
      :border="'full'"
      size="medium"
      style="--bq-stroke--brand: #4f46e5"
    >
      <bq-icon name="arrow-up" style="--bq-icon--size: 24px; --bq-icon--color: #4f46e5" size="24"></bq-icon>
    </bq-button>
  </div>
</template>

<style lang="css" scoped>
.layout {
  padding-top: 77px;
}
.layout__header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  min-height: 77px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  z-index: 10;
}
.logo-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo-wrapper span {
  font-size: 24px;
  line-height: 20px;
  font-weight: 400;
}
.logo {
  width: 152px;
  margin: 0 auto;
  display: block;
}

.toggle-button {
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  width: 30px;
  cursor: pointer;
}

.toggle-button.light {
  color: #ffffff;
}

.layout__footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  gap: 10px;
}

.layout__footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.layout__footer .footer__description {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
}

.layout__footer .footer__description img {
  width: 50px;
  height: 50px;
}

.layout__footer .footer__links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.layout__footer .footer__links .footer__link {
  color: #4f46e5;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
}

.layout__footer .footer__copyright {
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
}

.layout__back-to-top-button {
  position: fixed;
  bottom: 40px;
  right: 10px;
  z-index: 12;
}

body[bq-mode='dark'] .layout__header {
  border-color: #2a2c35;
  background: #15161a;
}

body[bq-mode='dark'] .layout__footer {
  border-color: #2a2c35;
  background: #15161a;
}
</style>
