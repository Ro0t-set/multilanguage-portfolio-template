<script setup lang="ts">
import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>

<template>
  <div class="projects">
    <h2>{{ store.currentDictionary.projects.projectTitle }}</h2>
    <ul>
      <li v-for="project in store.currentDictionary.projects.projects" :key="project.title">
        {{ project.title }}, {{ project.description }}, {{ project.url }}, {{ project.technologies }}
      </li>
    </ul>
  </div>
</template>