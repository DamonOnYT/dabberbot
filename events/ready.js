const config = require("../config.json");
const Discord = require('discord.js');
exports.run = (client, dbl) => {
    console.log(`Dabberbot is online and serving ${client.guilds.size} discord servers!`);
    client.user.setActivity(`v2 BETA | ${config.prefix}help`, {
        type: "WATCHING"
    });
      setInterval(() => {
        dbl.postStats(client.guilds.size, client.shards.Id, client.shards.total);
    }, 1800000);

}