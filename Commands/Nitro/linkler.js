const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("linkler")
    .setDescription("İşine yarayabilecek linkleri verir."),

        async execute(interaction) {
            const user = interaction.user

            const LinklerEmbed = new EmbedBuilder()
	        .setColor(0x4c4277)
	        .setDescription("## Gift A-Gen | Linkler \n\n<a:inflove_arvis0011:1058011368701313125>・[**Botu Davet Et**](https://discord.com/api/oauth2/authorize?client_id=1042908645073104956&permissions=8&scope=applications.commands%20bot) \n\n\n<:discord:997610089651384342>・[**Destek Sunucusu**](https://discord.gg/q8qhV5MAzf) \n\n<:instagram2_arvis0011:1058011366864195604>・[**Instagram Hesabı**](https://www.instagram.com/arvis_here/)")
        
		        .setImage("https://media.discordapp.net/attachments/1116707130452488302/1116712446955094016/Linkler.png?width=737&height=294")
                .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 2048 }))
            
            await interaction.reply({ embeds: [LinklerEmbed] })
        }
}

        