const { exec } = require("child_process");
const { EmbedBuilder } = require("discord.js");
const { hostname } = require("os");
    module.exports = {
        name: 'info',
        description: "- displays info for this bot.",
        execute(message, args) {
            const embed = new EmbedBuilder()
                .setColor("0x00FF00")
                .setTitle("info")
                .setDescription(`Current Hostname: ${hostname}`);
            message.reply({ embeds: [embed] });
        },
            };