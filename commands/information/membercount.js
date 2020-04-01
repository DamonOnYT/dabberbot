exports.run = (client, message, args) => {
	message.channel.send(`This server has ${message.guild.members.filter(u => u.user.bot === false).size} members and ${message.guild.members.filter(m=>m.user.bot).size} bots`);
}
