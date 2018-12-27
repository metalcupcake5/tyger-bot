const Command = require("../base/Command.js");

class IdeaList extends Command {
  constructor (client) {
    super(client, {
      name: "idealist",
      description: "A list of ideas we have",
      category: "System",
      usage: "idealist",
      permLevel: "Staff"
    });
  }

  async run (message, args) { // eslint-disable-line no-unused-vars
    message.channel.send("Good Ideas: 4 seasons, each with a name/drawing competition, economy bot, buy different roles, competition prizes: custom profile pic from anyone in staff");
    message.channel.send("Maybe Ideas: prize for compettion are adding any bot");
  }
}
module.exports = IdeaList;
