require('dotenv').config()

const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});
// Listens to incoming messages that contain "hello"
app.message('hola', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Buenas <@${message.user}>!`);
  });
  
  (async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);
  
    console.log('⚡️ Bolt app is running!');
  })();