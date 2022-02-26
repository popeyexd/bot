const Discord = require("discord.js")

const intents = new Discord.Intents(32767)

const client = new Discord.Client({ intents, partials: ['MESSAGE', 'CHANNEL'] })

const fs = require('fs')

const ms = require("ms")

const db = require('megadb')
const prefix_db = new db.crearDB('prefix')

const keepAlive = require('./server.js')


process.on('unhandledRejection', error => {
    console.error(error);
});

client.on('shardError', error => {
    console.error(error);
});



client.snipes = new Map()

//////HANDLER ///////

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

const administracionComandFiles = fs.readdirSync('./comandos/administracion').filter(file => file.endsWith('.js'));

const moderacionComandFiles = fs.readdirSync('./comandos/moderacion').filter(file => file.endsWith('.js'));

const interaccionComandFiles = fs.readdirSync('./comandos/interaccion').filter(file => file.endsWith('.js'));

const diversionComandFiles = fs.readdirSync('./comandos/diversion').filter(file => file.endsWith('.js'));

const propioComandFiles = fs.readdirSync('./comandos/propio').filter(file => file.endsWith('.js'));

const economiaComandFiles = fs.readdirSync('./comandos/economia').filter(file => file.endsWith('.js'));

const antiraidComandFiles = fs.readdirSync('./comandos/antiraid').filter(file => file.endsWith('.js'));

const sorteosComandFiles = fs.readdirSync('./comandos/sorteos').filter(file => file.endsWith('.js'));


for (const file of commandFiles){
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}

for (const file of administracionComandFiles) {
  const command = require(`./comandos/administracion/${file}`);
  client.commands.set(command.name, command);
}

for (const file of moderacionComandFiles) {
  const command = require(`./comandos/moderacion/${file}`);
  client.commands.set(command.name, command);
}

for (const file of interaccionComandFiles) {
  const command = require(`./comandos/interaccion/${file}`);
  client.commands.set(command.name, command);
}

for (const file of diversionComandFiles) {
  const command = require(`./comandos/diversion/${file}`);
  client.commands.set(command.name, command);
}

for (const file of propioComandFiles) {
  const command = require(`./comandos/propio/${file}`);
  client.commands.set(command.name, command);
}

for (const file of economiaComandFiles) {
  const command = require(`./comandos/economia/${file}`);
  client.commands.set(command.name, command);
}

for (const file of antiraidComandFiles){
    const command = require(`./comandos/antiraid/${file}`);
    client.commands.set(command.name, command);
}

for (const file of sorteosComandFiles) {
  const command = require(`./comandos/sorteos/${file}`);
  client.commands.set(command.name, command);
}


/// evento message


client.on('messageCreate', async (message) => {

  if (!message.guild) return;

    let prefix;
    if(prefix_db.tiene(message.guild.id)) {
      prefix = await prefix_db.obtener(message.guild.id)
    } else {
     prefix = 'p!'
    }

    
  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
    const embed = new Discord.MessageEmbed()

    .setTitle("Hola!")
        .setDescription(`Soy **Popeye** y esta es mi info. <:ozi:938557533067550720>\nDeveloper: ! Popeye#2947<:developer:938856125560934510>\n\nUsa **${prefix}help** para más comandos. <:altokemireu:938560623866970162>\n\n[Únete a mi servidor](https://discord.gg/DHK9d6upvC)\n[Invítame a tu server.](https://discord.com/oauth2/authorize?client_id=936449444847685664&scope=bot&permissions=8)`)
        .setTimestamp()
        .setColor("RANDOM")
        message.channel.send({
            content: `Mi prefix en este servidor es: **${prefix}** <:Pepe_Boss:938560987433406585>`,
            embeds: [embed]
            })
  }

    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    client.on("messageDelete", message => {
     client.snipes.set(message.channel.id, {
       content: message.content,
       delete: message.author,
       canal: message.channel
     })
   })


    /////// HANDLER ABAJO ///////

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
        cmd.execute(client, message, args)
    } 

});

//////// HOSTEO 24/7 ////////

const Monitor = require('ping-monitor')

keepAlive();
const monitor = new Monitor({
  website: 'https://Bot-Popeye.antoniomtcr.repl.co',
  title: 'Popeye-Bot',
  interval: 5
})

client.on('ready', () => {

  const estados = [
    {
      name: 'p!help | Popeye Bot',
      type: 'WATCHING'
    },
    {
      name: 'p!help | Popeye Bot',
      type: 'WATCHING'
    },
    {
      name: `p!help | Popeye Bot`,
      type: 'WATCHING'
    },
    {
      name: 'p!help | Popeye Bot',
      type: 'WATCHING'
    }
  ]

  const aleatorio = estados[Math.floor(Math.random() * estados.length)]

  setInterval(() => {
    function presence() {
      client.user.setPresence({
        activities: [aleatorio],
        status: 'online'
      })
    }
    presence()
  }, 10000)

  console.log(`Tamo Redi | Iniciado como ${client.user.tag}`)
})

client.login(process.env.token)

const mySecret = process.env['token']
