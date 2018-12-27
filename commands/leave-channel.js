const Command = require("../base/Command.js");

class Leave extends Command {
  constructor (client) {
    super(client, {
      name: "leave",
      description: "Leaves the voice channel that you are in",
      category: "Music",
      usage: "join",
      permLevel: "Staff"
    });
  }

  async run (message, args) { // eslint-disable-line no-unused-vars
    if(message.guild.voiceConnection){
      message.guild.voiceConnection.disconnect();
    }else{
      message.reply("I must be in a voice channel to leave it!");
    }
  }
}
module.exports = Leave;
