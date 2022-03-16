const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 4000 });

server.on('connection', (socket) => {
  socket.on('message', (msg, binary) => {
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg, { binary: binary });
      }
    });
  });
});
