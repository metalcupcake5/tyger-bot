const Command = require("../base/Command.js");

class Kick extends Command {
  constructor (client) {
    super(client, {
      name: "kick",
      description: "Kicks the specified user",
      category: "Moderation",
      usage: "kick [user]",
      permLevel: "Moderator"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    let member = message.mentions.members.first();
    let reason = args.join();
    if (message.mentions.members.size === 0){
      return message.reply("Please mention a user to kick");
    } else{
      const kickMember = message.mentions.members.first();
      kickMember.kick().then(member => {
        message.reply(`${member.user.username} was succesfully kicked.`);
      });
    }
  }
}
module.exports = Kick;
