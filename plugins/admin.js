
const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "mute",
    react: "🔇",
    alias: ["close","mute_cyber"],
    desc: "Change to group settings to only admins can send messages.",
    category: "group",
    use: '.mute',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) return reply('🚫 *This is Group Command*')
if (!isBotAdmins) return reply('🚫 *Bot Must Be Admin First*')
if (!isAdmins) { if (!isDev) return reply('🚫 *You Must Be Admin First*') }
await conn.groupSettingUpdate(from, 'announcement')
 await conn.sendMessage(from , { text: `🔇 *Group Chat Closed By Admin ${pushname}*` }, { quoted: mek } )
} catch (e) {
reply('*Error !*')
console.log(e)
}
})

cmd({
    pattern: "unmute",
    react: "🔊",
    alias: ["open","unmute_cyber"],
    desc: "Change to group settings to all members can send messages.",
    category: "group",
    use: '.unmute',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) return reply('🚫 *This Is Group Command*')
if (!isBotAdmins) return reply('🚫 *Bot Must Be Admin First*')
if (!isAdmins) { if (!isDev) return reply('🚫 *You Must Be Admin First*') }
await conn.groupSettingUpdate(from, 'not_announcement')
 await conn.sendMessage(from , { text: `🔇 *Group Chat Opened By Admin ${pushname}*` }, { quoted: mek } )
} catch (e) {
reply('*Error !*')
console.log(e)
}
})

cmd({
    pattern: "lockgs",
    react: "🔒",
    alias: ["lockgsettings"],
    desc: "Change to group settings to only admins can edit group info",
    category: "group",
    use: '.lockgs',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) return reply('🚫 *This Is Group Command*')
if (!isBotAdmins) return reply('🚫 *Bot Must Be Admin First*')
if (!isAdmins) { if (!isDev) return reply('🚫 *You Must Be Admin First*') }
await conn.groupSettingUpdate(from, 'locked')
 await conn.sendMessage(from , { text: `🔒 *Group Settings Locked*` }, { quoted: mek } )
} catch (e) {
reply('*Error !*')
console.log(e)
}
})

//allow everyone to modify the group's settings -- like display picture etc.
//await sock.groupSettingUpdate("abcd-xyz@g.us", 'unlocked')

cmd({
    pattern: "unlockgs",
    react: "🔓",
    alias: ["unlockgsettings"],
    desc: "Change to group settings to all members can edit group info",
    category: "group",
    use: '.unlockgs',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) return reply('🚫 *This Is Group Command*')
if (!isBotAdmins) return reply('🚫 *Bot Must Be Admin First*')
if (!isAdmins) { if (!isDev) return reply('🚫 *You Must Be Admin First*') }
await conn.groupSettingUpdate(from, 'unlocked')
 await conn.sendMessage(from , { text: `🔓 *Group Settings Unlocked*` }, { quoted: mek } )
} catch (e) {
reply('*Error !*')
console.log(e)
}
})

cmd({
    pattern: "leave",
    react: "😪",
    alias: ["left","kickme"],
    desc: "To leave from the group",
    category: "group",
    use: '.leave',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) {return reply('🚫 *This Is Group Command*')}
if (!isMe) {return reply('🚫 *This Is Group Command*')}
 await conn.sendMessage(from , { text: `🔓 *Good Bye All*` }, { quoted: mek } )
 await conn.groupLeave(from) 
} catch (e) {
reply('*Error !*')
console.log(e)
}
})

cmd({
    pattern: "updategname",
    react: "✒",
    alias: ["upgname","gname"],
    desc: "To Change the group name",
    category: "group",
    use: '.updategname',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) return reply('🚫 *This Is Group Command*')
if (!isBotAdmins) return reply('🚫 *Bot Must Be Admin First*')
if (!isAdmins) { if (!isDev) return reply('🚫 *You Must Be Admin First*') }
if (!q) return reply("🖊️ *Please Write The New Group Subject*")
await conn.groupUpdateSubject(from, q )
 await conn.sendMessage(from , { text: `✔️ *Group Name Updated*` }, { quoted: mek } )
} catch (e) {
reply('*Error !*')
console.log(e)
}
})

