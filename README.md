# Braden's Little Helper
-------
**Command template**

The name of the command file has to contain your command name and the extension ".js"

In the name section at the bottom, enter in the name of your new command, in the message section, type what your bot will say when the command is executed

**BOT COMMAND TEMPLATE BELOW**
----------------------------- 

exports.run = async (bot, message, args) => {

  message.channel.send("bot message here");
}

exports.help = {
    name:"name"
}
  
  If you want to log when a command is used use this string before: message.channel.send("bot message here");
  
  console.log(`Command: name, was used.`);

-----

Change Token and prefix in ``config.json``

Make commands in ``commands`` folder.

There is ``ping`` command in ``commands`` folder
the default prefix of the bot is ``!`` you can change this in the ``config.json``
### Prerequisites

What things you need to install the software and how to install them:

```
Node.js
```

[Node.js](https://nodejs.org/en/) 

## Authors

* **CappeDiem** - *Initial work* - [CappeDiem](https://github.com/CappeDiem)
* **heyitsbraden_** - *building Braden's Little Helper* - [heyitsbraden_](https://github.com/heyitsbraden/)