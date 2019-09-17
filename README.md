### Miami VICE

- Codenamed Miami VICE this is a small webapp which just has to call a websocket from a webpage with zero or any
custom arguments which can be listened to on a NODE server and be used to call other commands.

- This can be useful for making things happen when the web app is loaded up by a scene change in OBS for example.

# Prerequisites

the node server expects Twitch credentials to be set in a .env file inside miami-node directory

`//.env (in miami-node dir)`

```
TWITCH_BOT_USER='username'
TWITCH_BOT_OAUTH='oauth:zzzzzzzzzzzzzzzz'
TWITCH_BOT_CHANNEL='channel-name'
```

# INSTALL

From project root:

`cd miami-node`
`npm i`

From project root again:

`cd miami-web`
`npm i`

# Usage

Start node server: 

From miami-node dir

`npm start`

Start web application server

From miami web dir

`npm start`


# OBS Scene usage

- Create a new OBS Scene
- Create a new Browser Source layer
- Make the browser source point to `http://localhost:3000`
- Make sure shutdown when source is not visible is selected

- Now whenever you select this scene, you should see logging in the node server window: 

command:build received with args  my first custom command argument

- Now find this log in the miami-node/index.js and do what you want there





