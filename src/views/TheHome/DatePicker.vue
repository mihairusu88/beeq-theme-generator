<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Date Picker" class="card-wrapper">
    <bq-date-picker name="bq-date-picker" type="single" placeholder="Select a date for your appointment" open>
      <label for="" slot="label"> Appointment date </label>
    </bq-date-picker>
    <bq-date-picker
      open
      name="bq-date-picker"
      type="single"
      value="2024-12-25"
      placeholder="Select a date for your appointment"
    >
      <label for="" slot="label"> Appointment date </label>
    </bq-date-picker>
    <bq-date-picker name="bq-date-picker" type="range" months="2" placeholder="Select the departure and return dates">
      <label for="" slot="label"> Depart - Return dates </label>
    </bq-date-picker>
    <bq-date-picker
      name="bq-date-picker"
      type="range"
      months="2"
      placeholder="Select the departure and return dates"
      value="2024-12-20/2025-01-12"
    >
      <label for="" slot="label"> Depart - Return dates </label>
    </bq-date-picker>
    <bq-date-picker name="bq-date-picker" type="multi" placeholder="Select the session dates">
      <label for="" slot="label"> Training sessions dates </label>
    </bq-date-picker>
    <bq-date-picker
      name="bq-date-picker"
      type="multi"
      placeholder="Select the session dates"
      value="2024-11-05 2024-11-08 2024-11-12 2024-11-15 2024-12-10 2024-12-13 2024-12-17 2024-12-20"
      months="2"
    >
      <label for="" slot="label"> Training sessions </label>
    </bq-date-picker>
    <bq-date-picker
      name="bq-date-picker"
      type="single"
      placeholder="Select a date for your appointment"
      validation-status="error"
    >
      <label for="" slot="label"> Appointment date </label>
    </bq-date-picker>

    <bq-date-picker
      name="bq-date-picker"
      type="single"
      placeholder="Select a date for your appointment"
      validation-status="success"
    >
      <label for="" slot="label"> Appointment date </label>
    </bq-date-picker>

    <bq-date-picker
      name="bq-date-picker"
      type="single"
      placeholder="Select a date for your appointment"
      validation-status="warning"
    >
      <label for="" slot="label"> Appointment date </label>
    </bq-date-picker>
    <bq-date-picker name="bq-date-picker" type="single" placeholder="Select your arrival date">
      <div slot="label">
        <label for="">Arrival date</label>
        <span>Optional</span>
      </div>
    </bq-date-picker>
    <bq-date-picker name="bq-date-picker" type="single" placeholder="Select your arrival date">
      <div slot="label">
        <label for="">Arrival date</label>
        <span>Optional</span>
      </div>
    </bq-date-picker>

    <bq-date-picker
      name="bq-date-picker"
      type="single"
      placeholder="Select a date for your appointment"
      value="2024-12-10"
    >
      <label for="" slot="label"> Appointment date </label>
    </bq-date-picker>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  @apply md:grid-cols-3;
}
</style>
