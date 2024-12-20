import { webMethod, Permissions } from 'wix-web-module'
import wixData from 'wix-data'

export const praise = webMethod(Permissions.Anyone, async hanukkiaID => {
    const hanukkia = await wixData.get('Hanukkiot', hanukkiaID)
    return hanukkia
})
