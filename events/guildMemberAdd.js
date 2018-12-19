// This event executes when a new member joins a server. Let's welcome them!

module.exports = class {
  constructor (client) {
    this.client = client;
  }

  async run (member) {
    
    // Load the guild's settings
    const settings = this.client.getSettings(member.guild);
  
    // If welcome is off, don't proceed (don't welcome the user)
    if (settings.welcomeEnabled == "true"){

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
};
