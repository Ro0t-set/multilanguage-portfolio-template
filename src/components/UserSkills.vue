<script setup lang="ts">
import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>

<template>
  <div class="skills">
    <h2>{{ store.currentDictionary.skills.skillTitle }}</h2>
    <ul>
      <li v-for="skill in store.currentDictionary.skills.skills" :key="skill.name">
        {{ skill.name }}, {{ skill.level }}
      </li>
    </ul>
  </div>
</template>