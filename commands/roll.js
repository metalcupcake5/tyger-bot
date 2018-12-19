const Command = require("../base/Command.js");

class Roll extends Command {
  constructor (client) {
    super(client, {
      name: "roll",
      description: "Roll a random number between 1 and the maximum.",
      category: "Fun",
      usage: "roll",
      aliases: ["r"]
    });
  }

  async run (message, args, max) { // eslint-disable-line no-unused-vars
    function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max)+1);
      }
    if(Number.isInteger(max) === true) {
      if(!args || args.size < 1) {
        return message.reply("Must provide a maxium");
      }
        if(max === "d20") {
          let number = getRandomInt(20);
          message.channel.send("Your roll is "+number);
        }else if(max === "d100"){
          let number = getRandomInt(100);
          message.channel.send("Your roll is "+number);
        }else if(max === "d6"){
          let number = getRandomInt(6);
          message.channel.send("Your roll is "+number);
        }else {
          let rando = getRandomInt(max);
          message.channel.send("Your roll is "+rando);
        }
    }
  }
}

module.exports = Roll;
