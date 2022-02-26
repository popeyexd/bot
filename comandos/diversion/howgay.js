const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "howgay",
  alias: [],

execute(client, message, args) {

  const user = message.mentions.members.first() || message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  let porcentaje = ["10%", "12%", "13%", "14%", "15%", "16%", "17%", "18%", "19%", "20%", "21%", "22%", "23%", "24%", "25%", "26%", "26%", "27%", "28%", "29%", "30%", "31%", "32%", "33%", "34%", "35%", "50%", "51%", "54%", "53%", "101%", "81%", "56%", "78%", "74%"]

  var random = porcentaje[Math.floor(Math.random() * porcentaje.length)]

  const embedbay = new Discord.MessageEmbed()

  .setTitle('Cuanto gay eres?')
  .setDescription(`${user} es ${random} gay`)
  .setColor("RANDOM")

  message.channel.send({ embeds: [embedbay] });

  }
}