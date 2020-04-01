exports.run = (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
var modlog = message.guild.channels.find(val => val.name === `${guildConf.modLogChannel}`);
if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply('Sorry! Only Staff members with the Manage Server Permission can use this command!');
  	var newGuildName = args.slice(1).join(" ");
  
  if(!newGuildName) return message.reply(`What do you want to set the guild name too?`);
  
  message.guild.setName(newGuildName)
 .then(g => console.log(`Updated guild name to ${message.guild.name}`))
  
}