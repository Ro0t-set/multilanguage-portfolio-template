<script setup lang="ts">
import { computed } from 'vue';
import { useLanguage } from '../composables/useLanguage';

const { currentLanguage, toggleLanguage, translate } = useLanguage();

const homeLabel = computed(() => translate('navbar', 'home'));
const aboutLabel = computed(() => translate('navbar', 'about'));
const contactLabel = computed(() => translate('navbar', 'contact'));
const toggleButtonLabel = computed(() => 
  currentLanguage.value === 'en' ? 'English' : 'Italiano'
);
</script>

<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li>{{ homeLabel }}</li>
      <li>{{ aboutLabel }}</li>
      <li>{{ contactLabel }}</li>
    </ul>
    <button @click="toggleLanguage" class="toggle-button">
      Switch to {{ toggleButtonLabel }}
    </button>
  </nav>
</template>