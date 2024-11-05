const config = require('../config');
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const getFBInfo = require("@xaviabot/fb-downloader")

var needus = "🚩*Please Give Me Facebook URL !!*" 
var cantf = "🚩 *I Can't Find This Video!*" 
cmd({
    pattern: "fb2",
    alias: ["facebook2"],
    react: '💫',
    desc: "Download facebook videos.",
    category: "download",
    use: '.fb <facebook url>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(needus)
let response = await fetchJson('https://fbdlayodya-api.vercel.app/api/downloads/facebook?url='+q)
const buff = response.result.video_hd || response.result.video_sd
let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
await conn.sendMessage(from, { video: { url: buff }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cantf)
console.log(e)
}
})

