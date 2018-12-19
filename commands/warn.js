const Command = require("../base/Command.js");

class Warn extends Command {
  constructor (client) {
    super(client, {
      name: "warn",
      description: "Warns the specified user",
      category: "Moderation",
      usage: "warn [user]",
      permLevel: "Staff"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    if (message.mentions.members.size === 0){
      return message.reply("Please mention a user to warn");
    }else{
      let reason = args.join(" ");
      let member = message.mentions.members.first();
      const settings = this.client.getSettings(member.guild);
      const embed = {
        "color": 0xff1900,
        "timestamp": new Date(),
        /*"thumbnail": {
          "url": member.user.avatarURL
        },*/
        "author": {
          "name": `${member.user.username} has been warned`,
          "icon_url": member.user.avatarURL
        },
        "fields": [
          {
            "name": "Reason",
            "value": `${reason}`
           }
        ]
      };
      message.channel.send(`@${member.user.username} has been warned`);
      message.channel.send(`Reason: ${reason}`);
      member.guild.channels.find(c => c.name === settings.warnChannel).send({ embed });
    }
  }
}
module.exports = Warn;
