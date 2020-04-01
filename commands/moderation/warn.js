exports.run = (client, message, args) => {
message.channel.send(`/warn is currently disabled due to bugs in the code.`)
/*const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args, user, username) => {
	const Discord = require('discord.js');
	  
  var reason = args.slice(2).join(" ");
  var user = message.mentions.users.first();
  var author = message.author

const embed = new Discord.RichEmbed()
.setTimestamp()
.setColor(0x00AE86)
.setDescription(`
 **Action:** User Warned
**Moderator:** ${message.author.username}#${message.author.discriminator}
**User:** ${message.mentions.user.first().username}#${message.mentions.user.first().discriminator}
**Channel:** <#${message.channel.id}>
**Reason:** \`${reason}\`
`)

  if(!user) return message.reply(`Who do you want to warn?`);
  if(!reason) return message.reply(`Why do you want to warn ${user}`)

  user.send(`You have been warned by **${author}** in **${message.guild.name}** for **${reason}**`).then(() => {
  message.channel.send(`${author} has warned ${user} for ${reason}`)
  }).then(() => {
client.channels.get('362248697779585024').send({embed});
  }).then(() => {
var addedUser = util.format("%s#%s", message.mentions.users.first().username, message.mentions.users.first().discriminator);
            vios.push("\n" + author.username + "#" + author.discriminator + " warned " + user.username + "#" + user.discriminator + " for " + reason);
            var newWarn = JSON.stringify(vios);
            fs.writeFile("../violations.json", newWarn, (writeErr) => {
              if (!writeErr) {
              }
            });
    });
};
*/
}