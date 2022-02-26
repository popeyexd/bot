const Discord = require("discord.js");
const ms = require("ms")

module.exports = {
  name: "giveaway",
  alias: ["sorteo", "start", "gw"],

async execute(client, message, args) {

      if (!args[0]) return message.channel.send(`Argumentos inválidos.\nstart (tiempo) (canal) (premio)\nSin los ().`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `No usaste el formato correcto, ejemplo **start <tiempo> <canal> <premio>**`
      );
    if (isNaN(args[0][0])) return message.channel.send(`Eso no es un tiempo / número.`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `No pude encontrar ese canal en el servidor, porfavor mencionalo bien.`
      );
   let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Dí un premio`);
    message.channel.send(`*Sorteo creado en ${channel}*`);
    let Embed = new Discord.MessageEmbed()
      .setTitle(`${prize}!`)
      .setDescription(
        `Hosteado por: ${message.author}\nReacciona en 🎉 para participar`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send({ embeds: [Embed] });
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reacciones: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `No reaccionó mucha gente.`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.client)
        .random();
      channel.send(
        `Ganador de **${prize}** es...\n ${winner} Felicidades!!🥳🥳 `
      );
    }, ms(args[0]));
  },
};