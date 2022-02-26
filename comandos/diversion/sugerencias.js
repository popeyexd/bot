const Discord = require("discord.js");
const db = require('megadb')
const cosa = new db.crearDB('canalsugs')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "sugerencia",
  alias: ["sug"],

async execute(client, message, args) {

   const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

const canal = await cosa.obtener(`${message.guild.id}`, `${message.channel.id}`)
const canalsugerencia = client.channels.cache.get(canal)

if(!cosa.tiene(`${message.guild.id}`, `${message.channel.id}`)){
  message.channel.send("Este servidor no tiene ningún canal para sugerencias establecido, escribe $sugs-channel y menciona a algún canal para establecerlo!")

  return;
}

const sugerencia = args.join(" ")
if(!sugerencia) return message.channel.send("Debes escribir una sugerencia!")


const embed = new Discord.MessageEmbed()

.setTitle("Nueva Sugerencia!")
.setAuthor(message.member.displayName, message.author.displayAvatarURL())
.setDescription(`${sugerencia}`)
.setColor("RANDOM")
.setThumbnail(message.author.displayAvatarURL())
.setFooter("Escribe $sugerencia <sugerencia> para dar una sugerencia!")
.setTimestamp()

const embedbueno = new Discord.MessageEmbed()

.setTitle("Todo a salido bien!")
.setDescription("La sugerencia fue enviada al canal establecido!")
.setColor("RANDOM")

message.channel.send({ embeds: [embedbueno]});

canalsugerencia.send({ embeds: [embed]}).then(async msg => {
  await msg.react('✅');
  await msg.react('❌')
});

  }
}