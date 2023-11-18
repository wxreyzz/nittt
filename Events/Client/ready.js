const { ActivityType } = require('discord.js');
const ayarlar = require('../../Settings/ayarlar.json');

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
      
	client.user.setPresence({
  activities: [{ name: ayarlar.BotOynuyor, type: ActivityType.Playing }],
  status: ayarlar.BotStatus,
});

  console.log(`[AKTİF] ${client.user.username}`);
    },
};