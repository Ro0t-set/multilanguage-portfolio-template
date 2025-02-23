<script setup lang="ts">
import { computed } from 'vue'
import { Language } from '../locale/locale.d'
import { useAppStore } from '../stores/app'
const store = useAppStore()

const toggleButtonLabel = computed(() =>
  store.selectedLang === Language.en ? 'It' : 'En'
)

const emit = defineEmits(['scrollToSection'])

function onTabClick(tabName: string) {
  emit('scrollToSection', tabName)
}
</script>

<template>
  <q-toolbar class="fixed-top bg-primary shadow-1 rounded-borders">
    <q-space />
    <q-tabs
      shrink
      stretch
    >
      <q-tab
        name="about"
        :label="store.currentDictionary.navbar.about"
        @click="onTabClick('about')"
      />
      <q-tab
        name="experience"
        :label="store.currentDictionary.navbar.experience"
        @click="onTabClick('experience')"
      />
      <q-tab
        name="skills"
        :label="store.currentDictionary.navbar.skills"
        @click="onTabClick('skills')"
      />
      <q-tab
        name="projects"
        :label="store.currentDictionary.navbar.projects"
        @click="onTabClick('projects')"
      />
      <q-tab
        name="contact"
        :label="store.currentDictionary.navbar.contact"
        @click="onTabClick('contact')"
      />
    </q-tabs>
    <q-btn
      :label="toggleButtonLabel"
      @click="store.toggleLanguage"
    />
  </q-toolbar>
</template>

<style scoped>
.q-toolbar {
  z-index: 2000;
}
</style>