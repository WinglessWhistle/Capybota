module.exports = {
    name: 'ping',
    description: "- hehe ping pong",
    execute(message, args){
        // Relay exactly what the user sent to us only if they sent us something.
        if(args.length > 0)
            message.reply("pong: " + args.join(" "))

        // Otherwise just pong them.
        else
            message.reply("pong 🏓");
    }
}