<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import "@/assets/scss/app.scss";
import { defineComponent } from "vue";
import Header from "@/components/Header/index.vue";

export default defineComponent({
  components: {
    Header
  }
})
</script>

<style lang="scss">
</style>
