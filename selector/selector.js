function select(tag, expectedType) {
    const selection = $w(tag)
    if (Array.isArray(selection)) {
        if (!selection.length) throw tag + ' does not exist'
        for (const element of selection) checkType(element, expectedType)
    } else checkType(selection, expectedType)
    return selection
}
const checkType = (element, expectedType) =>
    element.type !== expectedType && console.error(`${element.id} is not a ${expectedType}`)

/** Alternate $w selector, each property selects predefined element types: 
 * - Allows any string (For calculations and multi-tag selection)
 * - Fixes some @wix/cli type generations */
export default {
    /** Selects a collapsable element
     * @param {string} tag 
     * @returns {$w.CollapsedMixin} 
     * @warn Does not check whethwer the returned elements are indeed collapsible */
    collapsable: tag => $w(tag),

    /** Selects an Image element
     * @param {string} tag 
     * @returns {$w.Image} */
    image: tag => select(tag, '$w.Image'),

    /** Selects a vector image element
     * @param {string} tag 
     * @returns {$w.VectorImage} */
    vector: tag => select(tag, '$w.VectorImage'),

    /** Selects an HtmlComponent element
     * @param {string} tag 
     * @returns {$w.HtmlComponent} */
    html: tag => select(tag, '$w.HtmlComponent'),

    /** Selects a DynamicDataset 
     * @fixes Wix CLI incorrectly returns $w.AppController
     * @param {string} tag 
     * @returns {$w.router_dataset} wixData.dynamicDataset */
    dynamicDataset: tag => select(tag, 'router_dataset'),
}
