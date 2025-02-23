<script setup lang="ts">
import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>

<template>
  <div class="experience">
        <h1>{{ store.currentDictionary.experience.experienceTitle }}</h1>
        </div>
</template>