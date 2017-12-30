var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
 //send a new message
  socket.emit('createMessage', {
    from: 'roy',
    text: 'hey, this is Jeff with a new message  - the client in index.js'
  });

});

socket.on('disconnect',  function () {
  console.log('Disconnected from server');
});

//listening for a new message
socket.on('newMessage', function(message) {
  console.log('There is a newMessage: ', message);
})
