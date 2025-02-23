<!-- App.vue -->
<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import HelloWorld from './components/HelloWorld.vue';


</script>

<template>
  <!-- Include the NavBar at the top -->
  <NavBar />
  <div class="main-content">
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
.main-content {
  padding: 1em;
}
</style>
