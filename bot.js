const { Client, GatewayIntentBits, PermissionsBitField } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
});

const PREFIX = '!';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    
    const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
    const command = args.shift().toLowerCase();

    if (command === 'kick') {
        if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
            return message.reply('You do not have permission to kick members.');
        }
        
        const member = message.mentions.members.first();
        if (!member) return message.reply('Please mention a valid member to kick.');
        
        try {
            await member.kick();
            message.channel.send(`${member.user.tag} has been kicked.`);
        } catch (error) {
            message.channel.send('Failed to kick the member.');
            console.error(error);
        }
    }

    if (command === 'ban') {
        if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
            return message.reply('You do not have permission to ban members.');
        }
        
        const member = message.mentions.members.first();
        if (!member) return message.reply('Please mention a valid member to ban.');
        
        try {
            await member.ban();
            message.channel.send(`${member.user.tag} has been banned.`);
        } catch (error) {
            message.channel.send('Failed to ban the member.');
            console.error(error);
        }
    }

    if (command === 'clear') {
        if (!message.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
            return message.reply('You do not have permission to delete messages.');
        }
        
        const amount = parseInt(args[0]);
        if (isNaN(amount) || amount < 1 || amount > 100) {
            return message.reply('Please specify a number between 1 and 100.');
        }
        
        try {
            await message.channel.bulkDelete(amount, true);
            message.channel.send(`Deleted ${amount} messages.`);
        } catch (error) {
            message.channel.send('Failed to delete messages.');
            console.error(error);
        }
    }
});

client.login(process.env.TOKEN);
