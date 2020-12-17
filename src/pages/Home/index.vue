<template>
  <div class="home">
    <v-card v-for="card in cards" :key="card.title" :data="card" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { TypeCard } from '@/types/card.d.ts';
import Card from '@/components/Card/index.vue';

export default defineComponent({
  components: {
    'v-card': Card
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