cmd({
    pattern: "updategdesc",
    react: "✒",
    alias: ["upgdesc","gdesc"],
    desc: "To Change the group description",
    category: "group",
    use: '.updategdesc',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) return reply('🚫 *This Is Group Command*')
if (!isBotAdmins) return reply('🚫 *Bot Must Be Admin First*')
if (!isAdmins) {return reply('🚫 *You Must Be Admin First*') }
if (!q) return reply("🖊️ *Please Write The New Group Description*")
await conn.groupUpdateDescription(from, q )
 await conn.sendMessage(from , { text: `✔️ *Group Description Updated*` }, { quoted: mek } )
} catch (e) {
reply('*Error !*')
console.log(e)
}
})

cmd({
    pattern: "join",
    react: "🤝",
    alias: ["joinme","cyber_join"],
    desc: "To Join a Group from Invite link",
    category: "group",
    use: '.join < Group Link >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
//if (!isGroup) return reply('🚫 *This is Group command*')
if (!isCreator) { if (!isDev) return reply('🚫 *You Must Be A Moderator First*') }
if (!q) return reply("🖇️️ *Please Write The Group Link*")
 let result = args[0].split('https://chat.whatsapp.com/')[1]
 await conn.groupAcceptInvite(result)
     await conn.sendMessage(from , { text: `✔️ *Successfully Joined*`}, { quoted: mek } )
} catch (e) {
reply('*Error !*')
console.log(e)
}
})


cmd({
    pattern: "joinsup",
    react: "🙏",
    desc: "To share a group",
    use: '.joinsup',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isOwner) return await reply('🚩 *You Must Be A Bot Owner First*')
await conn.groupAcceptInvite('GC2eZuYTkMp0XR6x9NUdvl')
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
await reply('✅ *You Have Successfully Joined To Our Support Group*')
} catch (e) {
reply('🚩 *You Have Already Joined To Our Support Group*')
console.log(e)
}
}) 					


cmd({
    pattern: "invite",
    react: "✉",
    alias: ["grouplink","glink"],
    desc: "To Get the Group Invite link",
    category: "group",
    use: '.invite',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) return reply('🚫 *This Is Group Command*')
if (!isBotAdmins) return reply('🚫 *Bot Must Be Admin First*')
if (!isAdmins) { if (!isDev) return reply('🚫 *You Must Be Admin First*') }
const code = await conn.groupInviteCode(from)
//console.log("group code: " + code)
 await conn.sendMessage(from , { text: `🖇️ *Group Link*\n\nhttps://chat.whatsapp.com/${code}`}, { quoted: mek } )
} catch (e) {
reply('*Error !*')
console.log(e)
}
})

//await sock.groupRevokeInvite("abcd-xyz@g.us")

cmd({
    pattern: "revoke",
    react: "🗑",
    alias: ["revokegrouplink","resetglink","revokelink","cyber_revoke"],
    desc: "To Reset the group link",
    category: "group",
    use: '.revoke',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) return reply('🚫 *This Is Group Command*')
if (!isBotAdmins) return reply('🚫 *Bot Must Be Admin First*')
if (!isAdmins) { if (!isDev) return reply('🚫 *You Must Be Admin First*') }
await conn.groupRevokeInvite(from)
 await conn.sendMessage(from , { text: `⛔ *Group Link Reseted*`}, { quoted: mek } )
} catch (e) {
reply('*Error !*')
console.log(e)
}
})


cmd({
    pattern: "kick",
    react: "🦶",
    alias: ["remove"],
    desc: "To Remove a participant from Group",
    category: "group",
    use: '.kick',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
        if (!isGroup) return reply('This is Group only Command')
		if(!isAdmins) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This Is Admin Only Command*"},{quoted:mek }) }
		if(!isBotAdmins) return reply("❌ *Bot Must Be Admin First*  ❗")
		const mention = await mentionByTag
		let users = await (mention[0]) || mek.msg.contextInfo.participant
		if (!users) return reply("🚫 *Couldn't Find Any User In Context*")
			await conn.groupParticipantsUpdate(from, [users], "remove")
			await conn.sendMessage(from,{text:`*Successfully Removed*  ✔️`},{quoted:mek })
	
} catch (e) {
reply('🚫 *Error Accurated !*\n\n' + e )
console.log(e)
}
})

