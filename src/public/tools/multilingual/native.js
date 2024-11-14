// Handles RTL support
import { multilingual } from 'wix-window-frontend'

// Determine site layout direction
export const rtl = multilingual.currentLanguage === 'he'    // Is the site in RTL mode
const rtlExtension = '-rtl',                                // Tag extension for RTL elements
    ext = rtl ? rtlExtension : ''                           // Active tag extension

/** Multilingual selector, works like _w
 * adds '-rtl' to the element tag if site language is written in RTL */
export default {
    image: tag => $w(tag + ext),
    vector: tag => $w(tag + ext),
    html: tag => $w(tag + ext),
}

/** Expand specified multilingual elements according to layout direction
 * @param {...string} elements Element tags (without '#' prefix) */
export function expand(...elements) {
    for (const element of elements) {
        // Collapse all multilingual elements, as the page does not reload when language is changed
        $w(`#${element}, #${element + rtlExtension}`).collapse()
        // Expand elements according to layout direction
        $w('#' + element + ext).expand()
    }
}