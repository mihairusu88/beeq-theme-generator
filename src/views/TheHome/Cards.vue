<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Card">
    <div class="card__content-wrapper">
      <div>
        <bq-card>
          <div class="card-wrapper">
            <div>
              <div class="title-section">
                <span class="color-title">Title</span>
                <bq-icon color="text--brand" size="16" name="star"></bq-icon>
              </div>
              <h4>194</h4>
            </div>
            <div>
              <p>
                <span class="font-bold">120</span>
                days
              </p>
              <p class="color-title">avg resolution</p>
            </div>
            <div>
              <p>
                <span class="font-bold">120</span>
                days
              </p>
              <p class="color-title">avg resolution</p>
            </div>
          </div>
        </bq-card>
      </div>
      <div>
        <bq-card>
          <div class="card-wrapper">
            <h6>Title</h6>
            <div class="info-section">
              <div class="item-section">
                <bq-icon name="star"></bq-icon>
                Lorem Ipsum is simply dummy text
              </div>
              <div class="item-section">
                <bq-icon name="star"></bq-icon>
                Lorem Ipsum is simply dummy text
              </div>
              <div class="item-section">
                <bq-icon name="star"></bq-icon>
                Lorem Ipsum is simply dummy text
              </div>
              <div class="item-section">
                <bq-icon name="star"></bq-icon>
                Lorem Ipsum is simply dummy text
              </div>
            </div>
          </div>
        </bq-card>
      </div>
      <div>
        <bq-card>
          <div class="card-wrapper">
            <bq-icon color="text--brand" size="56" name="star"></bq-icon>
            <div>
              <div class="title-section">
                <span class="color-title">Title</span>
                <bq-icon color="text--brand" size="16" name="star"></bq-icon>
              </div>
              <div class="info-section flex items-end gap-xs">
                <h4>194</h4>
                <span class="color-success">+24%</span>
                <span class="color-title">than last mo.</span>
              </div>
            </div>
          </div>
        </bq-card>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="css">
.card__content-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
