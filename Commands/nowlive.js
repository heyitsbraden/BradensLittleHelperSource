exports.run = async (bot, message, args) => {
  console.log('Command: nowlive, was used.');
  message.channel.send("@everyone What's up champions, I'm live now on https://twitch.tv/heyitsbraden_ join now to get a piece of the action!");
}

exports.help = {name:"nowlive"}