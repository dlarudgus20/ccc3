import * as io from 'socket.io';

console.log('start');

var port = 35769;

var server = io(port);

server.on('connection', (sock) => {
  console.log('new connection');
  sock.on('disconnection', () => {
    console.log('disconnected');
  });
});
