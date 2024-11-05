const config = require('../config')
const {
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
  } = require('@whiskeysockets/baileys')
const path = require('path');
const fs = require('fs')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, Func, fetchJson} = require('../lib/functions')
var cap = 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®'
let wm = '> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®'
let script = `ᴇᴠᴇɴ ɪꜰ ʏᴏᴜ ꜱᴇɴᴛ ᴀ ᴍᴇꜱꜱᴀɢᴇ, ʏᴏᴜ ᴅᴏɴ'ᴛ ɢɪᴠᴇ ᴛʜᴇ ꜱᴄʀɪᴘᴛ.😅`

cmd({
    pattern: "sc",
    react: "💸",
    alias: ["scrot"],
    desc: "Check bot is alive or die",
    category: "main",
    use: '.sc',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{  
        if (os.hostname().length == 12) hostname = 'replit'
        else if (os.hostname().length == 36) hostname = 'heroku'
        else if (os.hostname().length == 8) hostname = 'koyeb'
        else hostname = os.hostname()
        let monspace = '```'
        
            const msg = `👋 Hey, ${pushname},

ꜱᴏʀʀʏ! ᴛʜᴇ ꜱᴄʀɪᴘᴛ ᴏꜰ ᴛʜᴇ ᴅᴇɴᴇᴛʜ-ᴍᴅ ʙᴏᴛ ᴡɪʟʟ ɴᴏᴛ ʙᴇ ɢɪᴠᴇɴ. ɪꜰ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴛᴀᴋᴇ ɪᴛ, ꜱᴇɴᴅ ᴀ ᴍᴇꜱꜱᴀɢᴇ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴏꜰ ᴛʜᴇ ᴅᴇɴᴇᴛʜ-ᴍᴅ ʙᴏᴛ.

*Owner Number*
+94761864425

ᴛᴏ ᴋɴᴏᴡ.
${script}

${wm} 
`
            
            
             await conn.relayMessage(from, {
          requestPaymentMessage: {
            currencyCodeIso4217: "IDR",
            amount1000: 99999999,
            requestFrom: "0@s.whatsapp.net",
            noteMessage: {
              extendedTextMessage: {
                text: msg,
                contextInfo: {
                  mentionedJid: [m.sender],
                  externalAdReply: {
                    showAdAttribution: true
                  }
                }
              }
            }
          }
        }, {});

} catch (e) {
reply('*Error !*')
console.log(e)
}
})
