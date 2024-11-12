import wixLocation from 'wix-location-frontend'

import _w from 'public/selector'
import $ml, * as ml from 'public/multilingual'

// Handle layout direction
ml.expand('main')
// Element selectors
const model = $ml.html('#model'),
    showModel = $ml.vector('#showModel'),
    img = $ml.image('#img')

// Load model from CMS
const dataset = _w.dynamicDataset('#dynamicDataset')
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
$ml.image('#share-fb').link = 'https://www.facebook.com/sharer.php?u=' + pageUrl
$ml.image('#share-in').link = 'https://www.linkedin.com/shareArticle?url=' + pageUrl
$ml.image('#share-wa').link = 'https://api.whatsapp.com/send?text=' + pageUrl
$ml.image('#share-x').link = 'https://x.com/intent/tweet?url=' + pageUrl
