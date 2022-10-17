require('../bot.js');
function OnMessage(message) {
    const { discord, Discord, Client, client, Attachment, reactionManager, ReactionEmoji } = require("discord.js");
    const TickEmoji = '✅'
    const StopEmoji = '🛑'
    
    function execute(message) {
    console.log;
        let attachments = message.attachments.filter(
            attachment => attachment.contentType.startsWith("video/")
        );
            message.react(TickEmoji)
                .then(() => message.react(StopEmoji));
        }
    
    
    // Random Number Maker
            function random_item(items) {
                    return items[Math.floor(Math.random()*items.length)];
                }
                    var responses = [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    ];
    
        // If ✅ pressed by original message poster
        // reply to original poster with a random rating from 1-10/10
        if (ReactionEmoji.name === TickEmoji && user.id === message.author.id) {
                 message.reply(random_item(responses) + "/10");
                 reactionManager.removeAll();     
        }
    
        // If 🛑 pressed by original message poster
        // remove all reactions from post - then do nothing
        if (ReactionEmoji.name === StopEmoji && user.id === message.author.id) {
                 reactionManager.removeAll()
        }  }
  
  module.exports = {
      OnMessage
  }