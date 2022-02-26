const Discord = require("discord.js");

module.exports = {
  name: "invite",
  alias: [],

execute(client, message, args) {

const embed = new Discord.MessageEmbed()

.setTitle("Gracias por invitarme!")
.setDescription("**Con este [Link](https://discord.com/oauth2/authorize?client_id=936449444847685664&scope=bot&permissions=8) me puedes invitar a tu servidor!**")
.setColor("RANDOM")
.setFooter(`Gracias por invitarme ${message.member.displayName}`)

message.channel.send({ embeds: [embed]});

  }
}