cmd({
    pattern: "promote",
    react: "🤞",
    alias: ["addadmin"],
    desc: "To Add a participatant as a Admin",
    category: "group",
    use: '.promote',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
        if (!isGroup) return reply('This Is Group Only Command')
		if(!isAdmins) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This Is Admin Only Command*"},{quoted:mek }) }
		if(!isBotAdmins) return reply("❓ *Bot Must Be Admin First*")
		const mention= await mentionByTag
		let users = await (mention[0]) || mek.msg.contextInfo.participant
		if (!users) return reply("🚫 *Couldn't Find Any User In Context*")
		const groupAdmins = await getGroupAdmins(participants) 
		if  ( groupAdmins.includes(users)) return reply('❗ *User Already An Admin*  ✔️')
		    await conn.groupParticipantsUpdate(from, [users], "promote")
			await conn.sendMessage(from,{text:`*User Promoted As An Admin*  ✔️`},{quoted:mek })
	
} catch (e) {
reply('🚫 *Error Accurated !*\n\n' + e )
console.log(e)
}
})

cmd({
    pattern: "demote",
    react: "🦶",
    alias: ["removeadmin"],
    desc: "To Demote Admin to Member",
    category: "group",
    use: '.demote',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
        if (!isGroup) return reply('This is Group only Command')
		if(!isAdmins) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This is admin only command*"},{quoted:mek }) }
		if(!isBotAdmins) return reply("❌  *Bot Must Be Admin First*  ❗")
		const mention= await mentionByTag
		let users = await (mention[0]) || mek.msg.contextInfo.participant
		if (!users) return reply("🚫 *Couldn't Find Any User In Context*")
		const groupAdmins = await getGroupAdmins(participants) 
		if  ( !groupAdmins.includes(users)) return reply('❗ *User Already Not An Admin*')
		    await conn.groupParticipantsUpdate(from, [users], "demote")
			await conn.sendMessage(from,{text:`*User No Longer An Admin*  ✔️`},{quoted:mek })
	
} catch (e) {
reply('🚫 *Error Accurated !*\n\n' + e )
console.log(e)
}
})

cmd({
    pattern: "tagall",
    react: "📌",
    alias: ["cyber_tagall"],
    desc: "To Tag all Members",
    category: "group",
    use: '.tagall',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
	     if (!isGroup) return reply(' ❗ *This Is Group Command*')
         	if(!isAdmins) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This Is Admin Only Command*"},{quoted:mek }) }
		if(!isBotAdmins) return reply("❓ *Bot Must Be Admin First*")
		let teks = `*HI ALL👋 GIVE YOUR ATTENTION PLEASE🙏* 
 
`
                for (let mem of participants) {
                teks += `🥎 @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: mek })
                
} catch (e) {
reply('🚫 *Error Accurated !*\n\n' + e )
console.log(e)
}
})

cmd({
    pattern: "tag",
    react: "📌",
    alias: ["tg"],
    desc: "To Tag all Members for Message",
    category: "group",
    use: '.tag Hi',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
	     if (!isGroup) return reply(' ❗ *This Is Group Command*')
         	if(!isAdmins) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This Is Admin Only Command*"},{quoted:mek }) }
		if(!isBotAdmins) return reply("❓ *Bot Must Be Admin First*")
		if(!q && !m.quoted ) return reply('ℹ️ *Please Add A Message Or Quote A Text*')
		if (!q) {
		let teks = `${m.quoted.msg}`
                return conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) } )
		}
		let teks = `${q}`
                conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) } )
                
} catch (e) {
reply('🚫 *Error Accurated !*\n\n' + e )
l(e)
}
})


cmd({
    pattern: "ginfo",
    react: "ℹ",
    alias: ["groupinfo"],
    desc: "Get group informations.",
    category: "group",
    use: '.ginfo',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) return reply('⛔ *This Is Group Only Command* ')
if (!isBotAdmins) return reply('⛔ *Bot Must Be Admin First* ')
if (!isAdmins) { if (!isDev) return reply('🚫 *You Must Be A Admin First*') }
const metadata = await conn.groupMetadata(from) 
let ppUrl = await conn.profilePictureUrl( from , 'image')
const gdata = `\n*${metadata.subject}*

• ɢʀᴏᴜᴘ ᴊɪᴅ - ${metadata.id}

• ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛ ᴄᴏᴜɴᴛ - ${metadata.size}

• ɢʀᴏᴜᴘ ᴄʀᴇᴀᴛᴏʀ - ${metadata.owner}

• ɢʀᴏᴜᴘ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ - ${metadata.desc}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
await conn.sendMessage(from,{image:{url: ppUrl },caption: gdata },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !*\n\n'+ e )
console.log(e)
}
})
