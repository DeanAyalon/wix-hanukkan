import { multilingual } from "wix-window-frontend";

if (multilingual.currentLanguage == 'he') {
    $w('#description').collapse()
    $w('#description-rtl').expand()
}