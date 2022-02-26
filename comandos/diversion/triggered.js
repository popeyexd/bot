const Discord = require("discord.js");
const canvacord = require('canvacord');
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "triggered",
  alias: [],

async execute(client, message, args) {

  const user = message.mentions.members.first() || message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
  let image = await canvacord.Canvas.trigger(avatar);
  let attachment = new Discord.MessageAttachment(image, "triggered.gif");
  return message.channel.send({ files: [attachment] });

  }
}