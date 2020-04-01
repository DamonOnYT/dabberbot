exports.run = (client, message, args) => {
  const Discord = require(`discord.js`)
  const replies = ["It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Mabybe",
  "i dont know, ask again",
  "It's possible",
  "Hmm?"];
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
//return message.reply(replies[message.replytext]);
  
  var question = args.slice(1).join(" ");
  
   var embed1 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(question)
  .setDescripion(replies[message.replytext])
   
   return message.channel.send({embed: embed1});
    
      };
  
