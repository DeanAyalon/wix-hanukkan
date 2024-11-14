// Handles RTL support
import { multilingual } from 'wix-window-frontend'

export const rtl = multilingual.currentLanguage === 'he'    // Is the site in RTL mode
const rtlExtension = '-rtl',                                // Tag extension for RTL elements
    ext = rtl ? rtlExtension : ''                           // Active tag extension

export default tag => $w(tag + ext)

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