
export enum Language {
    it = "it",
    en = "en",
  }
  
  export interface NavbarTranslations {
    home: string;
    about: string;
    contact: string;
  }
  
  export interface Locale {
    navbar: NavbarTranslations;
  }
  