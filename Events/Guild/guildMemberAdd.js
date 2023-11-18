const { EmbedBuilder } = require('discord.js');
const canvafy = require('canvafy');

const ayarlar = require('../.././Settings/ayarlar.json');
const emojiler = require('../.././Settings/emojis.json');


client.on('guildMemberAdd', async member => {
    const security = await new canvafy.Security()
      .setAvatar(member.user.displayAvatarURL({extension:"png",forceStatic:true}))
      .setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
      .setCreatedTimestamp(member.user.createdTimestamp)
      .setSuspectTimestamp(604800000)//1 Hafta
      .setBorder("#f0f0f0")
      .setLocale("en")
      .setAvatarBorder("#f0f0f0")
      .setOverlayOpacity(0.9)
      .build();
  
    member.guild.channels.cache.get(ayarlar.GirisKanal).send({
      content: `${emojiler.GirisOkEmoji} ${member} **(** ${member.displayName}#${member.user.discriminator} **)** sunucuya **katıldı.**`,
      files: [{
        attachment: security,
        name: `arvis0011-gma.png`
      }]
    });
  });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* #SADE GİRİŞ SİSTEMİ
module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        const GirisKanal = client.channels.cache.get(ayarlar.GirisKanal)

        GirisKanal.send(`${emojiler.GirisOkEmoji} ${member} **(** ${member.displayName}#${member.user.discriminator} **)** sunucuya **katıldı.**`)
    }
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* #GELİŞMİŞ GİRİŞ SİSTEMİ
module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        const {user, guild} = member;
        const GirisKanal = member.guild.channels.cache.get('');
        const GirişMesaj = `Selamm, aramıza hoş geldin

**Darkness** sunucusu, kurallarına uyulduğu sürece herkese kapısı açık bir sunucudur

<#1069349864460263424> Kanalından kayıt işlemlerini tamamlayıp aramıza katıl

 __Unutma, burada önemseniyor ve seviliyorsun__ <a:4dkalp_arvis0011:1051894482381062164>`

        const GirişEmbed = new EmbedBuilder()
        .setTitle("<a:elsallama_arvis0011:1048619375655133255> Vahşi Bir Üye Belirdi!")
        .setDescription(GirişMesaj)
        .setThumbnail(member.user.displayAvatarURL())
        .setImage("https://media.discordapp.net/attachments/1069582220475502652/1069597327116992624/darknesshosgeldinbaybayembedbanner.gif?width=450&height=225")
        .setColor(0x9c0015)
        .setFooter({ text: `❤️ ArviS・${member.guild.memberCount} Kişi Olduk`, iconURL: guild.iconURL({ dynamic: true }) })
        GirisKanal.send(`${member}`)

        GirisKanal.send({embeds: [GirişEmbed]});
    }
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////