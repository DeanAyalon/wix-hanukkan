// Handles RTL support
import { multilingual } from "wix-window-frontend";

/** Expand RTL and collapse LTR versions of the given elements according to current language
 * @example `#tag` / `#tag-rtl`
 * 
 * @param elements `string[]` element tags (without '#' prefix)
 * 
 * @returns (boolean) true if expanded RTL elements
 */
export function expand(...elements) {
    if (multilingual.currentLanguage === 'he') {
        for (const element of elements) {
            console.log('Expanding RTL', element);
            $w('#' + element).collapse()
            $w(`#${element}-rtl`).expand()
        }
        return true;
    }
}