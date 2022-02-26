const Discord = require('discord.js')

module.exports = {
  name: "covid",
  alias: ["prueba-covid"],

 async execute(client, message, args){

   let respuestas = ["Positivo", "Negativo"]

   var random = respuestas[Math.floor(Math.random() * respuestas.length)]
    
    const row = new Discord.MessageActionRow()
    .addComponents(
      new Discord.MessageButton()
      .setCustomId('si')
      .setLabel('Sí')
      .setStyle('SUCCESS'),
      
      
      new Discord.MessageButton()
      .setCustomId('no')
      .setLabel('No')
      .setStyle('DANGER')
    )

    

    const msg = await message.channel.send({content: "Estás seguro(a) de hacerte la prueba del Covid-19?", components: [row]})

    const ifiltro = i => i.user.id === message.author.id;

    const collector = msg.createMessageComponentCollector({ filter: ifiltro, time: 60000 })

    collector.on("collect", async i => {
    if(i.customId === "si"){
      await i.deferUpdate()
      i.message.edit({ content: `Realizando la prueba... Resultado: ||${random}|| :scream:`})
    }
    
    if(i.custimId === "no"){
      await i.deferUpdate()
      i.message.edit({ content: "Ok, prueba cancelada"})
    }

  })
 }
}