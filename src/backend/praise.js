import wixData from 'wix-data'
import collections from 'public/collections'
/** @typedef {import('public/collections').HanukkiaData} HanukkiaData */

export async function praise(hanukkiaDataID) {
    /** @type {HanukkiaData} */ 
    const data = await wixData.get(collections.hanukkiotData, hanukkiaDataID)
    if (!data) throw 'Hanukkia not found'
    data.praise++
    await wixData.update(collections.hanukkiotData, data, { suppressAuth: true })
    return data.praise
}

// Single time - create data records for existing Hanukkiot
// export async function createData() {
//     /** @type {import('public/collections').Hanukkia[]} */
//     const hanukkiot = await wixData.query(collections.hanukkiot).find().then(res => res.items)
//     for (const hanukkia of hanukkiot) wixData.insert(collections.hanukkiotData, { hanukkia: hanukkia._id, praise: 0 })
// }