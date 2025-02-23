<script setup lang="ts">
import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>

<template>
  <div class="about-me">
    <h1>{{ store.currentDictionary.generalInfo.name }} {{ store.currentDictionary.generalInfo.surname }}</h1>
    <p>{{ store.currentDictionary.generalInfo.description }}</p>
    <p>{{ store.currentDictionary.generalInfo.role }}</p>
  </div>
</template>