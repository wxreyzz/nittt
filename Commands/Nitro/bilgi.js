const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("bilgi")
    .setDescription("Bot hakkında bilgi verir."),

        async execute(interaction) {
            const user = interaction.user

            const BilgiEmbed = new EmbedBuilder()
	            .setColor(0x814da5)
		        .setDescription(`## Gift A-Gen | Bilgiler \n\n<a:kalpa_arvis0011:1058007848543584316>・**Developer** \n ឵ ឵ ឵ ឵ <:alt_arvis0011:1100191032295047298>> <@379179073382907908> - **(** arvis. **)** \n\n<:aesthetickalp_arvis0011:1058007850439426048>・**Sunucu Sayısı** \n ឵ ឵ ឵ ឵ <:alt_arvis0011:1100191032295047298>> ${client.guilds.cache.size} \n\n<a:mavidonuyor_arvis0011:1058007845364322354>・**Gecikme Süresi** \n ឵ ឵ ឵ ឵ <:alt_arvis0011:1100191032295047298>> ${client.ws.ping} ms`)
        
		        .setImage("https://media.discordapp.net/attachments/1116707130452488302/1116714261377458246/Bilgi.png?width=737&height=294")
                .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 2048 }))
            
            await interaction.reply({ embeds: [BilgiEmbed] })
        }
}

        