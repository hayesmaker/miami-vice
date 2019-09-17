const TwitchBot = require('twitch-bot');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
require('dotenv').config();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const port = 8081;
server = app.listen(port);
const io = require('socket.io')(server);


const Bot = new TwitchBot({
  username: process.env.TWITCH_USERNAME,
  oauth: process.env.TWITCH_BOT_OAUTH,
  channels: [process.env.TWITCH_BOT_CHANNEL]
});

Bot.on('join', (channel) => {
  console.log(`joined channel: ${channel}`);
});

Bot.on('error', (err) => {
  console.log(err)
});


Bot.on('message', (chatter) => {
  if (chatter.message.toLowerCase().indexOf("!hayeshype") === 0) {
    let msg = "hayesmAkerHype hayesmAkerC64 hayesmAkerClyde CurseLit hayesmAkerHype hayesmAkerC64 hayesmAkerClyde CurseLit hayesmAkerHype hayesmAkerC64 hayesmAkerClyde CurseLit hayesmAkerHype hayesmAkerC64 hayesmAkerClyde CurseLit hayesmAkerHype hayesmAkerC64 hayesmAkerClyde CurseLit hayesmAkerHype hayesmAkerC64 hayesmAkerClyde CurseLit hayesmAkerHype hayesmAkerC64 hayesmAkerClyde CurseLit hayesmAkerHype hayesmAkerC64 hayesmAkerClyde"
    Bot.say(msg)
  }
});


io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat:say', message => {
    Bot.say(message);
  });

  socket.on('command:build', (args) => {
    console.log("command:build received with args ", args[0]);
    //todo: launch your shit here!
  });

  socket.on('overlay:title:change', (data) => {
    //io.sockets.emit('overlay:title', data)
  });

});

