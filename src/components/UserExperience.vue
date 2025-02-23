<script setup lang="ts">
import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>

<template>
  <div class="experience">
        <h2>{{ store.currentDictionary.experience.experienceTitle }}</h2>
        <ul>
          <li v-for="experience in store.currentDictionary.experience.experiences" :key="experience.title">
            {{ experience.title }}, {{ experience.description }}, {{ experience.company }}, {{ experience.location }}, {{ experience.startDate }}, {{ experience.endDate }}
          </li>
        </ul>
        </div>
</template>