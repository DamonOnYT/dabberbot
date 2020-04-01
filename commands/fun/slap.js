exports.run = (client, message, args) => {
	var user = message.mentions.users.first();
var author = message.author;

message.channel.send(` ${author} just slapped ${user}   **0-0**\nhttps://tenor.com/view/minions-angry-punch-slap-attack-gif-5685267`)
};
