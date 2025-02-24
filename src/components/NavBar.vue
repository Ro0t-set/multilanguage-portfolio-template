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
      icon="fas fa-user"
      :label="getLabel('about')"
      @click="onTabClick('about')"
    />
    <q-tab
      name="education-experience"
      icon="fas fa-briefcase"
      :label="getLabel('experience')"
      @click="onTabClick('education-experience')"
    />
    <q-tab
      name="skills"
      icon="fas fa-code"
      :label="getLabel('skills')"
      @click="onTabClick('skills')"
    />
    <q-tab
      name="projects"
      icon="fas fa-folder"
      :label="getLabel('projects')"
      @click="onTabClick('projects')"
    />
    <q-tab
      name="contact"
      icon="fas fa-envelope"
      :label="getLabel('contact')"
      @click="onTabClick('contact')"
    />
    <q-separator vertical />
    <q-btn
      flat
      stack
      icon="fas fa-globe"
      :label="toggleButtonLabel"
      :class="'dark'"
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
