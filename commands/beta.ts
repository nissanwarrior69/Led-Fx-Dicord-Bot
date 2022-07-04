import { ICommand } from "wokcommands";

export default{
    category: 'links',
    description: "replies with link to blade's ledfx beta",

    callback: ({ message }) => {
        message.reply('https://my.ledfx.app/downloads/')
    },
} as ICommand