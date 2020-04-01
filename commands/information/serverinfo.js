exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: `${message.guild.name}`,
                icon_url: `${message.guild.iconURL}`
            },
            "thumbnail": {
                "url": `${message.guild.iconURL}`
            },
            fields: [{
                    name: "Guild Owner",
                    value: `${message.guild.owner}`
                },
                {
                    name: "Total Amount of Members",
                    value: `${message.guild.members.filter(u => u.user.bot === false).size} Members and ${message.guild.members.filter(m=>m.user.bot).size} bots`
                },
                {
                    name: "Date of the Guild was Created",
                    value: `${message.guild.createdAt.toLocaleString()}`
                },
                {
                    name: "Server Region",
                    value: `${message.guild.region}`
                },
    {
  name: "Number of Roles",
  value: `${message.guild.roles.size} roles`
    }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: message.author.avatarURL,
                text: `${message.guild.name} is kewl`
            }
        }
    })
};

