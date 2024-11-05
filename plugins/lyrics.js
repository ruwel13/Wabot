const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { lyrics, lyricsv2 } = require('@bochilteam/scraper');

var tmsg =''
if(config.LANG === 'SI') tmsg = '*කරුණාකර මට ගීතයක නමක් දෙන්න. !*'
else tmsg = "*Please Give Me A Song Name. !*"
var descg = ''
if(config.LANG === 'SI') descg = "එය ලබා දී ඇති සංගීතයේ lyrics දෙයි."
else descg = "It Gives Lyrics Of Given Song Name."
var cantscg = ''
if(config.LANG === 'SI') cantscg = "*මට මේ ගීතයේ lyrics සොයාගත නොහැක !*"
else cantscg = "*I Can't Find Lyrics Of This Song !*"

cmd({
    pattern: "lyrics",
    alias: ["lyric"],
    react: '🎙️',
    desc: descg,
    category: "search",
    use: '.lyric <song name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(tmsg)
const result = await fetchJson('https://api.sdbots.tech/lyrics?song=' + q)
if(result.lyrics) reply(`
*LYRICS SEARCH*
   
*${result.title}*
_${result.artist}_


${result.lyrics}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`)
else reply(cantscg)
} catch (e) {
reply(cantscg)
l(e)
}
})
