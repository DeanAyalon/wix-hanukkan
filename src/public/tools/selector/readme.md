# _w - An alternative to $w
When using an IDE rather than the Wix Editor, one may notice a few errors when trying to implement certain things using `$w`, such as:
- Types are generated incorrectly in `wix sync-types`:
  ```js
  $w('#dataset') // Recognized as $w.AppController instead of $w.dataset (wixData.dataset)
  $w('#dynamicDataset') // Recognized as $w.AppController instead of $w.router_dataset (wixData.dynamicDataset)
  $w('#gallery') // Recognized as $w.iFrame instead of $w.Gallery
  ```
- Multi-tag selections are not supported:
  ```js
  $w('#element1, #element2, Button') // Should select all buttons, as well as #element1 and #element2
  // Fails in the IDE, as WixElementSelector only includes individual tags
  // Error: type 'string' does not match type 'WixElementSelector'!
  ```

- Dynamic selections using a calculated string:
```js
// Assume there are two elements: #element1 and #element2
const num = someSelection() // Should be set to 1 or 2
$w('#element' + num)
// Error: type 'string' does not match type 'WixElementSelector'!
```

# Usage
Simply use the appropriate selector method to choose your data type
```js
import _w from 'public/selector'
_w.dataset('#dataset') // Will correctly return $w.dataset
_w.button('#button1, #button2') // Will accept the custom string and return $w.Button representing both buttons
```
