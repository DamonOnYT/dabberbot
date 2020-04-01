const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args, defaultSettings) => {
	const Discord = require('discord.js');
    	if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('Sorry! Only Staff members with the Kick Members Permissuon can use this command!');
    	
    	var user = message.mentions.members.first();
    	var author = message.author;
    	var reason = args.slice(1).join(" ");
    	const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
      var modlog = message.guild.channels.find(val => val.name === `${guildConf.modLogChannel}`);
    	
        if(!user) return message.reply(`Who are you kicking?? Try again: ${guildConf.prefix}kick <@user> <reason>`);
        if(!reason) return message.reply(`Why are you kicking ${user}? Try again: ${guildConf.prefix}kick <@user> <reason>`);
		if(!modlog) return message.reply(`I cannot find a mod-log channel, please make a text channel named ${guildConf.modLogChannel}`).catch(console.error);
		if(!user.kickable) return message.reply("I am unable to kick this user. I either dont have the kick members permission or their rank is higher than mine!");
        
        	const embed = new Discord.RichEmbed()
			 .setColor(0x00AE86)
			 .setTimestamp()
			 .setDescription(`**Action:** Kick\n**Target:** ${user}\n**Moderator:** ${author}\n**Reason:** ${reason}`);

			 client.channels.get(modlog.id).send({embed}).catch(console.error);
        
        user.send(`
        **Kick Warning**
        
You been kicked from \`${message.guild.name}\` for \`${reason}\``);
        message.guild.member(user).kick().then(() => {
        	message.channel.send(`${author.username} has kicked ${user} for ${reason}`);
        });
    }