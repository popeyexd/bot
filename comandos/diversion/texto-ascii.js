const Discord = require("discord.js");
const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);

const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "ascii",
  alias: [],

async execute(client, message, args) {

    const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

let texto = args.join(" "); 
  if(!texto) return message.channel.send("Agrega algo para convertirlo en ascii. (Máximo 20 carácteres)")
  if(texto.length > 20) return message.channel.send("Solo se permite hasta 20 carácteres.")
  let letras = await figletAsync(texto); 
  message.channel.send("```"+letras+"```"); 
  message.delete();
}

  }