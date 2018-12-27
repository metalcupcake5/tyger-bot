const Command = require("../base/Command.js");

class Test extends Command {
  constructor (client) {
    super(client, {
      name: "test",
      description: "testing",
      usage: "test",
      permLevel: "Bot Owner"
    });
  }

  async run (client, message, args) { // eslint-disable-line no-unused-vars
    message.channel.send(client.guilds.get("495368093137108993"));
  }
}
module.exports = Test;
