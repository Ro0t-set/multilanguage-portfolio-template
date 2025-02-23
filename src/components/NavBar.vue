<script setup lang="ts">
import { computed } from 'vue'
import { Language } from '../locale/locale.d'
import { useAppStore } from '../stores/app'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const store = useAppStore()

const toggleButtonLabel = computed(() =>
  store.selectedLang === Language.en ? 'It' : 'En'
)

const emit = defineEmits(['scrollToSection'])
function onTabClick(tabName: string) {
  emit('scrollToSection', tabName)
}

const isMobile = computed(() => $q.screen.lt.sm)

function getLabel(tabKey: keyof typeof store.currentDictionary.navbar) {
  return isMobile.value ? '' : store.currentDictionary.navbar[tabKey]
}
</script>

<template>
  <q-space v-if="!isMobile" />
  <q-tabs
    shrink
    stretch
    :align="isMobile ? 'justify' : 'right'"
    :spread="isMobile"
    :class="[isMobile ? 'fixed-bottom' : 'fixed-top', 'bg-primary', 'shadow-1']"
  >
    <q-tab
      name="about"
      icon="person"
      :label="getLabel('about')"
      @click="onTabClick('about')"
    />
    <q-tab
      name="experience"
      icon="work"
      :label="getLabel('experience')"
      @click="onTabClick('experience')"
    />
    <q-tab
      name="skills"
      icon="code"
      :label="getLabel('skills')"
      @click="onTabClick('skills')"
    />
    <q-tab
      name="projects"
      icon="folder"
      :label="getLabel('projects')"
      @click="onTabClick('projects')"
    />
    <q-tab
      name="contact"
      icon="mail"
      :label="getLabel('contact')"
      @click="onTabClick('contact')"
    />
    <q-separator vertical />
    <q-btn
      flat
      stack
      icon="flag_circle"
      :label="toggleButtonLabel"
      @click="store.toggleLanguage"
    />
  </q-tabs>
</template>

<style scoped>
.q-tabs {
  z-index: 2000;
}

.q-tab {
  min-height: 48px;
}

</style>
