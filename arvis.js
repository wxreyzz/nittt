const { Client, GatewayIntentBits, PermissionsBitField, EmbedBuilder, ChannelType, Partials, ActionRowBuilder, Collection } = require("discord.js");
const Discord  = require('discord.js')
const Eris = require('eris')
const db = require('croxydb');
const ayarlar = require('./Settings/ayarlar.json');
const emojiler = require('./Settings/emojis.json');

const client = global.client = new Client({intents: Object.keys(GatewayIntentBits),partials:Object.keys(Partials)});

const { loadEvents } = require('./Handlers/eventHandler');
const { loadCommands } = require('./Handlers/commandHandler');

const { EventEmitter } = require('events');
EventEmitter.defaultMaxListeners = 60;

client.commands = new Collection();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ERİS SES
const _client = new Eris(ayarlar.token, {
  intents: ["all"]
});


_client.connect();

_client.on("ready", () => {
 _client.joinVoiceChannel(ayarlar.SesKanali1, { selfDeaf: true});
  _client.joinVoiceChannel(ayarlar.SesKanali2, { selfDeaf: true});
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BELİRTİLEN KANALA EMOJİ
client.on('messageCreate', message => {
  if (message.channel.id !== ayarlar.KanalaEmoji1) return; 
 if (message) { 
 message.react(emojiler.ElSallama)
 }
  });

  client.on('messageCreate', message => {
    if (message.channel.id !== ayarlar.KanalaEmoji2) return; 
   if (message) { 
    message.react(emojiler.NitroBoost)
   }
    });

    client.on('messageCreate', message => {
      if (message.author.bot) return;
      if (message.channel.id !== ayarlar.KanalaEmoji3) return; 
     if (message) { 
      message.react(emojiler.Kelebek)
     }
      });

      client.on('messageCreate', message => {
        if (message.channel.id !== ayarlar.KanalaEmoji4) return; 
       if (message) { 
        message.react("🆕")
       }
        });

              client.on('messageCreate', message => {
                if (message.author.bot) return;
                if (message.channel.id !== ayarlar.KanalaEmoji8) return; 
               if (message) { 
                message.react(emojiler.TikEmoji)
                message.react(emojiler.CarpiEmoji)
               }
                });

                client.on('messageCreate', message => {
                  if (message.author.bot) return;
                  if (message.channel.id !== ayarlar.KanalaEmoji9) return; 
                 if (message) { 
                  message.react(emojiler.TikEmoji)
                  message.react(emojiler.CarpiEmoji)
                 }
                  });

                        client.on('messageCreate', message => {
                          if (message.author.bot) return;
                          if (message.channel.id !== ayarlar.KanalaEmoji13) return; 
                         if (message) { 
                          message.react("💣")
                         }
                          });

                          client.on('messageCreate', message => {
                            if (message.author.bot) return;
                            if (message.channel.id !== ayarlar.KanalaEmoji14) return; 
                           if (message) { 
                            message.react("🔢")
                           }
                            });

                            client.on('messageCreate', message => {
                              if (message.author.bot) return;
                              if (message.channel.id !== ayarlar.KanalaEmoji15) return; 
                             if (message) { 
                              message.react("🔻")
                             }
                              });

                              client.on('messageCreate', message => {
                                if (message.author.bot) return;
                                if (message.channel.id !== ayarlar.KanalaEmoji16) return; 
                               if (message) { 
                                message.react(emojiler.Sigara)
                               }
                                });

                                client.on('messageCreate', message => {
                                  if (message.author.bot) return;
                                  if (message.channel.id !== ayarlar.KanalaEmoji17) return; 
                                 if (message) { 
                                  message.react("🎵")
                                 }
                                  });

                                  client.on('messageCreate', message => {
                                    if (message.author.bot) return;
                                    if (message.channel.id !== ayarlar.KanalaEmoji18) return; 
                                   if (message) { 
                                    message.react("🎶")
                                   }
                                    });

                                    client.on('messageCreate', message => {
                                      if (message.author.bot) return;
                                      if (message.channel.id !== ayarlar.KanalaEmoji19) return; 
                                     if (message) { 
                                      message.react(emojiler.FourDKalp)
                                     }
                                      });

                                        client.on('messageCreate', message => {
                                          if (message.channel.id !== ayarlar.KanalaEmoji21) return; 
                                         if (message) { 
                                          message.react(emojiler.Eğlence)
                                         }
                                          });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BOT ETİKETLENİNCE CEVAP
client.on("messageCreate", message => {  
  if(message.content === `<@${client.user.id}>`) {
    message.reply({ content: ayarlar.BotEtiketCevap})    
  }});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ÖZELDEN HOŞ GELDİN MESAJI
client.on('guildMemberAdd', member => {
  member.send({
    content: ayarlar.ÖzeldenHoşGeldinMesaj,
    files: [{
      attachment: `https://media.discordapp.net/attachments/1069639498637525043/1069639616291942528/tumblr_m55h3eSwMP1rvppgco1_500.gif`,
      name: `arvis0011-hosgeldinn.gif`

    }]
  });
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//KÜFÜR ENGEL SİSTEMİ
const KüfürKelimeleri = ["amk", "piç", "yarrak", "yarak", "oç", "göt", "amq", "yavşak", "amcık", "amcı", "orospu", "sikim", "sikeyim", "aq", "mk", "mq", "taşak", "taşşak", "taşağım", "taşşağım"];

_client.on('messageCreate', (msg) => {
  if (msg.author.bot || !msg.channel.guild) return;

  const hasBannedWord = KüfürKelimeleri.some((word) => msg.content.toLowerCase().includes(word.toLowerCase()));

  const KüfürengellenmemeRolID = ayarlar.KüfürEngellememeRolID;
  const hasExemptedRole = msg.member.roles.includes(KüfürengellenmemeRolID);

  if (hasBannedWord && !hasExemptedRole) {
    _client.deleteMessage(msg.channel.id, msg.id);
    _client.createMessage(msg.channel.id, `> **Öhm... ** ${msg.author.mention} __argo kelime kullanamazsın.__`)
      .then((warnMsg) => {
        setTimeout(() => {
          _client.deleteMessage(warnMsg.channel.id, warnMsg.id);
        }, 5000);
      });
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //REKLAM ENGEL SİSTEMİ
  const ReklamKelimeleri = ["discord.gg", "discord/gg", "discor.gg", "discord.gg/", "discord.g", "disco.gg", "disco.g", "disco/gg", "disco/g", "disco.gg/", "discord.gg//", ".gg/"];

_client.on('messageCreate', (msg) => {
  if (msg.author.bot || !msg.channel.guild) return;

  const hasBannedWord = ReklamKelimeleri.some((word) => msg.content.toLowerCase().includes(word.toLowerCase()));

  const ReklamengellenmemeRolID = ayarlar.ReklamEngellememeRolID;
  const hasExemptedRole = msg.member.roles.includes(ReklamengellenmemeRolID);

  if (hasBannedWord && !hasExemptedRole) {
    _client.deleteMessage(msg.channel.id, msg.id);
    _client.createMessage(msg.channel.id, `> **ŞŞ!** ${msg.author.mention} __REKLAM YAPAMAZSIN!__`)
      .then((warnMsg) => {
        setTimeout(() => {
          _client.deleteMessage(warnMsg.channel.id, warnMsg.id);
        }, 5000);
      });
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OTOMATİK SELAM
_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "sa") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "Saa") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "Saaa") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "Saaaa") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "sea") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selam aleykum") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selamaleykum") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selam aleyküm") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selamaleyküm") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selamun aleyküm") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selamunaleyküm") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selamın aleyküm") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selamınaleyküm") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selamün aleyküm") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selamünaleyküm") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selamun aleykum") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selamunaleykum") {
    msg.channel.createMessage({content: `Aleyküm selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selamlar") {
    msg.channel.createMessage({content: `Selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "selamlr") {
    msg.channel.createMessage({content: `Selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "slmlar") {
    msg.channel.createMessage({content: `Selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

_client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "salam") {
    msg.channel.createMessage({content: `Selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
  }
});

  _client.on("messageCreate", (msg) => {
    if (msg.content.toLowerCase() === "selam") {
      msg.channel.createMessage({content: `Selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
    }
  });

  _client.on("messageCreate", (msg) => {
    if (msg.content.toLowerCase() === "selm") {
      msg.channel.createMessage({content: `Selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
    }
  });

  _client.on("messageCreate", (msg) => {
    if (msg.content.toLowerCase() === "slm") {
      msg.channel.createMessage({content: `Selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
    }
  });

_client.on("messageCreate", (msg) => {
    if (msg.content.toLowerCase() === "merhabalar") {
      msg.channel.createMessage({content: `Selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
    }
  });


_client.on("messageCreate", (msg) => {
    if (msg.content.toLowerCase() === "mrhblar") {
      msg.channel.createMessage({content: `Selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
    }
  });

_client.on("messageCreate", (msg) => {
    if (msg.content.toLowerCase() === "merhablar") {
      msg.channel.createMessage({content: `Selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
    }
  });

_client.on("messageCreate", (msg) => {
    if (msg.content.toLowerCase() === "mrblar") {
      msg.channel.createMessage({content: `Selam dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
    }
  });

  _client.on("messageCreate", (msg) => {
    if (msg.content.toLowerCase() === "merhaba") {
      msg.channel.createMessage({content: `Merhaba dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
    }
  });

  _client.on("messageCreate", (msg) => {
    if (msg.content.toLowerCase() === "merhb") {
      msg.channel.createMessage({content: `Merhaba dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
    }
  });

  _client.on("messageCreate", (msg) => {
    if (msg.content.toLowerCase() === "mrhb") {
      msg.channel.createMessage({content: `Merhaba dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
    }
  });

  _client.on("messageCreate", (msg) => {
    if (msg.content.toLowerCase() === "mrb") {
      msg.channel.createMessage({content: `Merhaba dostum. **Hoş geldin!**`, messageReference:{messageID:msg.id}});
    }
  });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TICKET SISTEMI
    client.on("ready", async() => {
    const Discord = require("discord.js")
    const DestekKanal = ayarlar.DestekKanal
    const as = client.channels.cache.get(DestekKanal)
    const arvis0011 = client.channels.cache.get(ayarlar.DestekKanal)
    

      const DestekEmbed = new EmbedBuilder()
      .setDescription("### Destek talebi oluşturmak için aşağıdaki butonu kullanabilirsin.")
      .addFields(
           { name: '\u200B', value: '\u200B' },
           { name: `${emojiler.UyeBildir} Üye Bildir`, value: "- Düzeni bozan kişiyi şikayet edebilirsin.", inline: true },
           { name: `${emojiler.Sikayet} Sunucu Şikayet`, value: "- Bir şeylerin ters gittiğini düşünüyorsan bize danışabilirsin.", inline: true },
           { name: `${emojiler.IstekOneri} İstek/Öneri`, value: "- Önerin veya isteğin varsa bize sunabilirsin.", inline: true },
       )
       .setThumbnail(as.guild.iconURL({ dynamic: true, size: 2048 }))
       .setColor(0xa302d4)
      
  
      const Taleprow = new Discord.ActionRowBuilder()
      .addComponents(
      new Discord.ButtonBuilder()
      .setLabel(ayarlar.DestekTalebiAcButonText)
      .setStyle(Discord.ButtonStyle.Success)
      .setCustomId("destek")
      .setEmoji(ayarlar.DestekTalebiAcButonEmoji)
      )

      arvis0011.bulkDelete(100),
      setTimeout(() => as.send({embeds: [DestekEmbed], components:[Taleprow]}), 2000)//2000 = 2 Saniye - 10000 = 10 Saniye
  });


    client.on("interactionCreate", async(interaction) => {
    if(interaction.customId === "destek") {
      const Destekrow = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
        .setLabel(ayarlar.KategoriButon1)
        .setEmoji(ayarlar.KategoriButon1Emoji)
        .setStyle(Discord.ButtonStyle.Danger)
        .setCustomId(ayarlar.KategoriButon1CustomID),
    
        new Discord.ButtonBuilder()
        .setLabel(ayarlar.KategoriButon2)
        .setEmoji(ayarlar.KategoriButon2Emoji)
        .setStyle(Discord.ButtonStyle.Success)
        .setCustomId(ayarlar.KategoriButon2CustomID), 

        new Discord.ButtonBuilder()
        .setLabel(ayarlar.KategoriButon3)
        .setEmoji(ayarlar.KategoriButon3Emoji)
        .setStyle(Discord.ButtonStyle.Primary)
        .setCustomId(ayarlar.KategoriButon3CustomID),  
      )
        
      
      const DestekKEmbed = new EmbedBuilder()
      .setDescription("Hangi kategoride destek talebi oluşturmak istiyorsun?")
      .setColor(0x2b2d31)
    interaction.reply({embeds: [DestekKEmbed], components: [Destekrow], ephemeral: true})
  }
    
    const butonlar = ["Üye Bildir", "Sunucu Şikayet", "İstek Öneri"]

    if(butonlar.includes(interaction.customId)) {
      await interaction.deferUpdate()

      interaction.guild.channels.create({
                 name: `${interaction.user.username} - ${interaction.customId}`,
                   type: ChannelType.GuildText,
                   parent: ayarlar.KanalKategori,
    
                   permissionOverwrites: [
                     {
                         id: interaction.guild.id,
                         deny: [PermissionsBitField.Flags.ViewChannel]
                     },
                     {
                         id: interaction.user.id,
                         allow: [PermissionsBitField.Flags.ViewChannel]
                     },
                     {
                         id: ayarlar.DestekYetkilisi,
                         allow: [PermissionsBitField.Flags.ViewChannel]
                     },
                 ]
               }).then((c)=>{

                db.add(`destek_${interaction.user.id}`, +1)
                interaction.followUp({ content: `Destek talebin **(** ${c} **)** oluşturuldu.`, ephemeral: true })

    const Destekİçembed = new EmbedBuilder()
    .setDescription(ayarlar.DestekIcEmbedDesc)
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name: "- Kişi:", value: `<@${interaction.user.id}> **(** ${interaction.user.tag} **)**`, inline: true},
      {name: "- Talep Konusu:", value: `${interaction.customId}`, inline: true})
    .setColor(0xa302d4)

    const Bittirow = new ActionRowBuilder()
    .addComponents(
      new Discord.ButtonBuilder()
      .setEmoji(ayarlar.DestekIcKapatButonEmoji)
      .setLabel(ayarlar.DestekIcKapatButonText)
      .setStyle(Discord.ButtonStyle.Danger)
      .setCustomId("desteğikapat"),

      new Discord.ButtonBuilder()
      .setEmoji(ayarlar.DestekIcYedekButonEmoji)
      .setLabel(ayarlar.DestekIcYedekButonText)
      .setStyle(Discord.ButtonStyle.Success)
      .setCustomId("transcript"),

      new Discord.ButtonBuilder()
      .setEmoji(ayarlar.DestekIcKanaliSilButonEmoji)
      .setLabel(ayarlar.DestekIcKanaliSilButonText)
      .setStyle(Discord.ButtonStyle.Secondary)
      .setCustomId("kanalısil"),
    )
    
    const opened = c.send({
      content: `**(** <@&${ayarlar.DestekYetkilisi}> **)** yeni bir destek talebi var.`,
      embeds: [Destekİçembed],
      components: [Bittirow]
    }).then(a => {
      a.pin()
      setTimeout(() => c.bulkDelete(1), 1000)//1000 = 1 Saniye - 10000 = 10 Saniye
     })
    })
      }})


    process.on("unhandledRejection", console.error)


    client.on("interactionCreate", async (interaction) => {
      if (interaction.customId === "desteğikapat") {
        const channel = interaction.channel;

        const TalepKapatEmbed = new EmbedBuilder()
          .setDescription(ayarlar.DestekKapatEmbedDesc)
          .setColor(0xda373c);
        await interaction.reply({ embeds: [TalepKapatEmbed] });

        channel.permissionOverwrites.edit(interaction.user.id, { ViewChannel: false });

      }
    });


    client.on("interactionCreate", async (interaction) => {
      if (interaction.customId === "transcript") {
        const targetChannel = client.channels.cache.get(ayarlar.Transcript);
        const fs = require('fs');

const generateHTMLTranscript = async (channel) => {
  let html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Transkript</title>
        <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #36393f;
        margin: 0;
        padding: 20px;
        color: #fff;
      }

      .message {
        margin-bottom: 20px;
        background-color: #40444b;
        padding: 15px;
        border-radius: 5px;
      }

      .message .author {
        font-weight: bold;
        color: #fff;
      }

      .message .timestamp {
        color: #b9bbbe;
        font-size: 12px;
        margin-left: 10px;
      }

      .message .content {
        margin-top: 10px;
        color: #dcddde;
      }

      .message .attachment {
        margin-top: 10px;
        color: #dcddde;
      }

      .message.bot .author {
        color: #7289da;
      }

      .message .avatar {
        float: left;
        margin-right: 10px;
        border-radius: 50%;
        overflow: hidden;
      }

      .message .avatar img {
        width: 32px;
        height: 32px;
      }
    </style>
      </head>
      <body>
  `;

  const messages = await channel.messages.fetch({ limit: 100 });

  messages.forEach((message) => {
    if (message.author.bot) return; 

    const { author, content, createdTimestamp, attachments } = message;
    const timestamp = new Date(createdTimestamp).toLocaleString();

    const avatarURL = author.avatarURL({ format: 'png', dynamic: true, size: 32 });

    html += `
      <div class="message${author.bot ? ' bot' : ''}">
        <div class="avatar">
          <img src="${avatarURL}" alt="Avatar">
        </div>
        <div class="author">${author.username}</div>
        <div class="timestamp">${timestamp}</div>
        <div class="content">${content}</div>
    `;

    if (attachments.size > 0) {
      html += '<div class="attachment">';
      attachments.forEach((attachment) => {
        html += `<a href="${attachment.url}">${attachment.name}</a><br>`;
      });
      html += '</div>';
    }

    html += '</div>';
  });

  html += `
      </body>
    </html>
  `;

  return html;
};

const supportChannel = client.channels.cache.get(interaction.channel.id); 

generateHTMLTranscript(supportChannel)
  .then((html) => {
    fs.writeFileSync(`./HTML/${interaction.user.id}.html`, html);
  })
  .catch(console.error);
    
        const TalepYedekEmbed = new EmbedBuilder()
          .setDescription(`Destek talebi yedekleri **(** <#${ayarlar.Transcript}> **)** adlı kanala **gönderildi.**`)
          .setColor(0x248046);
        
        await interaction.reply({ embeds: [TalepYedekEmbed] });

        targetChannel.send({
          files: [`./HTML/${interaction.user.id}.html`]
        });
      }
    });
    

    client.on("interactionCreate", async (interaction) => {
      const channel = interaction.channel;
      if (interaction.customId === "kanalısil") {
          const member = interaction.member;
  
          const TalepSilEmbed = new EmbedBuilder()
              .setDescription(ayarlar.KanaliSilEmbedDesc)
              .setColor(0x2b2d31);
          await interaction.reply({ embeds: [TalepSilEmbed] });
  
          setTimeout(() => channel.delete(), 10000); // 5000 = 5 Saniye - 10000 = 10 Saniye
      }
  });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


client.login(ayarlar.token).then(() => {
    loadEvents(client);
    loadCommands(client);
});