import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import {en, hi, knd, pnj, tl} from './translation'
const resources = {
    en:{
        translation: en 
    },
    hi:{
        translation:hi
    },
    knd:{
        translation: knd
    },
    pnj:{
        translation: pnj
    },
    tl:{
        translation:tl
    }

}

i18next.use(initReactI18next).init({
    debug: true, // debug true is used to log all the events in initReactI18next in console
    lng:'en',
    fallbackLng: 'en', // fallbacklng is used when translation in user language is not available
    interpolation: {
        escapeValue: false
    },
    resources
})

export default i18next