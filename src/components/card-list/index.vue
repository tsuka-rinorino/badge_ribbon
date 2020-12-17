<template>
  <div class="card-list">
    <v-card v-for="card in cards" :key="card.title" :data="card" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TypeCard } from '@/types/card.d.ts';
import card from '@/components/card/index.vue';

type Props = {
  cards: TypeCard;
};

export default defineComponent({
  name: 'card-list',
  components: {
    'v-card': card
  },
  props: {
    cards: {
      type: Object,
      default: () => {},
    }
  },
  // @ts-ignore
  setup(props: Props) {
    props.cards
  }
})
</script>

<style lang="scss">

</style>
