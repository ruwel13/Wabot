const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const fetch = require('node-fetch')

//========================
cmd({
    pattern: "waifudiff",
    alias: ["diff"],
    use: '.waifudiff <url>',
    react: "🍟",
    desc: "bbbb.",
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
//if (!isMe) return await reply('🚩 You are not a premium user\nbuy via message to owner!!')
if (!q) return reply('🚩 *Please Give Me Words To Search*')
let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
var res = await fetchJson('https://api.neoxr.eu/api/waifudiff?q=' + q)
await conn.sendMessage(from, { image: { url: res.data }, caption: wm }, { quoted: mek })
} catch (e) {
    console.log(e)
  await conn.sendMessage(from, { text: '🚩 *Error !*' }, { quoted: mek } )
}
})
