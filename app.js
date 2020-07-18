const Discord = require('discord.js')
const client = new Discord.Client()

// @TODO 環境変数から取得
const token = process.env.DISCORD_TOKEN

const sleep = (time = 200) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

client.on('ready', () => {
  console.log('[event] ready')
})

// ユーザ毎の入室音を取得
client.on('voiceStateUpdate', (oldMember, newMember) => {
  if (
    oldMember.channelID !== newMember.channelID &&
    newMember.channelID !== null
  ) {
    const voiceChannel = client.channels.cache.get(newMember.channelID)
    voiceChannel.join().then(async (connection) => {
      await sleep(500)
      connection.play('./voices/line-girl1-yoho1.mp3')
    })
  }
})

client.login(token)
