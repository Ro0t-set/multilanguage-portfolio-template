<!-- App.vue -->
<script setup lang="ts">
import { ref, provide } from 'vue';
import NavBar from './components/NavBar.vue';
import HelloWorld from './components/HelloWorld.vue';
import { Language } from './locale/locale.d';

// Global reactive language state
const currentLanguage = ref(Language.en);
provide('currentLanguage', currentLanguage);
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
