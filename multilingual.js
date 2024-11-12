// Handles RTL support
import { multilingual } from "wix-window-frontend";

import _w from './selector'

let ext = '' // Tag extension for RTL elements

/** Expand RTL and collapse LTR versions of the given elements according to current language
 * @param {...string} elements Element tags (without '#' prefix) */
export function expand(...elements) {
    if (multilingual.currentLanguage === 'he') {
        // Expand tags
        for (const element of elements) {
            $w('#' + element).collapse()
            $w(`#${element}-rtl`).expand()
        }
        // Set tag extension
        ext = '-rtl'
    }
}

/** Multilingual selector, works like $w
 * adds '-rtl' to the element tag if site language is written in RTL
 * @requires expand() */
export default {
    image: tag => _w.image(tag + ext),
    vector: tag => _w.vector(tag + ext),
    html: tag => _w.html(tag + ext),
}