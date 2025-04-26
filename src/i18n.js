import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import laungageDetector from 'i18next-browser-languagedetector';


// import language json files
import uzWords from './languages/uz.json';
import enWords from './languages/en.json';
import ruWords from './languages/ru.json';

i18n
.use(Backend)
.use(laungageDetector)
.use(initReactI18next)
.init({
    fallbackLng:'en',
    lng:'uz',
    debug:true,
    resources:{
        uz:{translation:uzWords},
        en:{translation:enWords},
        ru:{translation:ruWords},
    }
})

export default i18n;