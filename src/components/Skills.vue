<script setup lang="ts">
import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>

<template>
  <div class="skills">
    <h1>{{ store.currentDictionary.skills.skillTitle }}</h1>

  </div>
</template>