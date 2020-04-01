exports.run = (client, message, args, Discord) => {
    	if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("No... Go get the Ban Members permission u skrub");
    	
    	var user = message.mentions.users.first();
    	var author = message.author;
    	var reason = args.slice(2).join(" ");
     	var modlog = message.guild.channels.find(val => val.name === 'mod-logs');
     	
     	
        if(!modlog) return message.reply('I cannot find a mod-log channel, please make a text channel named `mod-logs`').catch(console.error);
        
        	const embed = new Discord.RichEmbed()
			 .setColor(0x00AE86)
			 .setTimestamp()
			 .setDescription(`**Action:** Unban\n**Target:** <@${args.slice(1).join(" ")}>\n**Moderator:** ${author}`);

			 client.channels.get(modlog.id).send({embed}).catch(console.error);
			 
			 message.guild.unban(args.slice(1).join(" ")).then(user => {
			 	message.channel.send(`<@${author.id}> has unbanned ${user.username}#${user.discriminator}/<@${user.id}>.`)
			 });
    }
