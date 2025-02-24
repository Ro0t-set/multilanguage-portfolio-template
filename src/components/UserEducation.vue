<script setup lang="ts">
import { useAppStore } from '../stores/app'
import SectionTitle from './utility/SectionTitle.vue';

const store = useAppStore()
</script>

<template>
  <div class="education">
    <SectionTitle :title="store.currentDictionary.education.educationTitle" />
    <q-timeline color="secondary">
      <q-timeline-entry
        v-for="education in store.currentDictionary.education.educations"
        :key="education.title"
        :title="education.institution"
        :subtitle="`${education.title} | ${education.startDate || ''} - ${education.endDate || ''}`"
      >
        <div>{{ education.description }}</div>
        <div class="text-caption q-mt-sm">
          {{ education.location || '' }}
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<style scoped>
.education {
  padding: 2rem;
}

h2 {
  margin-bottom: 2rem;
  text-align: center;
}
</style>