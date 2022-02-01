import { Client, Intents, MessageEmbed } from 'discord.js';
import { filterCommands } from './command';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('messageCreate', async (messsage) => {
  const m = messsage.content.toLocaleLowerCase();
  if (m.startsWith('!')) {
    const r = filterCommands(m);
    if (r) {
      messsage.reply(r);
    }
  }
});

client.on('presenceUpdate', (oldMember, newMember) => {
  console.log(oldMember, newMember);
});
client.login(process.env.API_KEY);
