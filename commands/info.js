const Command = require("../base/Command.js");
const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

class Info extends Command {
  constructor (client) {
    super(client, {
      name: "info",
      description: "Gives some info about the server",
      usage: "info"
    });
  }
  async run (message, args, level) { // eslint-disable-line no-unused-vars
    const duration = moment.duration(this.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    message.channel.send(`= SERVER MEMBERS =
  • Members    :: ${message.guild.members.size} members total
  • Users      :: ${message.guild.members.filter(member => !member.user.bot).size} users
  • Bots       :: ${message.guild.members.size - message.guild.members.filter(member => !member.user.bot).size} bots`, {code: "asciidoc"});
    message.channel.send(`= SERVER INFO =
  • Channels   :: ${message.guild.channels.size - message.guild.categories} channels
  • Categories :: ${message.guild.categories} categories`, {code: "asciidoc"});
  }
}

module.exports = Info;
