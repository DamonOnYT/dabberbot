function uptime() {
	var date = new Date(client.uptime);
	var strDate = '';
	strDate += date.getUTCDate() - 1 + " days, ";
	strDate += date.getUTCHours() + " hours, ";
	strDate += date.getUTCMinutes() + " minutes";
	return strDate;
}
const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
	const Discord = require('discord.js');
	var embed = new Discord.RichEmbed()
	.setAuthor("Bot Info")
	.setDescription("Dabberbot | Coded by DDI Development")
	.addField("Library", "Discord.js", true)
	.addField("API Latency", `${client.ping}ms`, true)
	.addField("Servers", `${client.guilds.size}`, true)
	.addField("Uptime", `Error.`, true)
	.addField("Prefix", "/", true)
  .addField("Support Server", `[CLICK HERE](https://www.discord.gg/xA9gwvy)`, true)
	.addField("Invite Me", "[CLICK HERE](https://discordapp.com/oauth2/authorize?client_id=239853212444786689&scope=bot&permissions=2146958591)", true)
  .addField("Owner/Dev", "DamonOnYT#5465", true)
  .addField("Developers", "The Doctor#5005 \n ipadpuppydogdude1#1958", true)
 // .addField("Dabberbot Version", "idk", true)
  .setFooter(`Have Any Suggestions? DM DamonOnYT#5465`)
	.setColor("#1E90FF");
		message.channel.send({embed});		
};
