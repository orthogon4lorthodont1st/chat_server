# chat_server

### Clone repo

### To start client `node client/index.js`

### To start server `node server/server.js`

You will have to create your own cert and key .pem files.

I used the command at the top of this: http://www.chovy.com/web-development/self-signed-certs-with-secure-websockets-in-node-js/

Or instead you can pass a http server to the WebSocket constructor in server.js (pass express app directly into it) and change the websocket url on the client from wss:// to ws://
