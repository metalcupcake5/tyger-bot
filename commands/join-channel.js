const Command = require("../base/Command.js");
const YTDL = require("ytdl-core");

function Play(connection, message){
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
  server.queue.shift();
  server.dispatcher("end", function(){
    if(server.queue[0]){
      Play(connection.message);
    }else{
      connection.disconnect();
    }
  });
}


class Join extends Command {
  constructor (client) {
    super(client, {
      name: "join",
      description: "Joins the voice channel that you are in",
      category: "Music",
      usage: "join",
      permLevel: "Staff"
    });
  }

  async run (message, args) { // eslint-disable-line no-unused-vars
    if(message.member.voiceChannel){
      if(!message.guild.voiceConnection){
        if(!servers[message.guild.id]){
          servers[message.guild.id] = {queue: []}
        }
        message.member.voiceChannel.join()
          .then(connection =>{
            var server = servers[message.guild.id];
            message.reply("Successfully joined!");
            server.queue.push(args);
            Play(connection, message);
        })
      }
    }else{
      message.reply("You must be in a voice channel for me to join it");
    }
  }
}
module.exports = Join;
