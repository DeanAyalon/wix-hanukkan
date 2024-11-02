import { multilingual } from 'wix-window-frontend'

if (multilingual.currentLanguage === 'he') {
    $w('#mission').collapse()
    $w('#mission-rtl').expand()
}