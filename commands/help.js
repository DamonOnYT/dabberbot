 exports.run = (client, message, args, defaultSettings) => {
	  
const guildConf = {
  "prefix": "/"
}
//var modlog = message.guild.channels.find(val => val.name === `${guildConf.modLogChannel}`);

 // message.channel.send(`The help commandis currently being re-developed and will be shown later in the beta`);
    message.channel.send(`:mailbox_with_mail: ${message.member.user} I have sent you a DM with my commands! `).then(() => {
		message.author.send(`***Commands:***
		
**${message.guild.name}**'s prefix: **${guildConf.prefix}**
        ${guildConf.prefix}help - Shows this message
        \`\`\`
		Server Commands
		\`\`\`
        ${guildConf.prefix}membercount - Shows you how many users and bots there are in your server
        ${guildConf.prefix}serverinfo - Shows you info about the server
        ${guildConf.prefix}userinfo <user> - shows you information about a user
		    ${guildConf.prefix}avatar <user> - shows you someones avatar
		
		\`\`\`
		Bot Information
		\`\`\`
		${guildConf.prefix}info - Tells you a bit about me, invites, etc
		**Send your suggestions to DamonOnYT#5465**

		\`\`\`
        Moderation Commands
        \`\`\`
        ${guildConf.prefix}addrole <user> <role *dont ping*> - Add a role to someone
        ${guildConf.prefix}removerole <user? <role *dont ping*> - Remove a role from someone
        ${guildConf.prefix}purge <amount of messages> - deletes an amount of messages **Max 99**
        ${guildConf.prefix}kick <user> <reason> - Kick a member from your server
        ${guildConf.prefix}ban <user> <reason> - ban a member from your server
		    ${guildConf.prefix}warn <user> <reason> - Warn someone

		\`\`\`
		Fun Commands
		\`\`\`
		${guildConf.prefix}google <wot u wanna google> - google something 
		${guildConf.prefix}rps - Play rock paper scissors
		${guildConf.prefix}coinflip - Flip a coin
		${guildConf.prefix}8ball <question> - Ask the magical 8ball a question!
		${guildConf.prefix}dab - Do u like to dab? use this command in front of your friends!
		${guildConf.prefix}slap <user> - slap someone
		${guildConf.prefix}kiss <user> - kiss someone
    
    
    \`\`\`
    Server Administration
    \`\`\`
    ${guildConf.prefix}region <regioname> - Change the guild's region
    ${guildConf.prefix}servername <name> - Change the guild's name
    ${guildConf.prefix}config - View the servers current config
    ${guildConf.prefix}setconfig <module> <value> - Change the servers config.
    
		


		**Send Us Suggestions for the bot in our discord**
        ***Want to contact the team? Join us here! https://invite.gg/ddibots***
        ***Website: Website Is Currently Down, All updates and info is in our discord! ***
        `)
    });
  }                                                                                                        
