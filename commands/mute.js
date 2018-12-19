const Command = require("../base/Command.js");

class Mute extends Command {
  constructor (client) {
    super(client, {
      name: "mute",
      description: "Toggles the mute status on a user",
      category: "Moderation",
      usage: "mute [user]",
      permLevel: "Staff"
    });
  }

  async run (message, args, level) { // eslint-disable-line no-unused-vars
    if(message.author.id === "377551134702829568"){
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.reply("Couldn't find user.");
      let muterole = message.guild.roles.find(role => role.name === "Muted");
      //start of create role
      if(!muterole){
        try{
          muterole = await message.guild.createRole({
            name: "Muted",
            color: "#000000",
            permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              SPEAK: false,
              CONNECT: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }
      //end of create role

      if(!tomute.roles.has(muterole.id)) {
        tomute.addRole(muterole.id);
      }else{
        tomute.removeRole(muterole.id);
      }
    }else{
      message.reply("This command isn't finished yet, so you can't use it!");
      return;
    }
  }
}
module.exports = Mute;
