import * as io from 'socket.io';

console.log('start');

var port = 35769;

var server = io(port);

interface LoginInfo {
  username: String;
  password: String;
}

server.on('connection', (socket) => {
  console.log('new connection');
  socket.on('disconnection', () => {
    console.log('disconnected');
  });
  socket.on('error', () => {
    console.log('error');
  });
  socket.on('login', (username: String, password: String) => {
    console.log('login', `username: ${username}, password: ${password}`);
    socket.emit('logined', { nick: username });
  });
});
