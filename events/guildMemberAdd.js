// This event executes when a new member joins a server. Let's welcome them!

module.exports = class {
  constructor (client) {
    this.client = client;
  }

  async run (client, member) {
    if(member.guild.id === "495368093137108993"){
      const embed = {
        "color": 0x42e5f4,
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/495407448908234773/501604611795189761/Spusd_Discord_Logo_1.png"
        },
        "image": {
          "url": member.user.avatarURL
        },
        "author": {
          "name": "Welcome to the Unofficial SPUSD Discord "+member.user.tag+"!"
        },
        "fields": [
          {
            "name": "What to do first",
            "value": "Go to the #self-roles channel and react with an emoji!"
          },
          {
            "name": "Info",
            "value": "This is a server for the students of the South Pasadena Unified School District.\nRemember to read the #rules  before using any channels.\nHave fun!"
          },
          {
            "name": "Need something to do?",
            "value": "Use the command !help for some basic help!"
          },
          {
            "name": "Thanks for joining us!",
            "value": "Sincerely, @metalcupcake5 and @NerdFactor"
          }
        ]
      };
      // Send the welcome message to the welcome channel
      // There's a place for more configs here.
      let guild = client.guilds.get('495368093137108993'), // returns a Guild or undefined channel; 
      channel = guild.channels.get('495998656713981952');
      channel.send("Here you can put the message and stuffs.");
    }else{
      // Load the guild's settings
      const settings = this.client.getSettings(member.guild);

      // If welcome is off, don't proceed (don't welcome the user)
      if (settings.welcomeEnabled === "true"){

        // Replace the placeholders in the welcome message with actual data
        const welcomeMessage = settings.welcomeMessage.replace("{{user}}", member.user.tag).replace("{{server}}", settings.serverName);


        // Send the welcome message to the welcome channel
        // There's a place for more configs here.
        member.guild.channels.find(c => c.name === settings.welcomeChannel).send(welcomeMessage).catch(console.error);
      }if(settings.autoroleEnabled == "true"){
        let role = member.guild.roles.find(r => r.name === settings.autoroleRole);
        member.addRole(role).catch(console.error);
      } 
    }
  }
};

