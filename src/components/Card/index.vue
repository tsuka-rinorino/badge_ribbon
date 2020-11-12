<template>
  <div class="card">
    {{ data.title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TypeCard } from '@/types/card.d.ts';

type Props = {
  data: TypeCard;
};

export default defineComponent({
  name: 'Card',
  props: {
    data: {
      type: Object,
      default: () => {},
    }
  },
  // @ts-ignore
  setup(props: Props) {
    props.data
  }
})
</script>

<style lang="scss"></style>
