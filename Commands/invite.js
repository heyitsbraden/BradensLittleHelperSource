exports.run = async (bot, message, args) => {
    message.channel.send("You can't invite this specific bot, but you can invite a slightly modified version of it called Little Helper! INVITE: https://discord.com/api/oauth2/authorize?client_id=926142873500536863&permissions=8&scope=bot");
}

exports.help = {
    name:"invite"
}