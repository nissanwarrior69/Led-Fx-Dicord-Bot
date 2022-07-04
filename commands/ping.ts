import { ICommand } from "wokcommands";

export default{
    category: 'testing',
    description: 'replies with pong',

    callback: ({ message }) => {
        message.reply('pong')
    },
} as ICommand