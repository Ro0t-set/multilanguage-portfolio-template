<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '../stores/app'
import { Language } from '../locale/locale.d'

const store = useAppStore()

const toggleButtonLabel = computed(() =>
  store.selectedLang === Language.en ? 'It' : 'En'
)
</script>

<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li>{{ store.currentDictionary.navbar.home }}</li>
      <li>{{ store.currentDictionary.navbar.about }}</li>
      <li>{{ store.currentDictionary.navbar.experience }}</li>
      <li>{{ store.currentDictionary.navbar.skills }}</li>
      <li>{{ store.currentDictionary.navbar.projects }}</li>
      <li>{{ store.currentDictionary.navbar.contact }}</li>
    </ul>
    <button @click="store.toggleLanguage" class="toggle-button">
      Switch to {{ toggleButtonLabel }}
    </button>
  </nav>
</template>

