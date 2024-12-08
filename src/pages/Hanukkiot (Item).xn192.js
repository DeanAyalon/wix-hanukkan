import wixLocation from 'wix-location-frontend'
import { getJSON } from 'wix-fetch'

import {_w} from 'public/tools'
import {$ml, ml} from 'public/tools'

// Handle layout direction
ml.expand('main')
// Element selectors
const model = $ml.html('#model'),
    showModel = $ml.vector('#showModel'),
    img = $ml.image('#img')

// Load model from CMS
const dataset = _w.dynamicDataset('#dynamicDataset')
dataset.onReady(async () => {
    let url = dataset.getCurrentItem().widgetUrl
    if (url) {
        // Get current day of Hanukkah
        const date = new Date().toISOString().split('T')[0]
        /** @type {{title: string}} */
        const holiday = await getJSON(`https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&start=${date}&end=${date}`)
                                .then(cal => cal.items[0])
        let day = '8'
        if (holiday) {
            // 'Chanukah: X Candle[s]'
            const title = holiday.title.split(' ')
            if (title[0] === 'Chanukah:') day = title[1]
        }
        url += '?day=' + day

        // Set iFrame source
        model.src = url
        showModel.show()
    } else model.hide()
})
showModel.onClick(() => img.hide())

// Share button URLs
const pageUrl = wixLocation.url
$ml.vector('#share-fb').link = 'https://www.facebook.com/sharer.php?u=' + pageUrl
$ml.vector('#share-in').link = 'https://www.linkedin.com/shareArticle?url=' + pageUrl
$ml.vector('#share-wa').link = 'https://api.whatsapp.com/send?text=' + pageUrl
$ml.vector('#share-x').link = 'https://x.com/intent/tweet?url=' + pageUrl
