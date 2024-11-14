# Advanced multilingual support
Wix allows sites to translate their elements into multiple languages, but those elements' styling cannot be language-dynamic.<nt>
This is problematic for languages that write from right to left, as the writing direction is part of the styling.

## Abilities
This script gives control over rendering of elements according to site language direction, which allows:
- Different text styles, as inherently those are different objects
- Different layout orientations - Design your elements to fir the language, for example, have your logo appear on the right for RTL languages

## Usage
### Expand
For each element that cannot be translated properly using the native Wix Multilingual support:
- Create LTR and RTL versions tagged: `#element` and `#element-rtl`
- Call the expand function with the element tags: `expand('element')`
The function will expand the correct tag depending on the site langauge

Example:
```js
import { expand } from 'public/multilingual'
expand('multilingualSection', 'anotherMultilingualSection', 'multilingualElement')
// If the site is in LTR mode, these elements will be expanded:
    // #multilingualSection, #anotherMultilingualSection, #multilingualElement

// If the site is in RTL mode, these elements will be expanded:
    // #multilingualSection-rtl, #anotherMultilingualSection-rtl, #multilingualElement-rtl
```

### Selector
The selector function allows you to select the correct element depending on the site langauge<bt>
This function uses _w from the [selector](../selector/readme.md) module, for better type support, but has a counterpart using native `$w` instead

```js
import $ml from 'public/multilingual'
$ml('#someImage').src = ...             // Uses native $w (tag: WixElementSelector)
// OR
import _ml from 'public/multilingual'
_ml.image('#someImage').src = ...       // Uses _w.image (tag: string)

// Returns the element #someImage or #someImage-rtl depending on the site langauge
```
