const Discord = require('discord.js');
const canvacord = require('canvacord');

module.exports = {
  name: "comentario",
  alias: ["comentar", "yt-comentario"],

  async execute(client, message, args){

  const user = message.author;

  const contenido = args.join(' ')
  if(!contenido) return message.reply('Escribe algo para comentar!')

    let yt = await canvacord.Canvas.youtube({"avatar":user.displayAvatarURL({format: "png"}), "username":user.username, "content":contenido })

  let comentario = new Discord.MessageAttachment(yt, 'comentario.png')

  message.channel.send({ files: [comentario] });

  }
}