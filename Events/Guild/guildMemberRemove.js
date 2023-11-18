const { EmbedBuilder } = require('discord.js');

const ayarlar = require('../.././Settings/ayarlar.json');
const emojiler = require('../.././Settings/emojis.json');


module.exports = {
    name: "guildMemberRemove",
    execute(member) {
        const CikisKanal = client.channels.cache.get(ayarlar.CikisKanal)

        CikisKanal.send(`${emojiler.CikisOkEmoji} ${member} **(** ${member.displayName}#${member.user.discriminator} **)** sunucudan **ayrıldı.**`)
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* #GELİŞMİŞ ÇIKIŞ SİSTEMİ
module.exports = {
    name: "guildMemberRemove",
    execute(member) {
        const {user, guild} = member;
        const AyrılmaKanalı = member.guild.channels.cache.get('');
        const AyrılmaMesajı = `**Darkness**'ı beğenmemiş olacak ki bir anda çıkıp gitti, keşke bir güle güle deseydi...

Tekrardan gelmen dileğiyle yoldaş, kendine iyi bak. Bizi unutma :(`

        const AyrılmaEmbed = new EmbedBuilder()
        .setTitle("<a:sigara_arvis0011:1051131551330607104> Vahşi Üye Aramızdan Ayrıldı :(")
        .setDescription(AyrılmaMesajı)
        .setThumbnail(member.user.displayAvatarURL())
        .setImage("https://media.discordapp.net/attachments/1069582220475502652/1069597327116992624/darknesshosgeldinbaybayembedbanner.gif?width=450&height=225")
        .setColor(0x9c0015)
        .setFooter({ text: `❤️ ArviS・${member.guild.memberCount} Kişi Kaldık`, iconURL: guild.iconURL({ dynamic: true }) })
        AyrılmaKanalı.send(`${member}`)
        
        AyrılmaKanalı.send({embeds: [AyrılmaEmbed]}); 
    }
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////