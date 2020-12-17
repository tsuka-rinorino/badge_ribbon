<template>
  <div class="home">
    <v-card-list :cards="cards" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { TypeCard } from '@/types/card.d.ts';
import cardList from '@/components/card-list/index.vue';

export default defineComponent({
  name: 'home-page',
  components: {
    'v-card-list': cardList
  },
  setup() {
    const cards = reactive<TypeCard[]>([
      {
        title: 'タイトル1',
        description: '説明1',
      }
    ]);
    return {
      cards
    };
  }
})
</script>
