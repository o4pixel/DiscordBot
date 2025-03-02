# Discord Moderation Bot

This is a simple Discord moderation bot built using `discord.js`. It provides basic moderation commands such as kicking, banning, and clearing messages.

## Features
- Kick users
- Ban users
- Clear messages in bulk

## Prerequisites
- Node.js installed
- A Discord bot token (from the [Discord Developer Portal](https://discord.com/developers/applications))
- `discord.js` and `dotenv` installed

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/discord-moderation-bot.git
   ```
2. Navigate to the project folder:
   ```sh
   cd discord-moderation-bot
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your bot token:
   ```env
   TOKEN=your-bot-token-here
   ```
5. Start the bot:
   ```sh
   node bot.js
   ```

## Commands
| Command       | Description | Required Permission |
|--------------|-------------|---------------------|
| `!kick @user` | Kicks the mentioned user | Kick Members |
| `!ban @user` | Bans the mentioned user | Ban Members |
| `!clear <number>` | Deletes specified number of messages (1-100) | Manage Messages |

## Notes
- The bot must have the necessary permissions in the Discord server.
- The `clear` command can only delete messages from the last 14 days due to Discord API limitations.

## Contributing
Feel free to fork this repository and submit pull requests.

## Contact
For issues or suggestions, open an issue on the [GitHub repository](https://github.com/o4pixel/DiscordBot/).
