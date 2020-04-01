const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
	const Discord = require('discord.js');
	var embed = new Discord.RichEmbed()
	.setAuthor("About Me")
	.setDescription("Hey There, Im DabberBot, a small bot, With many features. One of the biggest questions, why is the bot named dabberbot? At the time the bot was created, My owner loved dabbing (and still does). I first started off with Red, From GitHub when my owner had no knowledge of discord.js but now has been custom coded with the help of \`The Doctor#5005\` and \`ipadpuppydogdude1#1958\`, Damon, The Doctor & iPad has come together to form DDI Bots, a team which codes many bots with different features. You can check out their server in \`/info\`")
	.setFooter(`Have Any Suggestions For this? Or The Bot DM DamonOnYT#5465`)
	.setColor("#1E90FF");
	   message.channel.send({embed});	
}