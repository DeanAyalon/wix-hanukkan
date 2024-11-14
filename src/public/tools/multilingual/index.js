// Handles RTL support
import { multilingual } from 'wix-window-frontend'

import _w from '../selector'

// Determine site layout direction
export const rtl = multilingual.currentLanguage === 'he'    // Is the site in RTL mode
const rtlExtension = '-rtl',                                // Tag extension for RTL elements
    ext = rtl ? rtlExtension : ''                           // Active tag extension

/** Multilingual selector, works like _w
 * adds '-rtl' to the element tag if site language is written in RTL */
export default {
    image: tag => _w.image(tag + ext),
    vector: tag => _w.vector(tag + ext),
    html: tag => _w.html(tag + ext),
}

/** Expand specified multilingual elements according to layout direction
 * @param {...string} elements Element tags (without '#' prefix) */
export function expand(...elements) {
    for (const element of elements) {
        // Collapse all multilingual elements, as the page does not reload when language is changed
        _w.collapsable(`#${element}, #${element + rtlExtension}`).collapse()
        // Expand elements according to layout direction
        _w.collapsable('#' + element + ext).expand()
    }
}