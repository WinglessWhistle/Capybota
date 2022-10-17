const { exec } = require("child_process");
const { EmbedBuilder, discord, DiscordAPIError, ContextMenuCommandAssertions } = require("discord.js");
const fs = require('fs');
const prefix = require('../config.js');

    module.exports = {
        name: 'help',
        description: "- Displays all commands",
        execute(message, args) {
        helptext = "";
        context.commands.List.forEach((value, key, commands) => {
            helptext += context.prefix;
            helptext += key.padEnd(12, ' ');
            helptext += value.description;
            helptext += '\n';
        });
           const helpembed = new EmbedBuilder()
                .setColor("0x00FF00")
                .setTitle("Help")
                .setAuthor({ name: 'Capybota'})
                .setDescription('All avaliable commands.')
                .setFooter(
                    {  text: helptext, inline: true }
                )
            message.reply({ embeds: [helpembed] });
        },
    }