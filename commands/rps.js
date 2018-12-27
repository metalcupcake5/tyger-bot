const Command = require("../base/Command.js");

class Rps extends Command {
  constructor (client) {
    super(client, {
      name: "rps",
      description: "Play rock paper scissors with the bot!",
      category: "Fun",
      usage: "rockpaperscissors <rock|paper|scissors>",
      aliases: ["rps"]
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)+1);
    }
      
    let userplay = args[0];
      
    if(userplay == "rock" || userplay == "scissors" || userplay == "paper"){
      let number = getRandomInt(3);
      
      var play = "rock";
      if(number == 1) {
        play = "scissors";
      } else if(number == 2) {
        play = "rock";
      } else if(number == 3) {
        play = "paper";
      }
      
      if(play == "rock" && userplay == "rock" || play == "paper" && userplay == "paper" || play == "scissors" && userplay == "scissors"){
        message.channel.send("Tie!");
      } else if(userplay == "rock" && play == "scissors" || userplay == "paper" && play == "rock" || userplay == "scissors" && play == "paper"){
        message.channel.send("You win! :D");
      } else if(userplay == "rock" && play == "paper" || userplay == "paper" && play == "scissors" || userplay == "scissors" && play == "rock"){
        message.channel.send(`You lose :( Better luck next time!`);
      }
      message.channel.send("You: "+userplay+"\nBot: " + play);
    }else{
      message.channel.send("Enter a valid play!(rock, paper, or scissors)");
    }
  }
}

module.exports = Rps;
