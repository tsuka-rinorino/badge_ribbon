<template>
  <div class="home">
    <v-card :data="card" />
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
    const card = reactive<TypeCard[]>([
      {
        title: 'タイトル'
      }
    ]);
    return {
      card
    };
  }
})
</script>
