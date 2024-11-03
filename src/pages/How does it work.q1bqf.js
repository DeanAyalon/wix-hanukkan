import { multilingual } from "wix-window-frontend";

if (multilingual.currentLanguage == 'he') {
    $w('#components').collapse()
    $w('#components-rtl').expand()
}