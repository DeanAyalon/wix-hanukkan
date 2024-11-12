// @ts-nocheck

// These functions provide type-accurate element selectors for:
// - Fixing wrong @wix/cli type generations
// - Using dynamic element tags rather than hardcoded strings
// - Using multiple concatinated selectors

export default {
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
}