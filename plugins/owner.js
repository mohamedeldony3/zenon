conn.sendMessage(m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: 'Zenon BOT ♥',
body: "أول بوت واتساب في مصر  💖",
thumbnailUrl: 'https://telegra.ph/file/ceddc05cc95199b264427.jpg',
sourceUrl: 'https://instagram.com/f0.0n1',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})

    /*conn.sendFile(m.chat, 'menu.png', text.trim(), m, null, )
    /*conn.sendButton(m.chat, text.trim(), '▢ DyLux  ┃ ᴮᴼᵀ\n▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98_ff', pp, [
      ['ꨄ︎ Apoyar', `${_p}donate`],
      ['⏍ Info', `${_p}botinfo`],
      ['⌬ Grupos', `${_p}gpdylux`]
    ],m, rpl)*/

  } catch (e) {
    conn.reply(m.chat, '❎ هناك خطأ في لائحة الاوامر', m)
    throw e
  }
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = ['oner','b','list'] 
handler.register = false


export default handler
