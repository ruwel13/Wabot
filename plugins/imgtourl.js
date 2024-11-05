const { cmd, commands } = require('../command');
let { img2url } = require('@blackamda/telegram-image-url');
const { getRandom } = require('../lib/functions');
const fs = require('fs');
const fetch = require('node-fetch');
const config = require('../config')
const FormData = require('form-data');

var desct = "It Convert Given Image To URL."
var imgmsg = "*Reply To A Photo !*"
var cantf = "*Server Is Busy. Try Again Later!*"

const uploadUguu = async path => {
  try {
    const form = new FormData();
    form.append("files[]", fs.createReadStream(path));
    const res = await fetch("https://uguu.se/upload.php", {
        method: "POST",
        headers: form.getHeaders(),
        body: form
      }),
      json = await res.json();
    return await fs.promises.unlink(path), json;
  } catch (e) {
    return await fs.promises.unlink(path), "Upload failed";
  }
};

cmd({
    pattern: "img2url",
    react: "🔗",
    alias: ["tourl","imgurl","telegraph","imgtourl"],
    desc: desct,
    category: "convert",
    use: '.img2url <reply image>',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    const me = m.quoted || m,
      mime = me.mediaType || "";
    if (!/image|video|audio|sticker|document/.test(mime)) await reply("No media found");
    const media = await me?.download(!0),
      fileSizeInBytes = fs.statSync(media).size;
    if (0 === fileSizeInBytes) return reply(imgmsg), void await fs.promises.unlink(media);
    if (fileSizeInBytes > 1073741824) return m.reply("File Size Is Too Big"),
    void await fs.promises.unlink(media);
    const {
      files
    } = await uploadUguu(media)
    const caption = `⛓️ *Link:*\n${files[0]?.url}`;
    await reply(caption)
} catch (e) {
  reply(cantf);
  console.log(e);
}
})
