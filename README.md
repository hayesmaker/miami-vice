### Miami VICE

- Codenamed Miami VICE this is a small webapp which just has to call a websocket from a webpage with zero or any
custom arguments which can be listened to on a NODE server and be used to call other commands.

- This can be useful for making things happen when the web app is loaded up by a scene change in OBS for example.


# INSTALL


From project root:

cd miami-node 
npm i

From project root again:

cd miami-web
npm i

# Usage

start node server: 

From miami-node dir

npm start

From miami web dir

npm start


# Prerequisites

the node server expects Twitch credentials to be set in a .env file inside miami-node directory

//eg 

//.env
TWITCH_BOT_USER='username'
TWITCH_BOT_OAUTH='oauth:zzzzzzzzzzzzzzzz'
TWITCH_BOT_CHANNEL='channel-name'

