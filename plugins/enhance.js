const { cmd, commands } = require('../command');
let { img2url } = require('@blackamda/telegram-image-url');
const { getRandom, fetchJson } = require('../lib/functions');
const fs = require('fs');
const config = require('../config')

var desct = "It Converts Given Low Quality Image To Quality Image.."
var imgmsg = "*Reply To A Photo !*"
var cantf = "*Server Is Busy. Try Again Later.!*"


cmd({
    pattern: "modelx2",
    react: "↗️",
    desc: desct,
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
 let res = await fetchJson(`https://itzpire.com/tools/enhance?url=${q}&type=modelx2`)
await conn.sendFileUrl(from, res.result.img, wm, mek )

} catch (e) {
  reply(cantf);
  console.log(e);
}
})




cmd({
    pattern: "modelx225",
    react: "↗️",
    desc: desct,
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
 let res = await fetchJson(`https://itzpire.com/tools/enhance?url=${q}&type=modelx2%2025%20JXL`)
await conn.sendFileUrl(from, res.result.img, wm, mek )
} catch (e) {
  reply(cantf);
  console.log(e);
}
})



cmd({
    pattern: "modelx4",
    react: "↗️",
    desc: desct,
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
 let res = await fetchJson(`https://itzpire.com/tools/enhance?url=${q}&type=modelx2`)
await conn.sendFileUrl(from, res.result.img, wm, mek )} catch (e) {
  reply(cantf);
  console.log(e);
}
})




cmd({
    pattern: "minecraft_modelx4",
    react: "↗️",
    desc: desct,
    dontAddCommandList: true,
    use: '.enhance <reply low quality image>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
 let res = await fetchJson(`https://itzpire.com/tools/enhance?url=${q}&type=minecraft_modelx4`)
await conn.sendFileUrl(from, res.result.img, wm, mek )} catch (e) {
  reply(cantf);
  console.log(e);
}
})

cmd({
  pattern: "hd",
  react: "🗃️",
  alias: ["beautify","hdr"],
  desc: "Get bot\'s command list.",
  category: "convert",
  use: '.hd <reply low quality image>',
  filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    if ((m.type === 'imageMessage') || isQuotedImage) {
const fileType = require("file-type");
  var nameJpg = getRandom('');
  let buff = isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
  let type = await fileType.fromBuffer(buff);
  await fs.promises.writeFile("./" + type.ext, buff);
  img2url("./" + type.ext).then(async url => {
let monspace ='```'
                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Follow Our Channel',
                        url: `https://whatsapp.com/channel/0029Vamo0kT2ER6qNXgykO0B`,
                        merchant_url: `https://whatsapp.com/channel/0029Vamo0kT2ER6qNXgykO0B`
                    }),
                },
                { name: 'single_select',
            buttonParamsJson: JSON.stringify({
               title: 'Tap Here!',
               sections: [{
                  rows: [{
                     title: 'Model X2',
                     // description: `X`,
                     id: ".modelx2 " + url
                  }, {
                     title: 'Model X2 25 JXL',
                     // description: `X`,
                     id: ".modelx225 " + url
                  }, {
                     title: 'Model X4',
                     // description: `X`,
                     id: ".modelx4 " + url
                  }, {
                     title: 'Minecraft ModelX4',
                     // description: `Y`,
                     id: ".minecraft_modelx4 " + url
                  }]
               }]
            })
         }]
let msg = `Image Enchancer`

let message = {
                    image: `https://lsds.hesge.ch/wp-content/uploads/2017/05/thumbnail_logo_bluebox_EnhanceR.jpg-640x276.png`,
                    header: '',
                    footer: wm,
                    body: msg

                }
return conn.sendButtonMessage(from, buttons, m, message)
});
    } else return reply(imgmsg)
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})
