import { multilingual } from "wix-window-frontend"

// Handle LTR/RTL
const rtl = multilingual.currentLanguage == 'he'
if (rtl) {
    $w('#main').collapse()
    $w('#main-rtl').expand()
}
const model = rtl ? $w('#model-rtl') : $w('#model'),
    showModel = rtl ? $w('#showModel-rtl') : $w('#showModel'),
    img = rtl ? $w('#img-rtl') : $w('#img')

// Load model from CMS
$w('#dynamicDataset').onReady(() => {
    const url = $w('#dynamicDataset').getCurrentItem().widgetUrl
    if (url) {
        model.src = url
        showModel.show()
    } else model.hide()
})
showModel.onClick(() => img.hide())