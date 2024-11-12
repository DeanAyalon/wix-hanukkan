import wixLocation from 'wix-location-frontend'

import { expand } from 'public/rtl'
import _w from 'public/selector'

// Handle layout direction
const rtl = expand('main') ? '-rtl' : ''
// Element selectors
const model = _w.html('#model' + rtl),
    showModel = _w.vector('#showModel' + rtl),
    img = _w.image('#img' + rtl)

// Load model from CMS
const dataset = $w('#dynamicDataset')
dataset.onReady(() => {
    const url = dataset.getCurrentItem().widgetUrl
    if (url) {
        model.src = url
        showModel.show()
    } else model.hide()
})
showModel.onClick(() => img.hide())

// Share button URLs
const pageUrl = wixLocation.url
_w.image('#share-fb' + rtl).link = 'https://www.facebook.com/sharer.php?u=' + pageUrl
_w.image('#share-in' + rtl).link = 'https://www.linkedin.com/shareArticle?url=' + pageUrl
_w.image('#share-wa' + rtl).link = 'https://api.whatsapp.com/send?text=' + pageUrl
_w.image('#share-x' + rtl).link = 'https://x.com/intent/tweet?url=' + pageUrl