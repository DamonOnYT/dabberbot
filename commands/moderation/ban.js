exports.run = (client, message, args, defaultSettings) => {
  const Discord = require(`discord.js`)
    	if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('Go get the `Ban Members` Permission, then i\'ll do it for ya');

    	var user = message.mentions.users.first();
    	var author = message.author;
    	var reason = args.slice(2).join(" ");
    	const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
      var modlog = message.guild.channels.find(val => val.name === `${guildConf.modLogChannel}`);
  
        if(!user) return message.reply(`Who are you banning?? Try again: ${guildConf.prefix}ban <@user> <reason>`);
        if(!reason) return message.reply(`Why are you banning ${user}? Try again: /ban <@user> <reason>`);
  
        
  
		if(!modlog) return message.reply(`I cannot find a mod-log channel, please make a text channel named ${guildConf.modLogChannel}`).catch(console.error);
//		if(!user.kickable) return message.reply("I am unable to ban this user. I either dont have the ban members permission or their rank is higher than mine!");
                user.send(`
        **Ban Warning**
        
You been banned from \`${message.guild.name}\` for \`${reason}\``);
        	const embed = new Discord.RichEmbed()
			 .setColor(0x00AE86)
			 .setTimestamp()
			 .setDescription(`**Action:** Ban\n**Target:** ${user}\n**Moderator:** ${author}\n**Reason:** ${reason}`);

			 client.channels.get(modlog.id).send({embed}).catch(console.error);
        
        user.send(`
        **Ban Warning**
        
You been banned from \`${message.guild.name}\` for \`${reason}\``);
        message.guild.member(user).ban().then(() => {
        	message.channel.send(`${author.username} has banned ${user} for ${reason}`);
        });
	}