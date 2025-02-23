<script setup lang="ts">
import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>

<template>
  <div class="contact">
    <h2>{{ store.currentDictionary.contact.contactTitle }}</h2>
    <p>{{ store.currentDictionary.contact.email }}</p>
    <p>{{ store.currentDictionary.contact.phone }}</p>
    <p>{{ store.currentDictionary.contact.linkedin }}</p>
    <p>{{ store.currentDictionary.contact.github }}</p>
  </div>
</template>