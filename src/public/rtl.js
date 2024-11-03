// Handles RTL support
import { multilingual } from "wix-window-frontend";

/** Expand RTL and collapse LTR versions of the given elements
 * @example `#tag` / `#tag-rtl`
 * 
 * @param elements `string[]` element tags (without '#' prefix)
 */
export function expand(...elements) {
    if (multilingual.currentLanguage === 'he') 
        for (const element of elements) {
            console.log('Expanding RTL', element);
            $w('#' + element).collapse()
            $w(`#${element}-rtl`).expand()
        }
}