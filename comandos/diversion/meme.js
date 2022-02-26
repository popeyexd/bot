const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')


const spanishmemes = require('spanish.memes')

const meme = spanishmemes.Meme()

module.exports = {
  name: "meme",
  alias: [],

execute(client, message, args) {

    const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

const embedmeme = new Discord.MessageEmbed()

.setImage(spanishmemes.Meme())
.setColor("RANDOM")

message.channel.send({ embeds: [embedmeme] });

  }
}