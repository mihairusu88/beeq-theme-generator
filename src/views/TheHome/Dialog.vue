<script setup lang="js">
import Card from '@/components/Card.vue';
import { ref } from 'vue';

const isDialogOpen = ref(false);
const openDialog = () => {
  isDialogOpen.value = true;
};
</script>

<template>
  <Card title="Dialog" class="card-wrapper">
    <bq-button @click="openDialog">Open Dialog</bq-button>
    <bq-dialog class="dialog" :open="isDialogOpen" @bqClose="isDialogOpen = false">
      <h5 slot="title">Title</h5>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </p>
      <div slot="footer">
        <bq-button class="save-button" variant="ghost" @click="isDialogOpen = false">Save</bq-button>
        <bq-button variant="standard" slot="footer" @click="isDialogOpen = false">Close</bq-button>
      </div>
    </bq-dialog>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) .dialog::part(dialog) {
  position: fixed;
  bottom: 0;
}

.card-wrapper :deep(.card__content) .save-button {
  margin-right: 10px;
}
</style>
