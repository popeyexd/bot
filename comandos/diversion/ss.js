const Discord = require("discord.js");

module.exports = {
  name: "ws",
  alias: ["webhook"],

execute(client, message, args) {

let mensaje = args.join(' ')

const webhook = new Discord.WebhookClient('https://discord.com/api/webhooks/935579324243923004/kV1qlNaq1gysKhwwq2wWgBfWr3vfi8cWddq3rtNWT6Cut2RpnUkpYkqnPmP-PeXds0-m')

webhook.send(`${mensaje}`)

}
}