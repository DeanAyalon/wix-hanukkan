// Handles RTL support
import { multilingual } from 'wix-window-frontend'

import _w from './selector'

const rtl = multilingual.currentLanguage === 'he'
let ext = rtl ? '-rtl' : '' // Tag extension for RTL elements

/** Multilingual selector, works like _w
 * adds '-rtl' to the element tag if site language is written in RTL */
export default {
    image: tag => _w.image(tag + ext),
    vector: tag => _w.vector(tag + ext),
    html: tag => _w.html(tag + ext),
}

/** Expand RTL and collapse LTR versions of the given elements according to current language
 * @param {...string} elements Element tags (without '#' prefix) */
export function expand(...elements) {
    for (const element of elements) $w('#' + element + ext).expand()
}