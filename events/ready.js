const config = require("../config.json");
const Discord = require('discord.js');
module.exports = (client, message, dbl) => {
    console.log(`Dabberbot is online and serving ${client.guilds.size} discord servers!`);
    client.user.setActivity(`${client.guilds.size} servers | ${config.prefix}help`, {
        type: "WATCHING"
    });
      setInterval(() => {
        dbl.postStats(client.guilds.size);
    }, 1800000);

}