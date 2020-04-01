function Role(mem, role) {
	return mem.roles.some(r=> r.name.toLowerCase() === role.toLowerCase());
	}

exports.run = (client, message, args, user) => {
	if (!message.member.hasPermission('MANAGE_ROLES') && message.author.id != config.owner) return message.channel.send('Sorry M8, You need the Manage Roles to be able to use this')
	var user = message.mentions.users.first();
	var name = args.slice(2).join(" ")
	var role = client.guilds.get(message.guild.id).roles.find(val => val.name === name);
	if(!role) return message.reply('You didnt specify a role to remove, please specify one')
	if(!user) return message.reply('You didnt specify a user, please specify one')
	message.guild.member(user).removeRole(role).then(() =>{
		message.channel.send(`Successfully taken ${role.name} from ${user}!`)
	})
}