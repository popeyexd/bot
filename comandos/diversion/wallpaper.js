const Discord = require("discord.js");
const akaneko = require("akaneko");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "wallpaper",
  alias: ["wallpaper movil"],

async execute(client, message, args) {

  const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  const wallpc = await akaneko.wallpapers()
let wallpaper = await akaneko.mobileWallpapers()

 const movil = new Discord.MessageEmbed()
    .setImage(wallpaper)
    .setTitle('Wallpaper Movil')
    .setColor("RANDOM")
    .setTimestamp()

    if (message.content.endsWith("pc")) { 
        const pc = new Discord.MessageEmbed()
        .setImage(wallpc)
        .setTitle('Wallpaper PC')
        .setColor("RANDOM")
        .setTimestamp()
        return message.channel.send({ embeds: [pc]})
    }
    message.channel.send({ embeds: [movil] });



  }
}