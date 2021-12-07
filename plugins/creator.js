function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
  this.sendContact(m.chat, '6285240646336', 'Wahyu Anshar', m)
}
handler.help = ['owner', 'wahyu']
handler.tags = ['info']

handler.command = /^(owner|wahyu)$/i

module.exports = handler
