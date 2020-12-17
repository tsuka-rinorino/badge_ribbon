<template>
  <v-header />
  <router-view />
</template>

<script lang="ts">
import '@/assets/scss/app.scss';
import { defineComponent } from 'vue';
import header from '@/components/header/index.vue';

export default defineComponent({
  components: {
    'v-header': header    
  }
})
</script>

<style lang="scss">
</style>
