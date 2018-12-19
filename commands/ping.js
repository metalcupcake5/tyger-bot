const Command = require("../base/Command.js");

class Ping extends Command {
  constructor (client) {
    super(client, {
      name: "ping",
      description: "Latency and API response times.",
      usage: "ping",
      aliases: ["pong"]
    });
  }

  async run (client, message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const msg = await message.channel.send("🏓 Ping!");
      message.edit(`Pong! Latency is ${Math.round(client.ping)}ms`);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Ping;
