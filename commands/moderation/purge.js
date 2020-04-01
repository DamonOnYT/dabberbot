function clean(text) {
  if(typeof(text) === "string")
  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, + String.fromCharCode(8203));
  else
    return text;
}
const config = require('../../config.json')
exports.run = (client, message, args) => {
  if(args[0].length > 6 + config.prefix.length) return;
  if (!message.member.hasPermission('MANAGE_MESSAGES') && message.author.id !== config.owner) return message.channel.send('Sorry, you dont have the right permissions (Manage Messages), i cant help you bro')
  if(args.slice(1).length < 1) {
    message.channel.send('How many messages do you want me to delete? (max 99)').catch(console.error);
  } else {
    if(args.slice(1) === "0") {
      message.channel.send('I\'m sorry, i cant do that, try again, (max messages 99)').catch(console.error);
    } else {
    if(args[1].length >= 3) {
      message.channel.send('Whoaaaaaaaaaaaaaaaah, too many bro, the most i can delete is 99, and if the messages are over 2 weeks old, better go get some coffee, i cant delete them').catch(console.error);
    } else {
      var msg;
      if(args.length === 1) {
          msg=2;
      } else {
        msg=parseInt(args[1]) + 1;
      }
      message.channel.fetchMessages({limit: msg}).then(messages => {
        if(messages.size <= 1) return;
        message.channel.bulkDelete(messages)}).catch(console.log).then(() => {
      message.channel.send(`${msg -1} message(s) deleted`).then(m => {
        m.delete(5000)
      })});
    }
  }
}
}