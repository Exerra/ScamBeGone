import { MessageEmbed } from "discord.js";

export let creditsCommand = {
    name: 'credits',
    description: 'Check the bot\'s credits!',
    adminOnly: false,

    async execute(message, args, client) {
        let creditsEmbed = new MessageEmbed().setTitle('Credits')
            .setDescription(`Thank you for using Scam Avoid. To contribute a link send it in a direct message to the bot.`)
            .setTimestamp()
            .addField('Bot Creator','M1nx', true)
            .addField('API Creator', 'Occult Waifu', true)
            .addField('Contributor', 'Ash', true)
            .addField('Contributor', 'Magnetar',true)
            .addField('Contributor', 'BeanBop',true)
            .setFooter({ text: `${client.user.username} 1.2.0 by M1nx`})

        message.reply({
            embeds: [creditsEmbed]
        })
    }
}