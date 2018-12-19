const Command = require("../base/Command.js");

class Rip extends Command {
  constructor (client) {
    super(client, {
      name: "rip",
      description: "Displays a rip gravestone",
      category: "Fun",
      usage: "rip",
      aliases: ["rip"]
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    message.delete();
    message.channel.send({files: ["./rip.png"]});
  }
}

module.exports = Rip;
