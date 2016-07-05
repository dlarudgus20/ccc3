import * as io from 'socket.io';

console.log('start');

var port = 35769;

var srvsock = io(port);

srvsock.on('connection', function(sock :SocketIO.Socket) {
  console.log('new connection');
  sock.on('disconnection', function() {
    console.log('disconnected');
  });
});
