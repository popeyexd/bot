const Discord = require("discord.js");

module.exports = {
  name: "unban",
  alias: ["desbanear"],

async execute(client, message, args) {

  var permisos = message.member.permissions.has("BAN_MEMBERS")
  if(!permisos) return message.reply('No tienes permisos para ejecutar este comando.')

    let unbanid = args[0]
      if(!unbanid) return message.reply('Escribe una ID para desbanear al usuario.')
    const member = await client.users.fetch(unbanid)

    message.guild.bans.fetch().then(bans => {
      if(bans.size === 0) return message.reply("No hay ningun miembro baneado en este servidor.")

        let bUser = bans.find(b => b.user.id == unbanid)
      if(!bUser) return message.channel.send("Ese usuario no está baneado.")

        message.guild.members.unban(bUser.user)
    })

  message.channel.send(`El usuario ${member} fue desbaneado del servidor.`)

  }
}