console.log('start');

var port = 37269;

var io = require('socket.io')(port);

io.on('connection', function(sock) {

});
