const Discord = require('discord.js')
const client = new Discord.Client()

// @TODO 環境変数から取得
const token = 'NzM0MDM0Nzc0MDk5NzU1MTAw.XxL1mA.VqPhSDqchJbnixRNF4HsgcIGL6s'

client.on('ready', () => {
  console.log('[event] ready')
})

// ユーザ毎の入室音を取得
client.on('voiceStateUpdate', (oldMember, newMember) => {
  console.log(oldMember)
  console.log(newMember)
  if (
    oldMember.voiceChannelID !== newMember.voiceChannelID &&
    newMember.voiceChannelID !== null
  ) {
    const voiceChannel = client.channels.get(newMember.voiceChannelID)
    voiceChannel.join().then((connection) => {
      connection.playFile('./voices/line-girl1-yoho1.mp3')
    })
  }
})

client.login(token)
