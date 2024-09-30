<script setup lang="js">
import Card from '@/components/Card.vue';
import { ref } from 'vue';

const dialogRef = ref(null);

const openDialog = () => {
  dialogRef.value.open = true;
};

const closeDialog = () => {
  dialogRef.value.open = false;
};
</script>

<template>
  <Card title="Dialog" class="card-wrapper">
    <bq-button @click="openDialog">Open Dialog</bq-button>
    <bq-dialog ref="dialogRef" class="dialog" @bqClose="closeDialog" @bqCancel="closeDialog">
      <h5 slot="title">Title</h5>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </p>
      <div slot="footer">
        <bq-button variant="ghost" class="save-button">Save</bq-button>
        <bq-button variant="standard" slot="footer" @click="closeDialog">Close</bq-button>
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
