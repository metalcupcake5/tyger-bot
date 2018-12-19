const Command = require("../base/Command.js");

class Play extends Command {
  constructor (client) {
    super(client, {
      name: "play",
      description: "Play a song",
      category: "Music",
      usage: "play [song]"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    if(message.author.id === "377551134702829568"){
    }else{
      message.reply("This command isn't finished yet, so you can't use it!");
      return;
    }
      
  }
}
module.exports = Play;
