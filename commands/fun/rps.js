const config = (`../../config.json`)
exports.run = (client, message, args) => {
  const Discord = require(`discord.js`)
    const msg = message;
    const random = Math.random();
    let botChoice = '';
    const userChoice = msg.content.substring((config.prefix + 'rps ').length).toLowerCase();

    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
      if (random >= 0 && random < 0.33) {
        botChoice = 'rock';
      } else if (random >= 0.33 && random < 0.66) {
        botChoice = 'paper';
      } else if (random >= 0.66 && random <= 1) {
        botChoice = 'scissors';
      }

      const result = checkWhoWins(botChoice, userChoice);
      const username = msg.author.username;
      let winnerString = ``;
      const versusString = `${username} **${userChoice}** vs **${botChoice}** Dabberbot`;

      if (result === 'bot') {
        winnerString = `**Dabberbot wins!**`;
      } else if (result === 'user') {
        winnerString = `**${username} wins!**`;
      } else if (result === 'draw') {
        winnerString = `**It's a draw!**`;
      }

      msg.channel.send(`${versusString}\n${winnerString}`);
      
      
  var win_loose = new Discord.RichEmbed
  .setColor("RANDOM")
  .setTitle(versusString)
  .setDescription(winnerString)
   return message.channel.send({embed: win_loose})
      
    } else {
      
        const embed = new Discord.RichEmbed()
			 .setColor(`RANDOM`)
        .setTitle(`Error`)
        .setDescription(`That is not a valid RPS choice`)
      
			 msg.channel.send({embed}).catch(console.error);
    }
};

function checkWhoWins(botChoice, userChoice) {
  if (botChoice === 'rock' && userChoice === 'paper') {
    return 'user';
  } else if (botChoice === 'paper' && userChoice === 'scissors') {
    return 'user';
  } else if (botChoice === 'scissors' && userChoice === 'rock') {
    return 'user';
  } else if (botChoice === 'paper' && userChoice === 'rock') {
    return 'bot';
  } else if (botChoice === 'rock' && userChoice === 'scissors') {
    return 'bot';
  } else if (botChoice === 'scissors' && userChoice === 'paper') {
    return 'bot';
  } else { // eslint-disable-line
    return 'draw';
  }
}