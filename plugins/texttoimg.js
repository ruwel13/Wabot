const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var desct = "It Convert Given Text To AI Image."
var imgmsg = "*Example: .imagine woman,hair cut collor red,full body,bokeh*"
var cantf = "*Server Is Busy. Try Again Later.!*"
let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
cmd({
    pattern: "texttoimgv1",
    alias: ["texttoimagev1","toimagev1","t2iv1"],
    react: '🤖',
    desc: desct,
    dontAddCommandList: true,
    use: '.imagine  woman,hair cut collor red,full body,bokeh',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let res = await fetchJson('https://hercai.onrender.com/v3/text2image?prompt='+q)
conn.sendMessage(from, { image: { url: res.url }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "prodia",
    alias: ["texttoimage4","toimage4","t2i4"],
    react: '🤖',
    desc: desct,
    dontAddCommandList: true,
    use: '.prodia  woman,hair cut collor red,full body,bokeh',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let res = await fetchJson('https://hercai.onrender.com/prodia/text2image?prompt='+q)
conn.sendMessage(from, { image: { url: res.url }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "texttoimg2",
    alias: ["texttoimage2","toimage2","t2i2"],
    react: '🤖',
    desc: desct,
    dontAddCommandList: true,
    use: '.texttoimg2  woman,hair cut collor red,full body,bokeh',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let res = await fetchJson('https://hercai.onrender.com/v2/text2image?prompt='+q)
conn.sendMessage(from, { image: { url: res.url }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "texttoimg3",
    alias: ["texttoimage3","toimage3","t2i3"],
    react: '🤖',
    desc: desct,
    dontAddCommandList: true,
    use: '.texttoimg3  woman,hair cut collor red,full body,bokeh',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(imgmsg)
let res = await fetchJson('https://hercai.onrender.com/v1/text2image?prompt='+q)
conn.sendMessage(from, { image: { url: res.url }, caption: wm }, { quoted: mek })
} catch (e) {
reply(cantf)
l(e)
}
})

cmd({
    pattern: "aemtv1",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/v1/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv2",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/v2/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv3",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/v3/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv4",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/v4/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv5",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/v5/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})

cmd({
    pattern: "aemtv6",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/v6/text2img?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})
//=====================================dalle e========================
cmd({
    pattern: "aemtv6",
    react: "💫",
    desc: "It gives phone size screenshot of given url.",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("🚩 *Please Give Me A URL !*")
await conn.sendMessage(from, { image: { url: `https://widipe.com/dalle?text=${q}` }, caption: wm }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply("🚩 *I Can't Get A ScreenShot. Try Again Later.*")
console.log(e)
}
})


//================================================================================================================================================

cmd({
  pattern: "texttoimage",
  react: "🗃️",
  alias: ["t2i","texttoimg","text2img"],
  desc: "Get bot\'s command list.",
  category: "ai",
  use: '.texttoimage',
  filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
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
                     title: 'TextToImage V1',
                     // description: `X`,
                     id: ".aemtv1 " + q
                  }, {
                     title: 'TextToImage V2',
                     // description: `X`,
                     id: ".aemtv2 " + q
                  }, {
                     title: 'TextToImage V3',
                     // description: `X`,
                     id: ".aemtv3 " + q
                  }, {
                     title: 'TextToImage V4',
                     // description: `X`,
                     id: ".aemtv4 " + q
                  }, {
                     title: 'TextToImage V5',
                     // description: `X`,
                     id: ".aemtv5 " + q
                  }, {
                     title: 'TextToImage V6',
                     // description: `X`,
                     id: ".aemtv6 " + q
                  }, {
                     title: 'TextToImage V1 Hercai',
                     // description: `X`,
                     id: ".texttoimgv1" + q
                  }, {
                     title: 'TextToOmage V2 Heracai',
                     // description: `Y`,
                     id: ".texttoimg2" + q
                  }, {
                     title: 'TextToImage V3 Hercai',
                     // description: `Y`,
                     id: ".texttoimg3" + q
                  }, {
                     title: 'Prodia Hercai',
                     // description: `Y`,
                     id: ".prodia " + q
                  }]
               }]
            })
         }]
let msg = ` TexttoImage generater`

let message = {
                    image: `https://static-cse.canva.com/blob/959702/ArticleThumbnailsTexttoImage.png`,
                    header: '.',
                    footer: wm,
                    body: msg

                }
return conn.sendButtonMessage(from, buttons, m, message)
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})
