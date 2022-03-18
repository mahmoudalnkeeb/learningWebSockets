const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 4000 });

server.on('connection', (socket, req) => {
  //send and receive msgs
  socket.on('message', (msg, binary) => {
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg, {
          binary: binary,
        });
      }
    });
  });

  // every client connect it will send a msg 'conncted' to all users
  server.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(client.readyState);
    }
  });

  // every client disconnect it will send a msg 'disconnected' to all users
  server.clients.forEach((client) => {
    client.send(client.readyState);
  });
});

// JSON.stringify(req.socket._server._connections);  connected clients