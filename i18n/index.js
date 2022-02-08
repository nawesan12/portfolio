import i18next from 'i18next'
import { esp } from './es'
import { eng } from './en'

import { langSelected } from '../components/Layout/Layout'

i18next.init({
    interpolation: {
        escapeValue: true
    },
    lng: langSelected,
    resources: {
        en: {
            translation: eng
        },
        es: {
            translation: esp
        }
    }
})

export default i18next;