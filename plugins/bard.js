const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var desct = "It Search On Bard Ai For What You Provided."
var needus = "*Please Give Me Words To Search On Bard AI !*" 
var cantf = "*Server Is Busy. Try Again Later.!*"


cmd({
    pattern: "bard",
    alias: ["bardai","gbard","googlebard","googleai","ai2"],
    react: '👾',
    desc: desct,
    category: "ai",
    use: '.bard <query>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(needus)
const dataget = await fetchJson('https://widipe.com/bard?text=' + q)
return await reply(dataget.result)
} catch (e) {
try{
    const dataget = await fetchJson('https://api.akuari.my.id/ai/gbard?chat=' + q)
return await reply(dataget.respon)
} catch (e) {
reply(cantf)
l(e)
}
}
})


