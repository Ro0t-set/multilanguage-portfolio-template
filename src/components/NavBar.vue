<script setup lang="ts">
import { computed } from 'vue';
import { Language } from '../locale/locale.d';
import { getLocaleDictionary } from '../locale/dictionary';


const currentLanguage = ref(Language.en);
const toggleButtonLabel = computed(() => 
  currentLanguage.value === Language.en ? 'English' : 'Italiano'
);

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === Language.en ? Language.it : Language.en;
};

import { ref } from 'vue';
</script>

<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li>{{ getLocaleDictionary(currentLanguage).navbar.home }}</li>
      <li>{{ getLocaleDictionary(currentLanguage).navbar.about }}</li>
      <li>{{ getLocaleDictionary(currentLanguage).navbar.contact }}</li>
    </ul>
    <button @click="toggleLanguage" class="toggle-button">
      Switch to {{ toggleButtonLabel }}
    </button>
  </nav>
</template>