import { multilingual } from "wix-window-frontend"

// Handle LTR/RTL
const rtl = multilingual.currentLanguage == 'he'
let model, showModel, img
if (rtl) {
    $w('#main').collapse()
    $w('#main-rtl').expand()
    model = $w('#model-rtl')
    showModel = $w('#showModel-rtl')
    img = $w('#img-rtl')
} else {
    model = $w('#model')
    showModel = $w('#showModel')
    img = $w('#img')
}

// Load model from CMS
$w('#dynamicDataset').onReady(() => {
    const url = $w('#dynamicDataset').getCurrentItem().widgetUrl
    if (url) {
        model.src = url
        showModel.show()
    } else model.hide()
})
showModel.onClick(() => img.hide())