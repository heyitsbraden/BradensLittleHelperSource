module.exports = {
    name: 'ready',
    once: true,
    execute(bot) {

      //Log Bot's username and the amount of servers its in to console
        console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} server(s)!`);

        //Set the Presence of the bot user
        bot.user.setPresence({ activities: [{ name: `${bot.user.username} is watching ${bot.guilds.cache.size} server(s)!`}] });
    }
}
