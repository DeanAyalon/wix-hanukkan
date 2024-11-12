// These functions provide type-accurate element selectors for:
// - Fixing wrong @wix/cli type generations
// - Using dynamic element tags rather than hardcoded strings
// - Using multiple concatinated selectors

/** Alternate $w selector, each property selects predefined element types: 
 * - Allows any string (For calculations and multi-tag selection)
 * - Fixes some @wix/cli type generations */
export default {
    /** Selects a collapsable element
     * @param {string} tag 
     * @returns {$w.CollapsedMixin} */
    collapsable: tag => $w(tag),

    /** Selects an Image element
     * @param {string} tag 
     * @returns {$w.Image} */
    image: tag => $w(tag),
    
    /** Selects a vector image element
     * @param {string} tag 
     * @returns {$w.VectorImage} */
    vector: tag => $w(tag),

    /** Selects an HtmlComponent element
     * @param {string} tag 
     * @returns {$w.HtmlComponent} */
    html: tag => $w(tag),

    /** Selects a DynamicDataset 
     * @fixes Wix CLI incorrectly returns $w.AppController
     * @param {string} tag 
     * @returns {$w.router_dataset} wixData.dynamicDataset */
    dynamicDataset: tag => $w(tag),
}
