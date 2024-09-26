<script setup lang="js">
import Card from '@/components/Card.vue';
</script>

<template>
  <Card title="Tooltip" class="card-wrapper">
    <div>
      <bq-tooltip visible>
        Yuhu! I'm a tooltip 🙃
        <bq-button slot="trigger">Hover me!</bq-button>
      </bq-tooltip>
    </div>
    <div>
      <bq-tooltip placement="bottom" visible>
        Yuhu! I'm a tooltip 🙃
        <bq-button slot="trigger">Hover me!</bq-button>
      </bq-tooltip>
    </div>
    <div>
      <bq-tooltip placement="right" visible>
        Yuhu! I'm a tooltip 🙃
        <bq-button slot="trigger">Hover me!</bq-button>
      </bq-tooltip>
    </div>
    <div>
      <bq-tooltip placement="left" visible>
        Yuhu! I'm a tooltip 🙃
        <bq-button slot="trigger">Hover me!</bq-button>
      </bq-tooltip>
    </div>
    <div>
      <bq-tooltip hide-arrow placement="top" visible>
        Yuhu! I'm a tooltip 🙃
        <bq-button slot="trigger">Hover me!</bq-button>
      </bq-tooltip>
    </div>
    <div>
      <bq-tooltip placement="top" same-width visible>
        Tooltip 🙃 !!!
        <bq-button slot="trigger">Hover me!</bq-button>
      </bq-tooltip>
    </div>
    <div>
      <bq-tooltip placement="top" visible>
        Yuhu! I'm a tooltip 🙃, and I'm a long text that probably shouldn't be shown here 🙃!!
        <bq-button slot="trigger">Hover me!</bq-button>
      </bq-tooltip>
    </div>
    <div>
      <bq-tooltip display-on="click" placement="top" visible>
        Yuhu! I'm a tooltip 🙃
        <bq-button slot="trigger">
          <bq-icon name="mouse" slot="prefix"></bq-icon>
          Click me!
        </bq-button>
      </bq-tooltip>
    </div>
  </Card>
</template>

<style lang="css" scoped>
.card-wrapper :deep(.card__content) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
}

.card-wrapper :deep(.card__content) div {
  position: relative;
  display: block;
  justify-content: center;
  width: 106px;
  gap: 10px;
  margin: 0 auto;
}
</style>
