import wixData from 'wix-data'
import collections from 'public/collections'

export function Import800_afterInsert(item) {
    wixData.insert(collections.hanukkiotData, { hanukkia: item._id, praise: 0 })
    return item
}