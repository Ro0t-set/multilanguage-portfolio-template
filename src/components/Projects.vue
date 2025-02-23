<script setup lang="ts">
import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>

<template>
  <div class="projects">
    <h1>{{ store.currentDictionary.projects.projectTitle }}</h1>
  </div>
</template>