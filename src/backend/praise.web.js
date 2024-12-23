import { webMethod, Permissions } from 'wix-web-module'
import wixData from 'wix-data'

import collections from 'public/collections'

export const praise = webMethod(Permissions.Anyone, async hanukkiaID => {
    const hanukkia = await wixData.get(collections.hanukkiot, hanukkiaID)
    if (!hanukkia) throw 'Hanukkia not found'
    hanukkia.praise++
    await wixData.update(collections.hanukkiot, hanukkia)
    return hanukkia.praise
})
