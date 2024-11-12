// These functions provide type-accurate element selectors for:
// - Fixing wrong @wix/cli type generations
// - Using dynamic element tags rather than hardcoded strings
// - Using multiple concatinated selectors

/** Alternate $w selector, each property selects predefined element types: 
 * - Allows any string (For calculations and multi-tag selection)
 * - Fixes some @wix/cli type generations 
 *  @type {{ [prop: string]: (tag: string) => any }}
 * */
export default {
    /** @returns {$w.CollapsedMixin} */    
    collapsable: tag => $w(tag),

    /** @returns {$w.Image} */
    image: tag => $w(tag),
    
    /** @returns {$w.VectorImage} */
    vector: tag => $w(tag),

    /** @returns {$w.HtmlComponent} */
    html: tag => $w(tag),

    /** Selects a DynamicDataset 
     * @fixes Wix CLI incorrectly returns $w.AppController
     * @returns {$w.router_dataset} wixData.dynamicDataset */
    dynamicDataset: tag => $w(tag),
}
