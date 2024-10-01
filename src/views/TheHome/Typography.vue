<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Typography" class="card-wrapper">
    <div>
      <h2 class="card-wrapper__title text-3xl font-medium block px-[20px] py-[10px]">Display</h2>
      <div>
        <h1 class="display text-text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      </div>
      <div>
        <h1 class="display text-text-primary semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      </div>
      <div>
        <h1 class="display text-text-primary bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      </div>
    </div>
    <div>
      <h2 class="card-wrapper__title text-3xl font-medium block px-[20px] py-[10px]">H1</h2>
      <div>
        <h1 class="h1 text-text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      </div>
      <div>
        <h1 class="h1 text-text-primary semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      </div>
      <div>
        <h1 class="h1 text-text-primary bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      </div>
    </div>
    <div>
      <h2 class="card-wrapper__title text-3xl font-medium block px-[20px] py-[10px]">H2</h2>
      <div>
        <h2 class="h2 text-text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>
      <div>
        <h2 class="h2 text-text-primary semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>
      <div>
        <h2 class="h2 text-text-primary bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>
    </div>
    <div>
      <h2 class="card-wrapper__title text-3xl font-medium block px-[20px] py-[10px]">H3</h2>
      <div>
        <h3 class="h3 text-text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      </div>
      <div>
        <h3 class="h3 text-text-primary semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      </div>
      <div>
        <h3 class="h3 text-text-primary bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      </div>
    </div>
    <div>
      <h2 class="card-wrapper__title text-3xl font-medium block px-[20px] py-[10px]">H4</h2>
      <div>
        <h4 class="h4 text-text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
      </div>
      <div>
        <h4 class="h4 text-text-primary semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
      </div>
      <div>
        <h4 class="h4 text-text-primary bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
      </div>
    </div>
    <div>
      <h2 class="card-wrapper__title text-3xl font-medium block px-[20px] py-[10px]">H5</h2>
      <div>
        <h5 class="h5 text-text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
      </div>
      <div>
        <h5 class="h5 text-text-primary semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
      </div>
      <div>
        <h5 class="h5 text-text-primary bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
      </div>
    </div>
    <div>
      <h2 class="card-wrapper__title text-3xl font-medium block px-[20px] py-[10px]">H6</h2>
      <div>
        <h6 class="h6 text-text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
      </div>
      <div>
        <h6 class="h6 text-text-primary semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
      </div>
      <div>
        <h6 class="h6 text-text-primary bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
      </div>
    </div>
    <div>
      <h2 class="card-wrapper__title text-3xl font-medium block px-[20px] py-[10px]">Body</h2>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div>
      <h2 class="card-wrapper__title text-3xl font-medium block px-[20px] py-[10px]">Caption</h2>
      <div>
        <p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <p class="caption semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <p class="caption bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div>
      <h2 class="card-wrapper__title text-3xl font-medium block px-[20px] py-[10px]">Overline</h2>
      <div>
        <p class="overline">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <p class="overline semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <p class="overline bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 0;
  gap: 0;
}

.card-wrapper :deep(.card__content) div .card-wrapper__title {
  color: #4f46e5;
  border-bottom: 1px solid #e5e7eb;
  background: #e5e7eb;
}

.card-wrapper :deep(.card__content) div > div {
  border-bottom: 1px solid #e5e7eb;
  padding: 20px;
}

.card-wrapper :deep(.card__content) div:last-child > div:last-child {
  border-bottom: none;
}

body[bq-mode='dark'] .card-wrapper :deep(.card__content) div .card-wrapper__title {
  border-color: #2a2c35;
  background: #2a2c35;
}

body[bq-mode='dark'] .card-wrapper :deep(.card__content) div > div {
  border-color: #2a2c35;
}
</style>
