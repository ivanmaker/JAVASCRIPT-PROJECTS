let express = require('express');
let app = express();

let server = require('http').createServer(app);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

console.log('Server Started!');

SOCKET_LIST = {};

let io = require('socket.io')(server);
io.sockets.on('connection', function(socket) {
    console.log('new user!');
    let socketId = Math.random();
    SOCKET_LIST[socketId] = socket;
    socket.on('sendMsgToServer', function(data) {
        console.log('someone sent a message!');
        for(let i in SOCKET_LIST) {
            SOCKET_LIST[i].emit('addToChat', data);
        }
    });
    socket.on('disconnect', function() {
        delete SOCKET_LIST[socket.id];
    });
});

server.listen(4141); 