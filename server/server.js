const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 4000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // emit new message
  socket.emit('newMessage', {
    from: 'david',
    text: 'hi from David in server.js with a short message',
    createdAt: (new Date()).getTime()
  });

  // listen for new Message
  socket.on('createMessage', (newMsg) => {
    console.log('received a createMessage', newMsg)
  });


  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
