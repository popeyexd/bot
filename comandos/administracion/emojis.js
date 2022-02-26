const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "addemoji-link",
  alias: ["emoji-link"],

execute(client, message, args) {

   const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')


  if(!message.guild.me.permissions.has("MANAGE_EMOJIS")) return message.channel.send("No tengo permisos para ejecutar este comando! necesito el permiso de **Gestionar Emojis**")

 if(!message.member.permissions.has("MANAGE_EMOJIS")) return message.channel.send("No tienes permisos para ejecutar este comando! necesitas el permiso de **Gestionar emojis**")

const url = args[0]

if(!url) return message.channel.send('Agrega el url del emoji')
   
   const name = args[1]

if(!name) return message.reply('Di el nombre del nuevo emoji!')

 message.guild.emojis.create(url, name)
  .then(emoji => console.log(`Nuevo emoji creado con el nombre:  ${emoji.name}!`))
  .catch(console.error);
message.channel.send('El emoji se ha subido con éxito')

  }
}