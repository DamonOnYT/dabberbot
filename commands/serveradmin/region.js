exports.run = (client, message, args, defaultSettings) => {
const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
var modlog = message.guild.channels.find(val => val.name === `${guildConf.modLogChannel}`);
  const regionName = message.content.substring((guildConf.prefix + 'region ').length).toLowerCase();
if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply('Sorry! Only Staff members with the Manage Server Permission can use this command!');

  		const msg = message;
  		const userChoice = msg.content.substring((guildConf.prefix + 'region ').length).toLowerCase();

  // Me defineing all the dumb region bullshit
if(userChoice === '') {
		  client.fetchVoiceRegions()
		  .then(regions => msg.channel.send(`Available regions are: ${regions.map(region => region.name).join(', ')}`))
		  .catch(console.error);
		  // Below we define every region
}else if(userChoice === 'brazil') {
	message.guild.setRegion('brazil', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **Brazil**`);
}else if(userChoice === 'us west') {
	message.guild.setRegion('us-west', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **US West**`);
}else if(userChoice === 'japan') {
	message.guild.setRegion('japan', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **Japan**`);
}else if(userChoice === 'singapore') {
	message.guild.setRegion('singapore', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **Singapore**`);
}else if(userChoice === 'central europe') {
	message.guild.setRegion('eu-central', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **Central Europe**`);
}else if (userChoice === 'hong kong') {
	message.guild.setRegion('hongkong', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **Hong Kong**`);
}else if (userChoice === 'us south') {
	message.guild.setRegion('us-south', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **US South**`);
}else if(userChoice === 'south africa') {
	message.guild.setRegion('southafrica', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **Souh Africa**`);
}else if (userChoice === 'us central') {
	message.guild.setRegion('us-central', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **US Central**`);
}else if(userChoice === 'london') {
	message.guild.setRegion('london', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **London**`);
}else if(userChoice === 'us east') {
	message.guild.setRegion('us-east', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **US East**`);
}else if(userChoice === 'sydney') {
	message.guild.setRegion('sydney', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **Sydney**`);
}else if(userChoice === 'western europe') {
	message.guild.setRegion('eu-west', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **Western Europe**`);
}else if(userChoice === 'amsterdam') {
	message.guild.setRegion('amsterdam', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **Amsterdam**`);
}else if(userChoice === 'india') {
	message.guild.setRegion('india', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **India**`);
} else if (userChoice === 'frankfurt') {
	message.guild.setRegion('frankfurt', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **Frankfurt**`);
} else if (userChoice === 'russia') {
	message.guild.setRegion('russia', `${message.author.username}#${message.author.discriminator} requested this change.`);
	message.reply(`The server region has been change to: **Russia**`);
} else
message.channel.send(`DabberBot does not recognise that region. You can finda  list of regoins by running the region command by itself.`)
}