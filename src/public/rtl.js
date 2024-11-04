// Handles RTL support
import { multilingual } from "wix-window-frontend";

/** Expand RTL and collapse LTR versions of the given elements according to current language
 * 
 * @param {...string} elements Element tags (without '#' prefix)
 * @returns {boolean} Site in RTL mode
 */
export function expand(...elements) {
    if (multilingual.currentLanguage === 'he') {
        for (const element of elements) {
            $w('#' + element).collapse()
            $w(`#${element}-rtl`).expand()
        }
        return true;
    }
}