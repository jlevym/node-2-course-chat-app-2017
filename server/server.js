const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message.js');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 4000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // send welcome message from admin to new user only
  socket.emit('newMessage',
    generateMessage('Admin', 'Welcome to the chat app'));

  // announce new user to all users except new users
  socket.broadcast.emit('newMessage',
    generateMessage('Admin', 'New user joined'));

  // listen for new Message and emit to all
  socket.on('createMessage', (message, callback) => {
    console.log(('createMessage'), message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('the createMessage sent to the server was valid')
  });


  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
