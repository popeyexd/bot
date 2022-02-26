const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "8ball",
  alias: [],

execute(client, message, args) {

  const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  let pregunta = args.join(' ');
  if(!pregunta) return message.reply('Debes decir una pregunta.')

  let respuesta = ["Si", "No", "Talves", "Puede ser pa", "Claro que si", "Claro que no", "XD"];

  var random = respuesta[Math.floor(Math.random() * respuesta.length)]

  const embed8ball = new Discord.MessageEmbed()

  .setTitle('8ball')

.addField("Pregunta.", `${args.join(" ")}`)
.addField("Respuesta", `${random}`)
.setColor("RANDOM")

message.channel.send({ embeds: [embed8ball] });

  }
}