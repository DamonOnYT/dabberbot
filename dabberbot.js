var express = require('express');
var app = express();

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

//console.log ping recieved from DDI Glitch Ping
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

//
//
// DABBERBOT CODE BELOW
//
//

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const alist = require('./admins.json');
const fs = require('fs');
const ms = require('ms');
const blacklist = require('./blacklist.json');
const afk = require('./away.json');
const Enmap = require('enmap');
const Sentry = require('@sentry/node');
const DBL = require("dblapi.js");
Sentry.init({ dsn: 'https://dbe3678b2f9140beb3d2db646bdf6f74@sentry.io/1833185' });

// Database stuff
client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});
const defaultSettings = {	
  prefix: "/",
  modLogChannel: "mod-logs",
  welcomeChannel: "welcome",	
  welcomeMessage: "Welcome {{user}} to {{servername}}",
}

const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIzOTg1MzIxMjQ0NDc4NjY4OSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTg1NzUxMTEzfQ.qUtAWSOdQtSuI57uijYU-Ye6hT-fQfQpRIozyU9F0MY', client);

client.on('guildCreate', guild => {
  client.channels.get('649207579297316875').send(`:tada: Joined Server | Membercount: ${guild.memberCount} Name: **${guild.name}** `);
	
});
client.on("guildDelete", guild => {
// Removing an element uses `delete(key)`
client.settings.delete(guild.id);
  client.guilds.get(``).send(`I have left a guild called ${guild.name}`);
  client.channels.get('649207579297316875').send(`Left Server | Membercount: ${guild.memberCount} Name: **${guild.name}** `);
});


/*(client.on("guildMemberAdd", member => {
  // This executes when a member joins, so let's welcome them!
  // First, ensure the settings exist
  client.settings.ensure(member.guild.id, defaultSettings);
  // First, get the welcome message using get: 
  let welcomeMessage = client.settings.get(member.guild.id, "welcomeMessage");
  // Our welcome message has a bit of a placeholder, let's fix that:
    welcomeMessage = welcomeMessage.replace("{{user}}", member.user);
    welcomeMessage = welcomeMessage.replace("{{servername}}", member.guild.name);
  // we'll send to the welcome channel.
  member.guild.channels.find("name", client.settings.get(member.guild.id, "welcomeChannel")).send(welcomeMessage).catch(console.error);
  });*/



//
//
// splitter
//
//

function clean(text) {
  if(typeof(text) === "string")
  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, + String.fromCharCode(8203));
  else
    return text;
}


// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
  });
});

client.on("message", async (message) => {
 if(!message.guild || message.author.bot) return;
// We can use ensure() to actually grab the default value for settings,
// if the key doesn't already exist. 
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
// We also stop processing if the message does not start with our prefix.
if(message.content.indexOf(guildConf.prefix) !== 0) return;
//Then we use the config prefix to get our arguments and command:
const args = message.content.split(/\s+/g);
const command = args.shift().slice(guildConf.prefix.length).toLowerCase();
if(blacklist.includes(message.author.id)) return message.reply(`You are blacklisted from using DabberBot. Contact our team at support@ddidevelopment.com for more information and appealing.`);


// ill simplify this at some point, atm its just a mess of garbage
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
        console.log(err)
  }

  try {
    let commandFile = require(`./commands/moderation/${command}.js`);
    commandFile.run(client, message, args, guildConf);
  } catch (err) {
     //   console.log(err)
  }

  try {
    let commandFile = require(`./commands/developers/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    //    console.log(err)
  }

  try {
    let commandFile = require(`./commands/information/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    //    console.log(err)
  }

  try {
    let commandFile = require(`./commands/fun/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    //    console.log(err)
  }

  try {
    let commandFile = require(`./commands/placeholder/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    //    console.log(err)
  }
  
    try {
    let commandFile = require(`./commands/serveradmin/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
  //    console.log(err)
  }
  
  
  // soon mabybe idk its here incase
  /*const loadCommands = async () => {
  this.coms = 0;
  const categories = fs.readdirSync("./commands/");
  for (let category of categories) {
    let commands = fs.readdirSync(`./commands/${category}/`);
    for (let file of commands) {
      
      this.coms++;
      if (!file.endsWith(".js")) return;
      let commandName = file.slice(0,-3);
      const response = client.loadCommand(category, file);
      if (response) return console.log(response);
    };
  };
    client.logger.log(`Loading a total of ${this.coms} commands.`);
};*/

  
  
  if(command === "config") {
  var embed1 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Server Config")
  .addField("modLogChannel", `${guildConf.modLogChannel}`)
  .addField("prefix", `${guildConf.prefix}`)
  .addField("welcomeChannel", `${guildConf.welcomeChanel}`)
  .addField("welcomeMessage", `${guildConf.welcomemessage}`)
  .setFooter(`Issues? Join our discord at discord.ddidevelopment.com`);
return message.channel.send({embed: embed1});
    
      };


      if(command === "setconfig") {
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Go get the `Administrators` Permission, then i\'ll do it for ya'); 
    // This is array destructuring, by the way. 
    const [prop, ...value] = args;

        
if(!client.settings.has(message.guild.id, prop)) {
  var embed1 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Error")
  .addField("That's not an option.", "Please pick one from the list.")
  .addField("modLogChannel", `${guildConf.prefix}setconfig modlogChannel newchannel`)
  .addField("prefix", `${guildConf.prefix}setconf prefix newprefix`)
  .addField("welcomeChannel", `${guildConf.prefix}setconfig welcomeChannel newchannel`)
  .addField("welcomeMessage", `${guildConf.prefix}setconfig welcomeMessage newmessage\n\nuse\`{{user}}\` to mention the user that joined.\nUse \`{{servername}}\` to add the servername`);
return message.channel.send({embed: embed1});/*`Error. That is not an option
    
Options:
modLogChannel
prefix
welcomeChannel
welcomeMessage
 | {{user}} - Mentions the user who joined
 | {{servername}} - Inserts the servername`*/
}       
        var embed2 = new Discord.RichEmbed().setColor("RANDOM").setTitle("Options")
  .addField("modLogChannel", `${guildConf.prefix}setconf modlogChannel newchannel`)
  .addField("prefix", `${guildConf.prefix}setconf prefix newprefix`)
  .addField("welcomeChannel", `${guildConf.prefix}setconf welcomeChannel newchannel`)
  .addField("welcomeMessage", `${guildConf.prefix}setconf welcomeMessage newmessage\n\nUse\`{{user}}\` to mention the user that joined.\nUse \`{{servername}}\` to add the servername`)
  .setFooter("Coded with code by DDI Development")     
if(!args[0]) return message.channel.send({embed: embed2});
        
        if(!args[1]) return message.channel.send(`What do you want to set ${args} to?
**Example:** ${guildConf.prefix}setconf modLogChannel logs`);
        

    client.settings.set(message.guild.id, value.join(" "), prop);
    message.channel.send(`Guild configuration item ${prop} has been changed to:\n\`${value.join(" ")}\``);
      }
  
 

});

client.login(`MjM5ODUzMjEyNDQ0Nzg2Njg5.XoXwcA.n9zsef4dNYMpNeJyKDngl7RYdB8`);
