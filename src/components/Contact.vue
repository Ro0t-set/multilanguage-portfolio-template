<script setup lang="ts">
import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>

<template>
  <div class="contact">
    <h1>{{ store.currentDictionary.contact.contactTitle }}</h1>
  </div>
</template>