import { defineStore } from 'pinia'
import { Language } from '../locale/locale.d'
import { ref, computed } from 'vue'
import { dictionary } from '../locale/dictionary'

export const useAppStore = defineStore('app', () => {
  const defaultLang = Language.en
  const selectedLang = ref(defaultLang)
  const tab = ref('');
  
  const currentDictionary = computed(() => dictionary(selectedLang.value))
  
  function toggleLanguage() {
    selectedLang.value = selectedLang.value === Language.en ? Language.it : Language.en
  }

  return {
    selectedLang,
    currentDictionary,
    toggleLanguage,
    tab
  }
},
    { persist: true }
)