const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const apkdl = require('../lib/apkdl')
const ufs = require('../lib/ufs');
let newsize = config.MAX_SIZE * 1024 * 1024
let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`

var N_FOUND = "🚩 *I Couldn't Find Anything :(*"
var urlneed = "🚩 *It Downloads Apps From Playstore.*"
var imgmsg = "🚩 ``*Please Write A Few Words*"

cmd({
    pattern: "apk",
    react: "🍟",
    alias: ["app","playstore"],
    desc: urlneed,
    category: "download",
    use: '.apk whatsapp',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await conn.sendMessage(from , { text: imgmsg }, { quoted: mek } )        
const data2 = await apkdl.search(q)
const data = data2
let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
const msg = `A P K - D O W N L O A D E R `
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var sections = []
        data.map((v) => {
          sections.push({
            rows: [{
              title: `${v.name}`,
              description: `ID : ${v.id}`,
              id: `.dapk ${v.id}`
            }]
          })
        })
        const buttons = [{
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Tap Here!',
            sections
          })
        }]
        let message = {
            image: `https://1.bp.blogspot.com/-5liR_8xh5ew/XCxhELWkFSI/AAAAAAAAACA/tKlgB6y8O94Lw-rpeDkejxpw39BLgqSfQCLcBGAs/s640/aptoide-apk.png`,
            header: '',
            footer: wm,
            body: msg
        }
return conn.sendButtonMessage(from, buttons, m, message) 
} catch (e) {
  reply('*ERROR !!*')
  console.log(e)
}
})

cmd({
    pattern: "dapk",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '🌟', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '🚩 *Need Apk Link...*' }, { quoted: mek } ) 
const data = await apkdl.download(q)
let listdata = `ＡＰＫ ＤＯＷＮＬＯＡＤＥＲ\n
• *Name :* ${data.name}
• *Developer :* ${data.package}
• *Last update :* ${data.lastup}
• *Size :* ${data.size}`
await conn.sendMessage(from, { image: { url: data.icon }, caption: listdata }, { quoted: mek })
let sizeb = await ufs(data.dllink);
if (sizeb > newsize) return await conn.sendMessage(from , { text: '*File size is too big...*' }, { quoted: mek } )
let sendapk = await conn.sendMessage(from , { document : { url : data.dllink  } , mimetype : 'application/vnd.android.package-archive' , fileName : data.name + '.' + 'apk',caption: '' } , { quoted: mek })
//await conn.sendMessage(from, { react: { text: ', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
  console.log(e)
   reply(`_An Error Found_ ⚒️ : *${e}*`)
}
})
