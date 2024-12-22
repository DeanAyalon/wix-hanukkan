import wixData from 'wix-data'
import collections from 'public/collections'
/** @typedef {import('public/collections').Hanukkia} Hanukkia */

export async function praise(hanukkiaID) {
    /** @type {Hanukkia} */ 
    const hanukkia = await wixData.get(collections.hanukkiot, hanukkiaID)
    if (!hanukkia) throw 'Hanukkia not found'
    hanukkia.praise++
    await wixData.update(collections.hanukkiot, hanukkia)
    return hanukkia.praise
}