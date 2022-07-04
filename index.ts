//import all dependencies needed
import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import WOKCommands from 'wokcommands'
import path from 'path'
//passes token to client.login
dotenv.config()
//creates led-fx bot
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})
//starts led-fx bot
client.on('ready', () => {
    new WOKCommands(client, {
        //The name of the local folder for your commands
        commandDir: path.join(__dirname, 'commands'),
        //allow importing of .ts files if you are using ts-node
        typeScript: true,
    })
    console.log('Bot is ready')
})

//logins to discord
client.login(process.env.TOKEN)
