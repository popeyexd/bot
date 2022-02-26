const discord = require('discord.js');
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "clear",
  alias: ["purge"],

  execute(client, message, args) {

    let user = message.author;

      if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

var perms = message.member.permissions.has("MANAGE_MESSAGES")
if(!perms) return message.reply('No tienes permisos para ejecutar este comando!')

if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.reply('No tengo suficientes permisos para ejecutar el comando :c')

const cantidad = args.join(" ");



message.channel.bulkDelete(cantidad).then(()=> {
  message.channel.send(`**${cantidad}** mensajes borrados correctamente!`)
})

  }
}