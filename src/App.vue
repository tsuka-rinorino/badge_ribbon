<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import "@/assets/scss/app.scss";
import { defineComponent } from "vue";

export default defineComponent({
})
</script>

<style lang="scss">
</style>
