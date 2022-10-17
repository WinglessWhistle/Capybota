const { discord, Discord, Client, client, Attachment, reactionManager, ReactionEmoji } = require("discord.js");
const TickEmoji = '✅'
const StopEmoji = '🛑'

function OnMessage(message) {
    console.log("pain");
    let attachments = message.attachments.filter(
        attachment => attachment.contentType.startsWith("video/")
    );

    if (attachments.size > 0) {

        message.react(TickEmoji)
            .then(() => message.react(StopEmoji));

            const filtertick = (reaction, user) => {
                return reaction.emoji.name === TickEmoji && user.id === message.author.id;
            };
            const filterstop = (reaction, user) => {
                return reaction.emoji.name === StopEmoji && user.id === message.author.id;
            };

            const collectortick = message.createReactionCollector({ filtertick, time: 120_000 });
            collectortick.on('collect', () => {

                message.reply(random_item(responses) + "/10");
                reactionManager.removeAll();

            })

            const collectorstop = message.createReactionCollector({ filterstop, time: 120_000});
            collectorstop.on('collect', () => {

                message.reactions.removeAll()

            })
        } 

    }




// Random Number Maker
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}
const responses = [
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

module.exports = {
    OnMessage
}