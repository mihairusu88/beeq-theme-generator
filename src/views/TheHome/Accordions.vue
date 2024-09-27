<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Accordion">
    <div class="card__content-wrapper">
      <bq-accordion-group>
        <bq-accordion>
          <span slot="header">Header</span>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam corporis perferendis, architecto vel
            ullam officia officiis necessitatibus optio nam soluta labore libero debitis? Delectus enim quaerat
            laboriosam consequatur ea.
          </div>
        </bq-accordion>
        <bq-accordion expanded>
          <span slot="header">Header</span>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam corporis perferendis, architecto vel
            ullam officia officiis necessitatibus optio nam soluta labore libero debitis? Delectus enim quaerat
            laboriosam consequatur ea.
          </div>
        </bq-accordion>
        <bq-accordion disabled>
          <span slot="header">Header</span>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam corporis perferendis, architecto vel
            ullam officia officiis necessitatibus optio nam soluta labore libero debitis? Delectus enim quaerat
            laboriosam consequatur ea.
          </div>
        </bq-accordion>
        <bq-accordion>
          <span slot="header">Header</span>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam corporis perferendis, architecto vel
            ullam officia officiis necessitatibus optio nam soluta labore libero debitis? Delectus enim quaerat
            laboriosam consequatur ea.
          </div>
        </bq-accordion>
      </bq-accordion-group>
    </div>
  </Card>
</template>

<style scoped lang="css">
.card .card__content-wrapper {
  width: 100%;
}
</style>
