exports.run = (client, message, args) => {
  const Discord = require(`discord.js`)
  const msg = message;

  const x = Math.floor(Math.random() * 2);
  if (x === 0) {
    
  //msg.channel.send('<:coin:383756433335779330> Heads!');
           var heads = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Heads`)
   return message.channel.send({embed: heads}) 
    
    
  } else {
    
 // msg.channel.send('<:coin:383756433335779330> Tails!');
       var tails = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Tails`)
   return message.channel.send({embed: tails})
    
  }
  
  

    
};
