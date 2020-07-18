const Discord = require('discord.js')
const client = new Discord.Client()

// @TODO 環境変数から取得
const token = 'NzM0MDM0Nzc0MDk5NzU1MTAw.XxL1mA.VqPhSDqchJbnixRNF4HsgcIGL6s'

client.on('ready', () => {
  console.log('[event] ready')
})

client.on('message', (message) => {
  if (message.author.bot) {
    return
  }
  const content = message.content
  const channel = message.channel
  const username = message.author.username
  message
    .reply(content)
    .then((msg) =>
      console.log(
        `Sent message: ${msg}, channel: ${channel}, username: ${username}`
      )
    )
    .catch(console.error)
})

client.login(token)
