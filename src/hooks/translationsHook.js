
import i18next from 'i18next';
// translations files
import globals_es from "../translations/es/global.json";
import globals_en from "../translations/en/global.json";
// flag logos
import esLogo from '../assets/img/flags/es.png';
import enLogo from '../assets/img/flags/en.png';

// function to initialize the translations lib
export const initTranslation = () => {
    i18next.init({
        interpolation: { escapeValue: false },
        lng: "en",
        resources: {
            es: { global: globals_es },
            en: { global: globals_en }
        }
    })
    return i18next;
}
// function to get the current language
export const getCurrentLanguage = () => {
    return i18next.language || 'en';
}
// function to get the current language flag logo
export const getCurrentLanguageFlag = () => {
    const language = i18next.language || 'en';
    return (language === 'en') ? esLogo : enLogo;
}
// function to change the language
export const changeLanguageSetting = () => {
    const newLanguage = getCurrentLanguage() === 'en' ? 'es' : 'en';
    i18next.changeLanguage(newLanguage)
}

