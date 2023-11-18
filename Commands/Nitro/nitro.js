const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const randomstring = require("randomstring");
const amountnitro = 0;

module.exports = {
    data: new SlashCommandBuilder()
    .setName("nitro")
    .setDescription("25 adet nitro kodu üretir."),

        async execute(interaction) {
            const user = interaction.user
            const author = user

            const nitroeöbed= new EmbedBuilder()
            .setColor(0xb0796d)
            .setDescription('# Kodlar Üretiliyor... \n\n## NOT: \n<a:bir_arvis0011:1103354362530643969> **__"Mesaj İstekleri"__** kısmına bakmayı ihmal etme. \n\n<a:iki_arvis0011:1103354359015800953> **__"Sunucu Üyelerinden Gelen Direkt Mesajlara İzin Ver"__**, ayarı kapalıysa muhakkak aç.')
			      .setImage("https://media.discordapp.net/attachments/1116707130452488302/1116711426447392880/Kodlar_Urtiliyor.gif?width=431&height=172")
                  .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 2048 }))
                  await interaction.reply({ embeds: [nitroeöbed] })

        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});
        author.send("https://discord.gift/" + randomstring.generate(16)).catch(() => {});

        author.send("<:moderndeveloper_arvis0011:1070318193903669299> **Developer:** arvis.").catch(() => {});
        author.send("<:instagram2_arvis0011:1058011366864195604> **Instagram:** https://www.instagram.com/arvis_here/").catch(() => {});
        author.send("<:discord:997610089651384342> **Destek Sunucusu:** https://discord.gg/q8qhV5MAzf").catch(() => {});
        
        author.send(`<a:dikkat_arvis0011:997074866371039322>・__Nitro hediye kodları, "Farklı karakterlerle rastgele olarak" üretiliyor. %2'lik bir ihtimalle çıkma şansı var.__`).catch(() => {});
        
    }
}