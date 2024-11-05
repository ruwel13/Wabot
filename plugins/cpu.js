const config = require('../config')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "system",
    react: "🌠",
    alias: ["os","cpu"],
    desc: "Check bot\'s system info",
    category: "main",
    use: '.system',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  let totalStorage = Math.floor(os.totalmem() / 1024 / 1024) + 'MB'
  let freeStorage = Math.floor(os.freemem() / 1024 / 1024) + 'MB'
  let cpuModel = os.cpus()[0].model
  let cpuSpeed = os.cpus()[0].speed / 1000
  let cpuCount = os.cpus().length
  let wm = `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`

  let mes = `ＳＹＳＴＥＭ ＩＮＦＯＲＭＡＴＩＯＮ

> ᴛᴏᴛᴀʟ ʀᴀᴍ : ${totalStorage}
> ꜰʀᴇᴇ ʀᴀᴍ : ${freeStorage}
> ᴄᴘᴜ ᴍᴏᴅᴇʟ : ${cpuModel}
> ᴄᴘᴜ ꜱᴘᴇᴇᴅ : ${cpuSpeed} GHz
> ɴᴜᴍʙᴇʀ ᴏꜰ ᴄᴘᴜ ᴄᴏʀᴇꜱ : ${cpuCount}

${wm}`

conn.sendMessage(from , { text: mes }, { quoted: mek } )
} catch (e) {
reply('*Error !*')
console.log(e)
}
})
