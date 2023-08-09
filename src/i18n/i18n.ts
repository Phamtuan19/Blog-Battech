import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import flagVietnamese from '~/assets/svg/flagVietnamese.svg'
import flagEngland from '~/assets/svg/flagEngland.svg'

import VI_DEFAUTLAYOUT from '~/language/VietnameseLanguage/defauLayout.json'
import VI_HOME from '~/language/VietnameseLanguage/home.json'
import VI_NEWS from '~/language/VietnameseLanguage/news.json'
import VI_INTRODUCTION from '~/language/VietnameseLanguage/introduction.json'
import VI_JOBOPPORTURNITY from '~/language/VietnameseLanguage/jobOpportunity.json'
import VI_CONTACT from '~/language/VietnameseLanguage/contact.json'

import EN_DEFAUTLAYOUT from '~/language/EnglishLanguage/defauLayout.json'
import EN_HOME from '~/language/EnglishLanguage/home.json'
import EN_NEWS from '~/language/EnglishLanguage/news.json'
import EN_INTRODUCTION from '~/language/EnglishLanguage/introduction.json'
import EN_JOBOPPORTURNITY from '~/language/EnglishLanguage/jobOpportunity.json'
import EN_CONTACT from '~/language/EnglishLanguage/contact.json'

export const LANGUAGE = [
    { img: flagVietnamese, name: 'vi' },
    { img: flagEngland, name: 'en' }
]

const resources = {
    en: {
        layout: EN_DEFAUTLAYOUT,
        home: EN_HOME,
        news: EN_NEWS,
        introduction: EN_INTRODUCTION,
        jobOpportunity: EN_JOBOPPORTURNITY,
        contact: EN_CONTACT
    },
    vi: {
        layout: VI_DEFAUTLAYOUT,
        home: VI_HOME,
        news: VI_NEWS,
        introduction: VI_INTRODUCTION,
        jobOpportunity: VI_JOBOPPORTURNITY,
        contact: VI_CONTACT
    }
}

const defaultNS = 'home'

i18next.use(initReactI18next).init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    defaultNS,
    ns: ['layout'],
    fallbackLng: 'en',
    resources,
    interpolation: {
        escapeValue: false
    }
})
