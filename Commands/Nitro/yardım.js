const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("yardım")
    .setDescription("Yardım menüsünü açar."),

        async execute(interaction) {
            const user = interaction.user

            const agenyardımembed = new EmbedBuilder()
        	    .setColor(0xab8d3c)
                .setDescription("## Gift A-Gen | Yardım Menüsü")
                .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: `<a:nitroboost_arvis0011:1058003701496807544>・**nitro**`, value: "- `25 adet Nitro Hediye Kodu gönderir.`", inline: true },
                { name: `<a:4boyutdonensiyahkalp_arvis0011:1051894482381062164>・**linkler**`, value: "- `İşine yarayabilecek linkleri verir.`", inline: true },
                { name: `<a:kelebek2_arvis0011:1058005321504804934>・**bilgi**`, value: "- `Bot hakkında bilgi verir.`", inline: true },
             )
		        .setImage("https://media.discordapp.net/attachments/1116707130452488302/1116709664084742245/Gift_Ag-Gen_Yardm_Embed_Image.png?width=719&height=287")
                .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 2048 }))
            
            await interaction.reply({ embeds: [agenyardımembed] })
        }
}