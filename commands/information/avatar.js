exports.run = (client, message, args, user, avatar) => {
    var avatar = message.mentions.users.first();
    var user = message.mentions.users.first();
    var author = message.author.username;
    if(!user) return message.channel.send(`${author}, Your avatar is ${message.author.avatarURL}`);

    message.channel.send(`${author}, ${user}'s avatar is: ${avatar.avatarURL}`);
}
