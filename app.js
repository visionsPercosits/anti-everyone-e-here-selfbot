// https://discordjs-self-v13.netlify.app/#/docs/docs/main/general/welcome

const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
    checkUpdate: false,
});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

/*

Caso queiram utilizar só descomentar, esse código irá ignorar ID de outros usuários
que tentarem usar o comando.

const userID = '981688903260057650';

client.on('messageCreate', async (message) => {
    if (message.content === 'antieveryone' && message.author.id === userID) {
        console.log('It will only reply to me');
    } else {
        return;
    }
});

*/



client.on('messageCreate', (message) => {
    if (message.content === '@everyone' || message.content === '@here') {
        const BannablePerson = message.member;
        if (BannablePerson && BannablePerson.bannable) {
            BannablePerson.ban();
        }
    }
})

/*
Basicamente no bloco a cima, ele irá ser executado caso a pessoa seja banível,
É possível modificar e deixar melhor, use o script da forma que se sentir melhor.
*/

client.login('sua-token');