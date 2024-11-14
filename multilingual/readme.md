# Advanced multilingual support
Wix allows sites to translate their elements into multiple languages, but those elements' styling cannot be language-dynamic.<nt>
This is problematic for languages that write from right to left, as the writing direction is part of the styling.

## Abilities
This script gives control over rendering of elements according to site language direction, which allows:
- Different text styles, as inherently those are different objects
- Different layout orientations - Design your elements to fir the language, for example, have your logo appear on the right for RTL languages

## Usage
There are two files in this module: `typed.js` and `native.js`.
The typed file depends on the [selector](../selector/readme.md) module, and uses `_w` for selection with better type support.
The native version uses the `$w` selector and does not require additional modules.

### Expand
For each element that cannot be translated properly using the native Wix Multilingual support:
- Create LTR and RTL versions tagged: `#element` and `#element-rtl`
- Call the expand function with the element tags: `expand('element')`
The function will expand the correct tag depending on the site langauge

Example:
```js
import { expand } from 'public/multilingual' // OR 'public/multilingual/native'
expand('multilingualSection', 'anotherMultilingualSection', 'multilingualElement')
// If the site is in LTR mode, these elements will be expanded:
    // #multilingualSection, #anotherMultilingualSection, #multilingualElement

// If the site is in RTL mode, these elements will be expanded:
    // #multilingualSection-rtl, #anotherMultilingualSection-rtl, #multilingualElement-rtl
```

### Selector
The selector function allows you to select the correct element depending on the site langauge<bt>

```js
import $ml from 'public/multilingual'
$ml.image('#someImage').src = ...       // Uses _w.image (tag: string)
// OR
import $ml from 'public/multilingual/native'
$ml('#someImage').src = ...             // Uses native $w (tag: WixElementSelector)

// Returns the element #someImage or #someImage-rtl depending on the site langauge
```
