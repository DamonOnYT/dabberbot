exports.run = (client, message, args) => {
	var query = args.slice(1).join(" ");
	var search = encodeURI(query);

	if (!query) return message.channel.send('https://google.com')

	message.channel.send(`https://www.google.com/search?q=${search}&cad=h`)
}

