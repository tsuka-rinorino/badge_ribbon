<template>
  <header class="header">
    <h1 class="header__title">ばっじりぼん</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'header',
})
</script>

<style lang="scss">
.header {
  &__title {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 24px;
  }
}
</style>
