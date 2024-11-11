import wixLocation from 'wix-location-frontend'

import { expand } from 'public/rtl'

// Handle RTL/LTR expansion
const rtl = expand('main') ? '-rtl' : ''

// Element selectors by writing direction
/** Selects image element based on site language writing direction
 * @param {WixElementSelector} tag 
 * @returns {$w.Image}   */ // @ts-ignore
const getImg = tag => $w((tag + rtl))

/** @type {$w.HtmlComponent} */ // @ts-ignore
const model = $w('#model' + rtl),

/** @type {$w.VectorImage} */ // @ts-ignore
    showModel = $w('#showModel' + rtl),
    img = getImg('#img')

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
getImg('#share-fb').link = 'https://www.facebook.com/sharer.php?u=' + pageUrl
getImg('#share-in').link = 'https://www.linkedin.com/shareArticle?url=' + pageUrl
getImg('#share-wa').link = 'https://api.whatsapp.com/send?text=' + pageUrl
getImg('#share-x').link = 'https://x.com/intent/tweet?url=' + pageUrl