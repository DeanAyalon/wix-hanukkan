import { multilingual } from "wix-window-frontend";

if (multilingual.currentLanguage == 'he') {
    $w('#ltr-stack').collapse()
    $w('#rtl-stack').expand()
}