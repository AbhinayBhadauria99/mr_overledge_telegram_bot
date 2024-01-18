const fs = require('fs');
const { Telegraf } = require('telegraf');

const bot = new Telegraf('6437223703:AAHXnf0ceqbSrAFYF17RPAmmsdV-bslWJs0');

const chatbotData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

bot.command('ask', (ctx) => {
    const command = ctx.message.text.slice(5); // Extracting the command, assuming it starts with "/ask "


    if (chatbotData.hasOwnProperty(command)) {

        ctx.reply(chatbotData[command]);
    } else {
        ctx.reply("Sorry, I don't understand that question.");
    }
});


bot.start((ctx) => ctx.reply('Welcome'));
bot.command('hi', (ctx) => ctx.reply('hey how are you?'));
bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.launch()



// t.me/mr_overledge_bot
// Run code manually in pc and open above link
// All the json commands should start with "/ask What is your name?"