import { ref, readonly } from 'vue';
import { Language } from '../locale/locale.d';
import { translate as _translate } from '../locale/dictionary';

const currentLanguage = ref<Language>(Language.en);

export function useLanguage() {
  const toggleLanguage = () => {
    currentLanguage.value = 
      currentLanguage.value === Language.en ? Language.it : Language.en;
  };

  const translate = <K extends keyof import('../locale/locale.d').Locale, 
    T extends keyof import('../locale/locale.d').Locale[K]>(
    section: K,
    key: T
  ): string => {
    return _translate(currentLanguage.value, section, key);
  };

  return {
    currentLanguage: readonly(currentLanguage),
    toggleLanguage,
    translate
  };
}