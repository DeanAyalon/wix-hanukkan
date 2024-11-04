import { expand } from "public/rtl"

// Element selectors
let model, showModel, img

// Handle RTL
const rtl = expand('main')
if (rtl) {
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