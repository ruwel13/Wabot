const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { fbdl } = require('ruhend-scraper');
var needus = "🚩*Please Give Me FB URL !*" 
var cantf = "🚩 *I Can't Find This Video!*" 
const axios = require('axios');
const cheerio = require('cheerio');
const { fbdown } = require('../lib/fbdl')
cmd({
    pattern: "fb",
    alias: ["facebook"],
    react: '💫',
    desc: "Download fb videos",
    category: "download",
    use: '.fb <facebook video link>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(needus)
let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
        let text = q
        let status, result;
        ({ status, result } = await fbdown.V2(text));

        if (!status) {
            ({ status, result } = await fbdown.V3(text));
        }

        if (!status) {
            ({ status, result } = await fbdown.V1(text));
        }

        if (!status) {
            return await reply('*Please check the url and try again*');
        }

        const filteredMedia = result.media.filter(m => (m?.quality || '').includes('HD'));

        for (const media of filteredMedia) {
            if ((media?.quality || '').includes('HD')) {
            }
            //await msg.reply(`🍟 *Scraping* · ${(end - start).toFixed(2)} ms`, { media: media.url });
            await conn.sendMessage(from, { video: { url: media.url }, caption: wm}, { quoted: mek })
        }

} catch (e) {

console.log(e)
}
})
