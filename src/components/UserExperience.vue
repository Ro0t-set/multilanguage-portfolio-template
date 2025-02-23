<script setup lang="ts">
import { useAppStore } from '../stores/app'
import SectionTitle from './utility/SectionTitle.vue';

const store = useAppStore()
</script>

<template>
  <div class="experience">
    <SectionTitle :title="store.currentDictionary.experience.experienceTitle" />
    <q-timeline color="secondary">
      <q-timeline-entry
        v-for="experience in store.currentDictionary.experience.experiences"
        :key="experience.title"
        :title="experience.company"
        :subtitle="`${experience.title} | ${experience.startDate || ''} - ${experience.endDate || ''}`"
      >
        <div>{{ experience.description }}</div>
        <div class="text-caption q-mt-sm">
          {{ experience.location || '' }}
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<style scoped>
.experience {
  padding: 2rem;
}

h2 {
  margin-bottom: 2rem;
  text-align: center;
}
</style>