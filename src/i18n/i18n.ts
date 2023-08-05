import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import VI_DEFAUTLAYOUT from '~/language/VietnameseLanguage/defauLayout.json'
import VN_DEFAUTLAYOUT from '~/language/EnglishLanguage/defauLayout.json'

const resources = {
    en: {
        layout: VN_DEFAUTLAYOUT
    },
    vi: {
        layout: VI_DEFAUTLAYOUT
    }
}

const defaultNS = 'home'

i18n.use(initReactI18next).init({
    resources,
    ns: ['layout'],
    lng: 'vi',
    fallbackLng: 'vi',
    defaultNS,
    interpolation: {
        escapeValue: false
    }
})

export default i18n
