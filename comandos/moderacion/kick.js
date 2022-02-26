const Discord = require("discord.js");

module.exports = {
  name: "kick",
  alias: ["expulsar"],

execute(client, message, args) {

 var permisos = message.member.permissions.has("KICK_MEMBERS")
 if(!permisos) return message.reply('No tienes permisos para ejecutar este comando!')

 if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply('No tengo permisos para expulsar usuarios.')



 const user = message.mentions.members.first();

  if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.reply('No puedes expulsar a una persona que sea del mismo o mayor rango que tú.')


 if(!user) return message.reply('Debes mencionar a alguien para expulsar.')

//Para que no se expulse el bot mismo.
if(message.mentions.members.first().id === client.user.id) return message.reply('No me puedo expulsar a mi mismo ._.')
//Para que no se expulse a que ejecuto el comando.
if(message.mentions.members.first().id === message.author.id) return message.reply('No te puedes expulsar a ti mismo ._.xd')



 var razon = args.slice(1).join(' ');
 if(!razon){
   razon = 'No hubo razón'
 }

message.guild.members.cache.get(user.id).kick(razon);


 const embed = new Discord.MessageEmbed()

 .setTitle('Usuario expulsado')
 .setDescription(`Usuario: ${user}\nRazón: ${razon}\nModerador: ${message.author}`)
 .setColor("RANDOM")

 message.channel.send({ embeds: [embed] });
}

}