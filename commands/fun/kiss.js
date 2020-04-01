exports.run = (client, message, args) => {
  var user = message.mentions.users.first();
  var author = message.author;
  
  message.channel.send(`:kiss: :lips: ${author} kissed ${user}`)
};
